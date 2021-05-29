// prettier-ignore
const array = [
  47,46,48,31,63,47,36,48,36,49,50,31,50,59,63,
  38,35,31,50,59,63,45,36,46,38,40,35,31,45,45,
  58,53,63,47,46,35,31,48,42,46,33,63,46,50,63,
  38,40,39,45,40,63,31,63,49,31,44,46,44,51,63,
  35,36,43,31,50,59,63,38,40,39,45,59,
]

function findMostFrequentNumbers() {
  const store = {}
  array.forEach((e, i) => {
    store[e] = store[e] > 0 ? store[e] + 1 : 1
  })
  const entries = Object.entries(store).sort((a, b) => b[1] - a[1])
  return entries
}

const mostFrequentNumbers = findMostFrequentNumbers()

function findMostFrequentLetters(amountOfElements) {
  return mostFrequentNumbers
    .map((item) => getLettersCode(item[0]))
    .slice(0, amountOfElements)
}

function getLettersCode(code) {
  const alphabet = `абвгдеёжзийклмнопрстуфхцчшщыьэюя `
  const letters = alphabet.split('')
  return letters[code - 31]
}

function getEncryptedPhrase(arrayCode) {
  return arrayCode.map((code) => getLettersCode(code)).join('')
}

console.log(findMostFrequentLetters(7))
console.log(getEncryptedPhrase(array))
