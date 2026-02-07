export interface Haiku {
  firstVerse: Verse;
  secondVerse: Verse;
  thirdVerse: Verse;
}

export interface Verse {
  text: string;
  syllabes: number;
}
