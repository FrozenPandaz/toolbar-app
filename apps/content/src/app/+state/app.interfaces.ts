import { ContentState } from "../content/+state/content.interfaces";

export interface App {
  // define state here
  modal: boolean;
}

export interface AppState {
  readonly contents: ContentState;
  readonly app: App;
}
