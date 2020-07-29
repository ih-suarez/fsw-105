// grocery list
var groceryCart = ['milk', 'eggs', 'butter', 'cheese']

// shopper information
var shopper = {
    shopperFirstName: 'Ismael',
    shopperLastName: 'Suarez',
    orderReady: false,
    customerReceipt: function() {
        return this.shopperFirstName + '' + this.shopperLastName;
    }
};

console.log('grocery store list');