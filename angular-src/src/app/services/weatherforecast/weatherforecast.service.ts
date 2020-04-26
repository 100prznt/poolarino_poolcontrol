import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WeatherforecastService {

    constructor(
        private http: HttpClient
    ) { }

    loadForecast(){
        return this.http.get<data>(environment.serverUrl + '/weatherforecast/forecast');
    }
  

}

interface data {
    relays: any;
    ison: Boolean;
    success: Boolean,
    msg: String,
    data: any
}
