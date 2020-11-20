describe('Hello World', function() {
    // const printThis = require('../lib/helloworld') // Don't need this if testing in browser and using file path

    it('should return hello world', function(){
        let result = printThis(); // Hello World
        expect(result).toEqual('Hello World'); // string must match for test to pass
    })
})