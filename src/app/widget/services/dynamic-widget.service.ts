import { Injectable } from "@angular/core";
import { BarChartComponent } from "../components/bar-chart/bar-chart.component";
import { LineChartComponent } from "../components/line-chart/line-chart.component";
import { DataTableComponent } from "../components/data-table/data-table.component";
import { SDRComponent } from "../components/sdr-table/sdr-table.component";
import { StoreSalesChartComponent } from "../components/store-sales-chart/store-sales.component";
import { agChartComponent } from "../components/ag-chart/ag-chart.component";
import { PieChartComponent } from "../components/pie-chart/pie-chart.component";
import { TopSellersComponent } from "../components/top-sellers/top-sellers.component";
import { WordCloudComponent } from "../components/word-cloud/word-cloud.component";
import { TextComponent } from "../components/text/text.component";

@Injectable()
export class WidgetService {
  private static widgets = {
    1: TextComponent,
    2: PieChartComponent,
    3: BarChartComponent,
    4: DataTableComponent,
    5: LineChartComponent,
    6: TopSellersComponent,
    7: agChartComponent,
    8: SDRComponent,
    9: StoreSalesChartComponent,
    10: WordCloudComponent
  };

  getComponent(id: number) {
    return WidgetService.widgets[id];
  }
}
