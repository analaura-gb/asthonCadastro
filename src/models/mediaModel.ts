export enum Type {
  VIDEO = "VIDEO",
  PICTURE = "PICTURE",
}

export interface Resolution {
  width: number;
  height: number;
}

export interface MediaModel {
  id: number;
  fileName: string;
  type: Type;
  duration: number;
  resolution: Resolution;
  occurrenceId: number;
}
