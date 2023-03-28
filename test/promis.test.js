const functions = require("../code/promise");
/* promises */
test('fetch user name Leanne Graham', () => {
    return functions.fetchUser().then(data => {
        expect(data.name).toBe("Leanne Graham");
    });
});

/* async */

test("async fetch of user name Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toBe("Leanne Graham")
})