import { Content } from "./content.interfaces";

export interface AddContentAction {
  type: 'ADD_CONTENT',
  payload: ContentItem;
}

export type ContentAction = AddContentAction;
