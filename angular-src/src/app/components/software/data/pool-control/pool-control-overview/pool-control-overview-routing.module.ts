import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoolControlOverviewComponent } from './pool-control-overview.component';

const routes: Routes = [
    {
        path: '',
        outlet: 'content',
        component: PoolControlOverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoolControlOverviewRoutingModule { }
