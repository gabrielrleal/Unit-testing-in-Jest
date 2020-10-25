const functions = require('./functions');

// descrio do que teste faz
test('is defined', () => {
    expect(functions.getAge("Rudi", 35)).toBeDefined() //

})