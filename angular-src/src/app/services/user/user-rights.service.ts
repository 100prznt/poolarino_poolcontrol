import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class UserRightsService {

    constructor(
        private http: HttpClient,
        public jwtHelper: JwtHelperService
    ) { }

    userHasRight(rightToCheck){
        let token = null;
        if (token = localStorage.getItem('id_token')) {
            if (this.jwtHelper.decodeToken(token).data.user.rights.userRights.isAdmin === true) {
                return true;
            } else {
                if (this.jwtHelper.decodeToken(token).data.user.rights.userRights[rightToCheck] === true) {
                    return true;
                } else {
                    return false;
                }
            }
            
        }
        return false;
    }

    getRights(userRightsId) {
        return this.http.get<userRights>(environment.serverUrl + '/userRights/checkRights/all/' + userRightsId)
    }

    updateUserRights(updatedUserRights) {
        return this.http.post<data>(environment.serverUrl + '/userRights/updateRights/', updatedUserRights)
    }

}

interface userRights {
  userRights: any
}

interface data {
  success: Boolean
}
