import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";

export const mainContentWidgets: WidgetItem[] = [
  {cols: 7, rows: 3, y: 4, x: 5,
    widgetId: WidgetType.SDR,
    widgetName: WidgetName.SDR
  },
  {cols: 6, rows: 4, y: 0, x: 5,
    widgetId: WidgetType.WordCloud,
    widgetName: WidgetName.WordCloud
  },
  {cols: 6, rows: 4, y: 0, x: 5,
    widgetId: WidgetType.PieChart,
    widgetName: WidgetName.PieChart
  },
  {cols: 5, rows: 4, y: 4, x: 0,
    widgetId: WidgetType.TopSellers,
    widgetName: WidgetName.TopSellers
  },
  {cols: 5, rows: 4, y: 0, x: 0,
    widgetId: WidgetType.LineChart,
    widgetName: WidgetName.LineChart
  },
  {cols: 7, rows: 4, y: 0, x: 5, 
    widgetId: WidgetType.DataTable,
    widgetName: WidgetName.DataTable
  },
  {cols: 7, rows: 4, y: 0, x: 9, 
    widgetId: WidgetType.StoreSales,
    widgetName: WidgetName.StoreSales
  },
  {cols: 5, rows: 4, y: 0, x: 13, 
    widgetId: WidgetType.agGridChart,
    widgetName: WidgetName.agGridChart
  }
];
