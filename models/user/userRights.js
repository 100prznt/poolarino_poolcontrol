const mongoose = require('mongoose');

//UserRights Schema - Datenbankaufbau
const UserRightsSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isInternal: {
        type: Boolean,
        default: false
    },
    generalSettings: {
        type: Boolean,
        default: false
    },
    emailSettings: {
        type: Boolean,
        default: false
    },
    inventorySettings: {
        type: Boolean,
        default: false
    },
    customerSettings: {
        type: Boolean,
        default: false
    },
    generalLogbook: {
        type: Boolean,
        default: false
    },
    restSettings: {
        type: Boolean,
        default: false
    },
    terminalSettings: {
        type: Boolean,
        default: false
    },
    canChangeUserRights: {
        type: Boolean,
        default: false
    },
    canAttachUserToPartner: {
        type: Boolean,
        default: false
    },
    canSearchAllCustomer: {
        type: Boolean,
        default: false
    },
    canOnlySearchGroupCustomer: {
        type: Boolean,
        default: false
    },
    canAddCustomer: {
        type: Boolean,
        default: false
    },
    canEditCustomer: {
        type: Boolean,
        default: false
    },
    canAddCustomerContact: {
        type: Boolean,
        default: false
    },
    canLoadCustomerContacts: {
        type: Boolean,
        default: false
    },
    canEditCustomerContacts: {
        type: Boolean,
        default: false
    },
    canLoadCustomerTerminals: {
        type: Boolean,
        default: false
    },
    canLoadCustomerLogbook: {
        type: Boolean,
        default: false
    },
    canAddCustomerNote: {
        type: Boolean,
        default: false
    },
    canLoadCustomerNote: {
        type: Boolean,
        default: false
    },
    canDeleteCustomer: {
        type: Boolean,
        default: false
    },
    canSearchInventory: {
        type: Boolean,
        default: false
    },
    canAddInventoryItem: {
        type: Boolean,
        default: false
    },
    canEditInventoryItem: {
        type: Boolean,
        default: false
    },
    canLoadInventoryLogbook: {
        type: Boolean,
        default: false
    },
    canDeleteInventoryItem: {
        type: Boolean,
        default: false
    },
    canAddCategory: {
        type: Boolean,
        default: false
    },
    canLoadCategory: {
        type: Boolean,
        default: false
    },
    canDeleteCategory: {
        type: Boolean,
        default: false
    },
    canAddStock: {
        type: Boolean,
        default: false
    },
    canLoadStock: {
        type: Boolean,
        default: false
    },
    canDeleteStock: {
        type: Boolean,
        default: false
    },
    canAddAddresstype: {
        type: Boolean,
        default: false
    },
    canLoadAddresstype: {
        type: Boolean,
        default: false
    },
    canDeleteAddresstype: {
        type: Boolean,
        default: false
    },
    canAddGroup: {
        type: Boolean,
        default: false
    },
    canLoadGroup: {
        type: Boolean,
        default: false
    },
    canDeleteGroup: {
        type: Boolean,
        default: false
    },
    canAddDsgvoSource: {
        type: Boolean,
        default: false
    },
    canLoadDsgvoSource: {
        type: Boolean,
        default: false
    },
    canDeleteDsgvoSource: {
        type: Boolean,
        default: false
    },
    canAddCustomerNoteCategory: {
        type: Boolean,
        default: false
    },
    canLoadCustomerNoteCategory: {
        type: Boolean,
        default: false
    },
    canDeleteCustomerNoteCategory: {
        type: Boolean,
        default: false
    },
    canAddCustomerNoteCallCategory: {
        type: Boolean,
        default: false
    },
    canLoadCustomerNoteCallCategory: {
        type: Boolean,
        default: false
    },
    canDeleteCustomerNoteCallCategory: {
        type: Boolean,
        default: false
    },
    canAddInterface: {
        type: Boolean,
        default: false
    },
    canLoadInterface: {
        type: Boolean,
        default: false
    },
    canDeleteInterface: {
        type: Boolean,
        default: false
    },
    canAddExtension: {
        type: Boolean,
        default: false
    },
    canLoadExtension: {
        type: Boolean,
        default: false
    },
    canDeleteExtension: {
        type: Boolean,
        default: false
    },
    canAddDeviceType: {
        type: Boolean,
        default: false
    },
    canLoadDeviceType: {
        type: Boolean,
        default: false
    },
    canDeleteDeviceType: {
        type: Boolean,
        default: false
    },
    canAddReadMethod: {
        type: Boolean,
        default: false
    },
    canLoadReadMethod: {
        type: Boolean,
        default: false
    },
    canDeleteReadMethod: {
        type: Boolean,
        default: false
    },
    canAddLayout: {
        type: Boolean,
        default: false
    },
    canLoadLayout: {
        type: Boolean,
        default: false
    },
    canDeleteLayout: {
        type: Boolean,
        default: false
    },
    canAddFirmware: {
        type: Boolean,
        default: false
    },
    canLoadFirmware: {
        type: Boolean,
        default: false
    },
    canDeleteFirmware: {
        type: Boolean,
        default: false
    },
    canAddDisplayFile: {
        type: Boolean,
        default: false
    },
    canLoadDisplayFile: {
        type: Boolean,
        default: false
    },
    canDeleteDisplayFile: {
        type: Boolean,
        default: false
    },
    canAddPowerSupplyUnit: {
        type: Boolean,
        default: false
    },
    canLoadPowerSupplyUnit: {
        type: Boolean,
        default: false
    },
    canDeletePowerSupplyUnit: {
        type: Boolean,
        default: false
    },
    canAddTerminalType: {
        type: Boolean,
        default: false
    },
    canDeleteTerminalType: {
        type: Boolean,
        default: false
    }

});

//UserRights extern verfügbar machen
const UserRights = module.exports = mongoose.model('UserRights', UserRightsSchema);