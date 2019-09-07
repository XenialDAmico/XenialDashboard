import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClarityModule } from "@clr/angular";
import { BrowserModule } from "@angular/platform-browser";
import { NgxEchartsModule } from "ngx-echarts";
import { AgGridModule } from 'ag-grid-angular';
import "ag-grid-enterprise/chartsModule";
import { BarChartComponent } from "./components/bar-chart/bar-chart.component";
import { DataTableComponent } from "./components/data-table/data-table.component";
import { SDRComponent  } from "./components/sdr-table/sdr-table.component";
import { DynamicWidgetComponent } from "./components/dynamic-widget/dynamic-widget.component";
import { PieChartComponent } from "./components/pie-chart/pie-chart.component";
import { LineChartComponent } from "./components/line-chart/line-chart.component";
import { TopSellersComponent } from "./components/top-sellers/top-sellers.component";
import { agChartComponent } from "./components/ag-chart/ag-chart.component";
import { TextComponent } from "./components/text/text.component";
import { DynamicWidgetDirective } from "./directives/dynamic-widget.directive";
import { WidgetService } from "./services/dynamic-widget.service";

@NgModule({
  imports: [CommonModule, 
            ClarityModule,
            NgxEchartsModule, 
            BrowserModule, 
            AgGridModule.withComponents(

            )],
  declarations: [
    DynamicWidgetComponent,
    DynamicWidgetDirective,
    TextComponent,
    PieChartComponent,
    LineChartComponent,
    BarChartComponent,
    DataTableComponent,
    TopSellersComponent,
    SDRComponent,
    agChartComponent
  ],
  exports: [DynamicWidgetComponent],
  providers: [WidgetService],
  entryComponents: [SDRComponent,DataTableComponent,TopSellersComponent,agChartComponent]
})
export class WidgetModule {}
