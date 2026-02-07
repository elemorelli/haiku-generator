// import Haiku from "@types/types";

import { closingLines, middleLines, openingLines } from "@utils/haiku-lines";

// const countSyllablesInSpanish = (sentence: string): number => {
//   // Convertir la oración a minúsculas para un procesamiento uniforme
//   sentence = sentence.toLowerCase();

//   // Definir las reglas para contar las sílabas en español
//   // Estas reglas son simplificadas y pueden no ser 100% precisas.
//   const rules = [
//     /que|qui|güe|gu(i|e)|iu|ui|ei|ie|ia|io|ua|uo|ai|ae|ea|eo|ou|au|oi|oe/g, // Dígrafos y diptongos
//     /iái|iéi|uái|uée|uió/i, // Triptongos
//     /aé|eé|oé|uá/g, // Hiatos
//     /[aeiouáéíóú]/g, // Vocales
//   ];

//   // Contador de sílabas
//   let syllables = 0;

//   sentence = sentence.replace(/([^c])\1+/g, "$1");

//   // Aplicar las reglas a la oración
//   for (const rule of rules) {
//     const matches = sentence.match(rule);
//     if (matches) {
//       syllables += matches.length;
//     }
//   }

//   // Asegurarse de que el número de sílabas sea al menos 1
//   syllables = Math.max(syllables, 1);

//   return syllables;
// };

const getRandomLine = (versesArray: string[]): string => {
  const index = Math.floor(Math.random() * versesArray.length);
  return versesArray[index];
};

const generateHaiku = () => ({
  opening: getRandomLine(openingLines),
  middle: getRandomLine(middleLines),
  closing: getRandomLine(closingLines),
});

export default generateHaiku;
