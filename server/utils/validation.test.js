const expect = require('expect');

const {isRealString} = require('./validation.js');

describe('isRealString', function(){
    it('should reject non-string values', function(){
        var str = 1;
        expect(isRealString(str)).toBe(false);
    });
    it('should reject string with only spaces', function(){
        var str = '  ';
        expect(isRealString(str)).toBe(false);
    });
    it('should allow string with non-space characters', function(){
        var str = '  asd123  ';
        expect(isRealString(str)).toBe(true);
    });
});