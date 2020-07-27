// grocery list
var groceryCart = ['milk', 'eggs', 'butter', 'cheese']

var groceryItem = {
    item: 'milk',
    stockOnHand: 50,
    isExpired: false,
    stock: function () {
        return this.item + '' + this.stockOnHand + '' + this.isExpired;
    }
}
console.log('milk', 'eggs', 'butter', 'cheese')

var groceryItem = {
    item: 'eggs',
    stockOnHand: 68,
    isExpired: false,
    stock: function () {
        return this.item + '' + this.stockOnHand + '' + this.isExpired;
    }
}

var groceryItem = {
    item: 'butter',
    stockOnHand: 34, 
    isExpired: true,
    stock: function () {
        return this.item + '' + this.stockOnHand + '' + this.isExpired;
    }
}

var groceryItem = {
    item: 'cheese', 
    stockOnHand: 54, 
    isExpired: false,
    stock: function () {
        return this.item + '' + this.stockOnHand + '' + this.isExpired;
    }
}
console.log('This is a grocery store list')