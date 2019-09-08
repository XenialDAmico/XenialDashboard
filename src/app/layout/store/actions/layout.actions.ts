import { Action } from "@ngrx/store";

export enum LayoutActionTypes {
  WindowResized = "[Layout] Window Resized",
  TableWidgetResized = "[Layout] Widget Resized",
  VegaWidgetResized = "[Layout] Vega Widget Resized",
  TopSellersWidgetResized = "[Layout] TopSellers Widget Resized",
  SDRWidgetResized = "[Layout] SDR Widget Resized",
  StoreSalesWidgetResized = "[Layout] Store Sales Widget Resized",
  CategorySalesWidgetResized = "[Layout] Category Sales Widget Resized",
  WordCloudWidgetResized = "[Layout] Word Cloud Widget Resized"
  
}

export class WindowResized implements Action {
  public readonly type = LayoutActionTypes.WindowResized;
}

export class TableWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TableWidgetResized;
  constructor(public tsWidth: number, public tsHeight: number) {}
}

export class VegaWidgetResized implements Action {
  public readonly type = LayoutActionTypes.VegaWidgetResized;
  constructor(public VegaWidth: number, public VegaHeight: number) {}
}

export class StoreSalesWidgetResized implements Action {
  public readonly type = LayoutActionTypes.StoreSalesWidgetResized;
  constructor(public Width: number, public Height: number) {}
}

export class SDRWidgetResized implements Action {
  public readonly type = LayoutActionTypes.SDRWidgetResized;
  constructor(public SDRWidth: number, public SDRHeight: number) {}
}

export class TopSellersWidgetResized implements Action {
  public readonly type = LayoutActionTypes.TopSellersWidgetResized;
  constructor(public tsWidth: number, public tsHeight: number) {}
}
export class CategorySalesWidgetResized implements Action {
  public readonly type = LayoutActionTypes.CategorySalesWidgetResized;
  constructor(public csWidth: number, public csHeight: number) {}
}
export class WordCloudWidgetResized implements Action {
  public readonly type = LayoutActionTypes.WordCloudWidgetResized;
  constructor(public wcWidth: number, public wcHeight: number) {}
}

export type LayoutActions = WindowResized | TableWidgetResized | VegaWidgetResized | TopSellersWidgetResized | SDRWidgetResized| StoreSalesWidgetResized|CategorySalesWidgetResized | WordCloudWidgetResized;
