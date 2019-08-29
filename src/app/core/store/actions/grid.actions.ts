import { Action } from "@ngrx/store";

export enum GridActionTypes {
  AddWidget = "[Grid] Add Widget",
  RemoveWidget = "[Grid] Remove Widget"
}

export class AddWidget implements Action {
  public readonly type = GridActionTypes.AddWidget;
}

export class RemoveWidget implements Action {
  public readonly type = GridActionTypes.RemoveWidget;
}

export type ThemeActions = AddWidget | RemoveWidget;
