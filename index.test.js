const index = require('./index')

test('Say Hello ', () => {
    expect(index.sayHello("Sam")).toBe("Hello Sam")
})

test('Say hello to user Sam ', () => {
    var user = 
    {
        name: "Sam",
        password: "Sam"
    };

    findUserByName = jest.fn().mockReturnValue(user);
    getName = jest.fn().mockReturnValue(user.name);
    const result = index.sayHelloToUser(user);
    expect(result).toBe('Hello Sam');
})

test('Find user by name', () => {
    var user = 
    {
        name: "Sam",
        password: "Sam"
    };

    findUserByName = jest.fn().mockReturnValue(user);
    const result = index.findUserByName("Sam");
    expect(JSON.stringify(result)).toBe(JSON.stringify(user));
})
