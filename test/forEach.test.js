const forEach = require('../code/forEach');
const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValueOnce(true).mockReturnValue(false);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true
