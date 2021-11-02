export default function capitalize(value) {

  if (value === '') {
    return ''
  }

  const valueArray = value.split('');
  const [firstLetter, ...stringEnd] = valueArray;

  return firstLetter.toUpperCase() + stringEnd.join('');
}

console.log('result', capitalize('hello'))