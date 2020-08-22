// Array Method Exercise


var fruit = ['Banana', 'Apple', 'Orange', 'Watermelon'];

var vegetables = ['Carrot', 'Tomato', 'Pepper', 'Lettuce'];


function arrayPractice(){
    vegetables.pop();
    fruit.shift();
    var indexOfOrange = fruit.indexOf('Orange');
    fruit.push(indexOfOrange);
    var lengthOfVegetables = vegetables.length
    vegetables.push(lengthOfVegetables);
    var food = fruit.concat(vegetables);
    var removeFood = food.splice(4, 2);
    var finalMove = food.reverse('').join(',')
        return finalMove;
};

console.log(arrayPractice())