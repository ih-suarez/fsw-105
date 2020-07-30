
// shopper information
var shopper = {
    shopperFirstName: 'Ismael',
    shopperLastName: 'Suarez',
    groceryCart: ['milk', 'eggs', "butter", "cheese"],
    orderReady: false,
    customerReceipt: function() {
        return this.shopperFirstName + ' ' + this.shopperLastName + ' '+ this.groceryCart;
    }
};

console.log(shopper.customerReceipt());