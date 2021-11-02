import capitalize from '../src/capitalize.js';


if (capitalize('hello') !== 'Hello') {
  throw 'didnt uppercase first letter'
}

if (capitalize('') !== '') {
  throw 'empty line must return empty line'
}

console.log('all tests are complete');