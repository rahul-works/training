function sort(array){
    return array.sort((a, b) => {
        const x = a[1].toLowerCase();
        const y = b[1].toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}

function updateInventoryItem(inventory, record){
    inventory.forEach(function(return_record, index){
        if(return_record[1]==record[1]){
            inventory[index][0]+=record[0];
            return;
        }
    });
    return inventory;
}

function updateInventory(curr_inventory, new_inventory){
    if(curr_inventory!=undefined && new_inventory!=''){
        let map_record = [];
        let return_inv = [];
        curr_inventory.forEach(record => {
            map_record[record[1]] = record[0];
        });
        new_inventory.forEach(record => {
            if(map_record[record[1]]==undefined){
                curr_inventory.push(record);
                map_record[record[1]] = record[0];
            } else {
                curr_inventory=updateInventoryItem(curr_inventory, record);
            }
        });
        
        return sort(curr_inventory);
    } else {
        if(curr_inventory!=undefined) {
            return curr_inventory;
        } else if(new_inventory!=undefined) {
            return new_inventory;
        } else {
            return false;
        }
    }
}
/*console.log(updateInventory([
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ], [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ]).length);
  console.log(updateInventory([
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone'],
  ], [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste'],
  ]));*/

module.exports = updateInventory;
