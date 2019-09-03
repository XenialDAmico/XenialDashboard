import { LineChartComponent } from '../line-chart/line-chart.component';
import { TopSellersComponent } from './top-sellers.component';


export const tsColumnDefs: any =  [
  {headerName: 'Name', field: 'name', cellRendererFramework: TopSellersComponent,sortable: true},
  {headerName: 'Qty', field: 'qty', cellRendererFramework: TopSellersComponent, sortable: true },
  {headerName: 'Sales $', field: 'sales', cellRendererFramework: TopSellersComponent, sortable: true}
];
