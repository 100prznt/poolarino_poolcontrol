import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsGeneralRoutingModule } from './settings-general-routing.module';
import { SettingsGeneralComponent } from './settings-general.component';

@NgModule({
    declarations: [
        SettingsGeneralComponent
    ],
    imports: [
        CommonModule,
        SettingsGeneralRoutingModule
    ]
})
export class SettingsGeneralModule { }
