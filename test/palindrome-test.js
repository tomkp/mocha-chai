'use strict';

const expect = require('chai').expect;
const palindrome = require('../src/palindrome.js');

describe('palindrome', () => {

    it('returns true when is a palindrome', () => {
        expect(palindrome('racecar')).to.be.true;
    });

    it('returns false when not a palindrome', () => {
        expect(palindrome('Hello my name is')).to.be.false;
    });
});