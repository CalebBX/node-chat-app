const expect = require('expect');
var {generateMessage} = require('./message.js')

describe('generateMessage', function(){
    it('should generate correct message object', function(){
        var from = 'John';
        var text = 'Test Message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});


    })
});