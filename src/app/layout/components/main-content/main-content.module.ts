import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GridsterModule } from "angular-gridster2";
import { BarChartComponent } from "src/app/widget/components/bar-chart/bar-chart.component";
import { PieChartComponent } from "src/app/widget/components/pie-chart/pie-chart.component";
import { LineChartComponent } from "src/app/widget/components/line-chart/line-chart.component";
import { TopSellersComponent } from "src/app/widget/components/top-sellers/top-sellers.component";
import { agChartComponent } from "src/app/widget/components/ag-chart/ag-chart.component";
import { SDRComponent } from "src/app/widget/components/sdr-table/sdr-table.component";
import { WordCloudComponent } from "src/app/widget/components/word-cloud/word-cloud.component";
import { StoreSalesChartComponent } from "src/app/widget/components/store-sales-chart/store-sales.component";
import { TextComponent } from "src/app/widget/components/text/text.component";
import { WidgetModule } from "src/app/widget/widget.module";
import { MainContentComponent } from "./main-content.component";

@NgModule({
  declarations: [MainContentComponent],
  imports: [CommonModule, GridsterModule, WidgetModule],
  exports: [MainContentComponent],
  entryComponents: [WordCloudComponent,StoreSalesChartComponent,SDRComponent,TextComponent, PieChartComponent, BarChartComponent, LineChartComponent,TopSellersComponent,agChartComponent]
})
export class MainContentModule {}
