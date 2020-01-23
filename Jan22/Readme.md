[ User Check Password ]

Instructions
function User(username, password) {
  // set a username and password property on the user object that is created
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`

User.prototype.checkPassword = function checkPassword(password) {

};

Test cases
describe('User', () => {
  test('should return an object with the passed username and password when called with new', () => {
    const me = new User('Pesto', 'iamabeast');
    expect(me).toEqual({
      username: 'Pesto',
      password: 'iamabeast',
    });
  });

  test('should have a method that checks password and returns correct boolean result', () => {
    const me = new User('Pesto', 'iamabeast');
    const result1 = me.checkPassword('iamabeast');
    const result2 = me.checkPassword('iamnotabeast');
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});