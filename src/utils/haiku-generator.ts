import { closingLines, middleLines, openingLines } from "@utils/haiku-lines";
import type { Haiku, Line } from "../types/haiku";

const countSyllables = (text: string) => {
  const normalized = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // removes accents
    .replace(/[^a-zñü\s]/g, "");

  const vowels = "aeiouü";
  const diphthongs = ["ai", "au", "ei", "eu", "oi", "ou", "ia", "ie", "io", "ua", "ue", "uo", "iu", "ui"];

  const words = normalized.split(/\s+/);

  let syllables = 0;

  for (const word of words) {
    let i = 0;

    while (i < word.length) {
      const char = word[i];

      if (vowels.includes(char)) {
        const next = word.slice(i, i + 2);
        const nextThree = word.slice(i, i + 3);

        // triptongo
        if (
          nextThree.length === 3 &&
          vowels.includes(nextThree[0]) &&
          vowels.includes(nextThree[1]) &&
          vowels.includes(nextThree[2])
        ) {
          syllables++;
          i += 3;
          continue;
        }

        // diptongo
        if (diphthongs.includes(next)) {
          syllables++;
          i += 2;
          continue;
        }

        // vocal sola
        syllables++;
      }

      i++;
    }
  }

  return syllables;
};

const getRandomLine = (versesArray: string[]): Line => {
  const index = Math.floor(Math.random() * versesArray.length);
  const text = versesArray[index];

  return {
    text,
    syllabes: countSyllables(text),
  };
};

const generateHaiku = (): Haiku => ({
  opening: getRandomLine(openingLines),
  middle: getRandomLine(middleLines),
  closing: getRandomLine(closingLines),
});

export default generateHaiku;
