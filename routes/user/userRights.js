const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config/database');

const User = require('../../models/user/user');
const UserRights = require('../../models/user/userRights');



//Rechteüberprüfung - explizit
router.get('/checkRights/:rightToCheck', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    console.log('REQ-GET | userRights.js | /checkRights/:rightToCheck');
    let rightToCheck = req.params.rightToCheck;
    UserRights.findById(req.user.userRights, (err, userRights) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            if(userRights[rightToCheck]) {
                return res.json(true);
            } 
            
            return res.json(false);
        }
    });
});

//Rechteüberprüfung alle
router.get('/checkRights/all/:userRightsId', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    console.log('REQ-GET | userRights.js | /checkRights/all/:userRightsId');

    let userRightsId = req.params.userRightsId;
    UserRights.findById(userRightsId)
    .exec( function (err, userRights) {

        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.json({ userRights });
        }
    });
});

//Update der Rechte
router.post('/updateRights/', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    console.log('REQ-POST | userRights.js | /updateRights');
    UserRights.findById(req.user.userRights).exec(function(err, inquirerUserRights) {
        UserRights.findById(req.body.userRightsId)
        .exec( function (err, userRights) {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            }
            if(inquirerUserRights.canChangeUserRights || inquirerUserRights.isAdmin){
                userRights.set({
                    isActivated: req.body.isActivated,
                    isAdmin: req.body.isAdmin,
                    isInternal: req.body.isInternal,
                    generalSettings: req.body.generalSettings,
                    emailSettings: req.body.emailSettings,
                    inventorySettings: req.body.inventorySettings,
                    customerSettings: req.body.customerSettings,
                    generalLogbook: req.body.generalLogbook,
                    terminalSettings: req.body.terminalSettings,
                    restSettings: req.body.restSettings,
                    canChangeUserRights: req.body.canChangeUserRights,
                    canAttachUserToPartner: req.body.canAttachUserToPartner,
                    canSearchAllCustomer: req.body.canSearchAllCustomer,
                    canOnlySearchGroupCustomer: req.body.canOnlySearchGroupCustomer,
                    canAddCustomerContact: req.body.canAddCustomerContact,
                    canLoadCustomerContacts: req.body.canLoadCustomerContacts,
                    canEditCustomerContacts: req.body.canEditCustomerContacts,
                    canLoadCustomerTerminals: req.body.canLoadCustomerTerminals,
                    canLoadCustomerLogbook: req.body.canLoadCustomerLogbook,
                    canLoadCustomerNote: req.body.canLoadCustomerNote,
                    canAddCustomerNote: req.body.canAddCustomerNote,
                    canAddCustomer: req.body.canAddCustomer,
                    canEditCustomer: req.body.canEditCustomer,
                    canDeleteCustomer: req.body.canDeleteCustomer,
                    canSearchInventory: req.body.canSearchInventory,
                    canAddInventoryItem: req.body.canAddInventoryItem,
                    canEditInventoryItem: req.body.canEditInventoryItem,
                    canDeleteInventoryItem: req.body.canDeleteInventoryItem,
                    canLoadInventoryLogbook: req.body.canLoadInventoryLogbook,
                    canAddCategory: req.body.canAddCategory,
                    canLoadCategory: req.body.canLoadCategory,
                    canDeleteCategory: req.body.canDeleteCategory,
                    canAddStock: req.body.canAddStock,
                    canLoadStock: req.body.canLoadStock,
                    canDeleteStock: req.body.canDeleteStock,
                    canAddAddresstype: req.body.canAddAddresstype,
                    canLoadAddresstype: req.body.canLoadAddresstype,
                    canDeleteAddresstype: req.body.canDeleteAddresstype,
                    canAddGroup: req.body.canAddGroup,
                    canLoadGroup: req.body.canLoadGroup,
                    canDeleteGroup: req.body.canDeleteGroup,
                    canAddDsgvoSource: req.body.canAddDsgvoSource,
                    canLoadDsgvoSource: req.body.canLoadDsgvoSource,
                    canDeleteDsgvoSource: req.body.canDeleteDsgvoSource,
                    canAddCustomerNoteCategory: req.body.canAddCustomerNoteCategory,
                    canLoadCustomerNoteCategory: req.body.canLoadCustomerNoteCategory,
                    canDeleteCustomerNoteCategory: req.body.canDeleteCustomerNoteCategory,
                    canAddCustomerNoteCallCategory: req.body.canAddCustomerNoteCallCategory,
                    canLoadCustomerNoteCallCategory: req.body.canLoadCustomerNoteCallCategory,
                    canDeleteCustomerNoteCallCategory: req.body.canDeleteCustomerNoteCallCategory,
                    canAddInterface: req.body.canAddInterface,
                    canLoadInterface: req.body.canLoadInterface,
                    canDeleteInterface: req.body.canDeleteInterface,
                    canAddExtension: req.body.canAddExtension,
                    canLoadExtension: req.body.canLoadExtension,
                    canDeleteExtension: req.body.canDeleteExtension,
                    canAddDeviceType: req.body.canAddDeviceType,
                    canLoadDeviceType: req.body.canLoadDeviceType,
                    canDeleteDeviceType: req.body.canDeleteDeviceType,
                    canAddReadMethod: req.body.canAddReadMethod,
                    canLoadReadMethod: req.body.canLoadReadMethod,
                    canDeleteReadMethod: req.body.canDeleteReadMethod,
                    canAddLayout: req.body.canAddLayout,
                    canLoadLayout: req.body.canLoadLayout,
                    canDeleteLayout: req.body.canDeleteLayout,
                    canAddFirmware: req.body.canAddFirmware,
                    canLoadFirmware: req.body.canLoadFirmware,
                    canDeleteFirmware: req.body.canDeleteFirmware,
                    canAddDisplayFile: req.body.canAddDisplayFile,
                    canLoadDisplayFile: req.body.canLoadDisplayFile,
                    canDeleteDisplayFile: req.body.canDeleteDisplayFile,
                    canAddPowerSupplyUnit: req.body.canAddPowerSupplyUnit,
                    canLoadPowerSupplyUnit: req.body.canLoadPowerSupplyUnit,
                    canDeletePowerSupplyUnit: req.body.canDeletePowerSupplyUnit,
                    canAddTerminalType: req.body.canAddTerminalType,
                    canDeleteTerminalType: req.body.canDeleteTerminalType
                })

                User.findById(userRights.userId).exec(function (err, user) {
                    if(user.isLoggedIn) {
                        user.set({
                            hasToRelog: true
                        })
            
                        user.save();
                    }
                });

                userRights.save(function (err, updatedUserRights) {
                    if (err) {
                        console.log(err);
                        return res.json({success: false})
                    } else {
                        return res.json({success: true});
                    }
        
                });
            } else {
                return res.status(401).json({success: false});
            } 
        });
    })
    
});


module.exports = router;