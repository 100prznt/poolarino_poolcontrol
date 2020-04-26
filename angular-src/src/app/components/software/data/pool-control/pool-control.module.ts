import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolControlRoutingModule } from './pool-control-routing.module';
import { PoolControlComponent } from './pool-control.component';
import { PoolControlOverviewComponent } from './pool-control-overview/pool-control-overview.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';

import * as highstock from 'highcharts/modules/stock.src';
import { FormsModule } from '@angular/forms';
import { RoundProgressModule, ROUND_PROGRESS_DEFAULTS } from 'angular-svg-round-progressbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}


@NgModule({
    declarations: [PoolControlComponent, PoolControlOverviewComponent],
    imports: [
        FormsModule,
        CommonModule,
        PoolControlRoutingModule,
        RoundProgressModule,
        MatProgressBarModule,
        ChartModule
    ],
    providers: [
        { 
            provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] 
        },
        {
            provide: ROUND_PROGRESS_DEFAULTS,
            useValue: {
                color: '#f00',
                background: '#0f0'
            }
        }
    ]
})
export class PoolControlModule { }
