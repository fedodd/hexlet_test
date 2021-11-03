import {strict as assert} from 'assert';
import capitalize from '../src/capitalize.js';

//   throw 'didnt uppercase first letter'
assert.equal(capitalize('hello'), 'Hello');
//   throw 'empty line must return empty line'
assert.equal(capitalize(''), '');
console.log('all tests done');