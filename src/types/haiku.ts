export interface Haiku {
  opening: Line;
  middle: Line;
  closing: Line;
}

export interface Line {
  text: string;
  syllabes: number;
}
