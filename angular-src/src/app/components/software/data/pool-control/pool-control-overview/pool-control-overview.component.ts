import { Component, OnInit } from '@angular/core';
import { PoolcontrolService } from 'src/app/services/poolcontrol/poolcontrol.service';

@Component({
  selector: 'app-pool-control-overview',
  templateUrl: './pool-control-overview.component.html',
  styleUrls: ['./pool-control-overview.component.css']
})
export class PoolControlOverviewComponent implements OnInit {

    constructor(
        private poolControlService: PoolcontrolService
    ) { }

    ngOnInit() {
    }

}
