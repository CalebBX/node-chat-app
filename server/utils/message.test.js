const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message.js')

describe('generateMessage', function(){
    it('should generate correct message object', function(){
        var from = 'John';
        var text = 'Test Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});


    })
});

describe('generateLocationMessage', function(){
    it('should generate correct location object', function(){
        var from = 'John';
        var latitude = 1;
        var longitude = 2;
        var url = 'https://www.google.com/maps?q=1,2';

        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});