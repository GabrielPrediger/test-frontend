/**
 * Encontra a primeira letra do alfabeto (a-z) que não aparece em uma string.
 * A comparação não diferencia maiúsculas de minúsculas.
 * @param text A string a ser verificada.
 * @returns A primeira letra faltante ou '-' se todas estiverem presentes.
 */
export function findFirstMissingLetter(text: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercasedText = text.toLowerCase();

  for (const letter of alphabet) {
    if (!lowercasedText.includes(letter)) {
      return letter;
    }
  }

  return "-";
}
