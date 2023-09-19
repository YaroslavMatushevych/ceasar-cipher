import { DirectionType } from './../types'

export const caesarCipher = (
  str: string,
  shift: number,
  direction: DirectionType = 'right'
): string => {
  // Define the alphabet used for the cipher
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  // Convert input string to uppercase to ensure uniformity
  const input = str.toUpperCase()

  // Use the map function to apply the cipher transformation to each character
  const output = input
    .split('')
    .map(char => {
      // If the character is part of the alphabet, apply the transformation
      if (alphabet.includes(char)) {
        let index = alphabet.indexOf(char)

        // Depending on the direction, adjust the index
        if (direction === 'right') {
          index = (index + shift) % 26
        } else {
          index = (index - shift + 26) % 26
        }

        // Return the transformed character
        return alphabet[index]
      }

      // If the character is not part of the alphabet, return it unchanged
      return char
    })
    .join('') // Join the transformed characters into a single string

  return output
}
