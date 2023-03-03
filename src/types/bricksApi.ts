export interface LegoResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface LegoFigure {
  last_modified_dt: Date;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
}

export interface FigurePart {
  color: {
    external_ids: Record<string, {ext_ids: number[]; ext_descrs: number[]}>;
    id: number;
    is_trans: boolean;
    name: string;
    rgb: string;
  };
  element_id: string;
  id: string;
  inv_part_id: string;
  is_spare: boolean;
  num_sets: number;
  part: {
    external_ids: Record<string, number[]>;
    name: string;
    part_cat_id: string;
    part_img_url: string;
    part_num: string;
    part_url: string;
    print_of: string;
  };
}

export type LegoMiniFigsResponse = LegoResponse<LegoFigure>;
export type FigurePartsResponse = LegoResponse<FigurePart>;
