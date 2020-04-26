import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolControlComponent } from './pool-control.component';

const routes: Routes = [
    {
        path: '',
        outlet: 'content',
        component: PoolControlComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoolControlRoutingModule { }
