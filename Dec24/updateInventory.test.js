const updateInventory = require('./updateInventory');

describe('updateInventory', () => {
    it('update Inventory', () => {
        expect(updateInventory([
            [21, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [1, 'Hair Pin'],
            [5, 'Microphone'],
          ], [
            [2, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [67, 'Bowling Ball'],
            [7, 'Toothpaste'],
          ]).length).toBe(6);
          
          expect(updateInventory([
            [21, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [1, 'Hair Pin'],
            [5, 'Microphone'],
          ], [
            [2, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [67, 'Bowling Ball'],
            [7, 'Toothpaste'],
          ]))
          .toEqual([
            [88, 'Bowling Ball'],
            [2, 'Dirty Sock'],
            [3, 'Hair Pin'],
            [3, 'Half-Eaten Apple'],
            [5, 'Microphone'],
            [7, 'Toothpaste'],
          ]);
    });
});