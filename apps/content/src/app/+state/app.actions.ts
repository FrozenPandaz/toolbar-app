import { Action } from "@ngrx/store";

export interface ToggleModalAction extends Action {
  type: 'TOGGLE_MODAL';
}

export interface OpenModalAction extends Action {
  type: 'OPEN_MODAL';
}

export type AppAction = ToggleModalAction | OpenModalAction;
