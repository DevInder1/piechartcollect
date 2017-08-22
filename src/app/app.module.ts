///<reference path="../../node_modules/@types/node/index.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ChartModule} from "angular2-highcharts";

import { AppComponent } from './app.component';
import { OrderComponent } from "./order-gropping/order.component";
import { OrderStatusComponent } from './order-status/order-status.component';
import { OderStatusBarComponent } from './oder-status-bar/oder-status-bar.component';
import { LeadTimeAverageComponent } from './lead-time-average/lead-time-average.component';
import { SemiDonutComponent } from './semi-donut/semi-donut.component';
import { LeadTimeComponent } from './lead-time/lead-time.component';
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
import { AreaShipmentComponent } from './area-shipment/area-shipment.component';

/*declare var require;*/

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    OrderStatusComponent,
    OderStatusBarComponent,
    LeadTimeAverageComponent,
    SemiDonutComponent,
    LeadTimeComponent,
    AreaShipmentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   ChartModule.forRoot(require('highcharts'))
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
