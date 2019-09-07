import { WidgetName, WidgetType } from "src/app/widget/models/widget.model";
import { WidgetItem } from "../../models/widget.model";

export const mainContentWidgets: WidgetItem[] = [
  {cols: 7, rows: 3, y: 4, x: 5,
    widgetId: WidgetType.Text,
    widgetName: WidgetName.Text
  },
  {cols: 7, rows: 4, y: 0, x: 5,
    widgetId: WidgetType.PieChart,
    widgetName: WidgetName.PieChart
  },
  {cols: 5, rows: 3, y: 8, x: 0,
    widgetId: WidgetType.BarChart,
    widgetName: WidgetName.BarChart
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
    widgetId: WidgetType.agGridChart,
    widgetName: WidgetName.agGridChart
  },
  {cols: 5, rows: 4, y: 0, x: 13, 
    widgetId: WidgetType.agGridChart,
    widgetName: WidgetName.agGridChart
  }
];
