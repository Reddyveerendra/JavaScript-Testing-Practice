const analyzeArray = require("../code/analyzeArray")
test('', () => { expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ "average": 4, "length": 6, "min": 1, "max": 8 }) })