export interface ContentItem {
  text: string;
}

export interface Content {
  // define state here
  contents: ContentItem[];
  selectedContents: ContentItem[];
}

export interface ContentState {
  readonly contents: Content;
}
