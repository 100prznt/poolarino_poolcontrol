import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsGeneralComponent } from './settings-general.component';

const routes: Routes = [
    {
        path: '',
        outlet: 'content',
        component: SettingsGeneralComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsGeneralRoutingModule { }
