/**
 * @author	Tammo Schimanski
 * @copyright	www.poolarino.de
 * @license	GPL https://www.gnu.org/licenses/gpl-3.0.de.html
 * @package	poolarino_poolcontrol
 */


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    showLogin: Boolean = true;

    message: String;
    messageColor: String;
    showMessage: Boolean = true;

    name: String;
    username: String;
    password: String;
    email: String;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.navigate(['software']);
        if (!this.authService.loggedIn()) {
            
        }
    }

    toggleForm() {
        if(this.showLogin){
            this.showMessage = false;
            this.showLogin = false;
        } else {
            this.showMessage = false;
            this.showLogin = true;
        }
    }

    sendRegistration() {
        let user = {
            name: this.name,
            username: this.username,
            password: this.password,
            email: this.email
        }

        this.authService.registerUser(user).subscribe(data => {
            if(data.success) {
                this.showLogin = true;

                this.messageColor = 'green';
                this.message = 'Registrierung erfolgreich!';
                this.showMessage = true;
            } else {
                this.messageColor = 'red';
                this.message = 'Registrierung fehlgeschlagen!';
            }
        })
    }

    sendLogin() {
        let user = {
            username: this.username,
            password: this.password
        }

        this.authService.authenticateUser(user).subscribe(data => {
            if(!data.success && data.msg.includes('nicht aktiviert')) {
                this.messageColor = 'red';
                this.message = 'Benutzer nicht aktiviert!';
            } else if(data.success) {
                this.authService.storeUserData(data.token);
                this.router.navigate(['software']);
            }
        })
    }

}
