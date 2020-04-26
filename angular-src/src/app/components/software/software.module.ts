import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareRoutingModule } from './software-routing.module';

import { SoftwareComponent } from './software.component';
import { MenuComponent } from './menu/menu.component';
import { DataComponent } from './data/data.component';
import { HeaderPoolcontrolComponent } from './header/header-poolcontrol/header-poolcontrol.component';




@NgModule({
    declarations: [
        SoftwareComponent,
        MenuComponent,
        DataComponent,
        HeaderPoolcontrolComponent
    ],
    imports: [
        CommonModule,
        SoftwareRoutingModule
    ]
})
export class SoftwareModule { }
