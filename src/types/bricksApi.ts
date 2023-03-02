export interface LegoMiniFigsResponse {
  count: number;
  next: string;
  previous: string;
  results: LegoFigure[];
}

export interface LegoFigure {
  last_modified_dt: Date;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}
