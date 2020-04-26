import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { PoolControlComponent } from '../../data/pool-control/pool-control.component';

@Component({
  selector: 'app-header-poolcontrol',
  templateUrl: './header-poolcontrol.component.html',
  styleUrls: ['./header-poolcontrol.component.css'],
  providers: [PoolControlComponent]
})
export class HeaderPoolcontrolComponent implements OnInit {

  constructor(private poolControlComponent: PoolControlComponent) { }

  ngOnInit() {
   
  }

}
