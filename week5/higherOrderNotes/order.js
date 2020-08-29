/**
 * * .filter()
 * 
 * 
 * * Returning Numbers Greater Than 5 From An Array.
 */
let arr = [15, 2, 5, 7, 3, 4]   
    const result = arr.filter(num => num > 5) ;
    console.log(result)

/*
 * * Returning Numbers That Are Even.
 */
let even = [1, 3, 6, 8, 9, 12, 18, 2948572]
    const evenNumbers = even.filter(num => num % 2 === 0);
    console.log(evenNumbers)

/*
* * Returning Filtered List Of Everybody Old Enough To See The Matrix.
*/
let movieWatchers = [
    {name: 'Ashley', age: 55},
    {name: 'Hector', age: 67},
    {name: 'Carlos', age: 16},
    {name: 'Jessica', age: 14},
    {name: 'Mussa', age: 10}
]

    const isOldEnough = movieWatchers.filter(customers => customers.age >= 17);
    console.log(isOldEnough);

        /*
        * * .map()
        *
        *
        * * Returns The Array But Doubled.
        */
        let arrayOfNumbers = [22, 33, 55, 7, 1, 4];

            const doubleIt = arrayOfNumbers.map(doubleArray => doubleArray * 2)
            console.log(doubleIt)

        /*
        * * Returning Numbers As Strings
        */
        let numbersForString = [2, 4, 6, 5, 8]

            const numbersIntoString = numbersForString.map(stringOfNumbers => stringOfNumbers.toString())
            console.log(numbersIntoString)
        
        /*
        * * Returning All Names Capitalized
        */
        let arrayOfNames = ['john', 'sam', 'thomas', 'jacob']

            const capitalizeNames = arrayOfNames.map(capitalize => capitalize.charAt(0).toUpperCase() + capitalize.slice(1).toLowerCase())
            console.log(capitalizeNames)

        /*
        * * Making An Array Of Strings With Names
        */
        let listOfCustomers = [
            {name: 'Ashley', age: 55},
            {name: 'Hector', age: 67},
            {name: 'Carlos', age: 16},
            {name: 'Jessica', age: 14},
            {name: 'Mussa', age: 10}
        ];

            const returnOnlyNames = listOfCustomers.map(customerNames => customerNames.name)
            console.log(returnOnlyNames);

        /*
        * * Return An Array Weather Name Can Watch The Matrix
        */
            const returnNameAndString = listOfCustomers.map(nameAndString => nameAndString.age >= 17 ? nameAndString.name + ' can go watch The Matrix' : nameAndString.name + ' can not go to watch The Matrix');  
            console.log(returnNameAndString);

            /*
            * * reduce.()
            *
            * 
            * * Return An Array Of Numbers Into A Total Of All The Numbers
            */
            let arrayToBeReduced = [4, 5, 6, 9];

                const sumOfArray = arrayToBeReduced.reduce((final, numbers) => final += numbers);
                console.log(sumOfArray);

            /*
            * * Return An Array Of Numbers As A String
            */
            let arrayToString = [6, 7, 9, 34]

                const putTogetherAsString = arrayToString.reduce((final, string) => arrayToString.join(''))
                console.log(putTogetherAsString);

            /*
            * * Return Number Of Voters
            */
            let voters = [
                { name: "steve", age: 21, voted: true },
                { name: "janet", age: 59, voted: true },
                { name: "rebecca", age: 90, voted: false },
                { name: "hary", age: 81, voted: true },
                { name: "jones", age: 17, voted: true },
                { name: "cesar", age: 26, voted: true },
                { name: "rudy", age:64, voted: false },
                { name: "cark", age: 78, voted: true },
                { name: "bob", age: 53, voted: true },
                { name: "klark", age: 43, voted: true },
                { name: "bill", age: 56, voted: false },
                { name: "mel", age: 34, voted: true }
            ]

                const voteTally = voters.reduce(function(final, voter){
                    if(voter.voted){
                        final++
                    }
                    return final
                }, 0);

                console.log(voteTally)
            
            /*
            * * Return Total Price Of Items In An Array
            */
            let shoppingList = [
                {item: 'Tesla', price: 100000},
                {item: 'Pilots License', price: 25000},
                {item: 'House', price: 500000}
            ]

                function sum(nums){
                    return nums.reduce((a, b) => a + b)
                }    
            
                const price = shoppingList.map(item => item.price)
                const total = sum(price)
                console.log(total);

            /*
            * * Return The The Flattened Array
            */
            let flattenMe = [
                [3, 5, 7],
                [false],
                ['practice', 'makes', 'perfect']
            ];
                
                const flatten = flattenMe.flat(1);
                console.log(flatten)
            
                /*
                * * .sort()
                *
                *
                * * Return Array Of Numbers Sorted From Least To Greates
                */
                let sortArray = [4, 5, 6, 7, 3, 2]

                    const leastToGreatest = sortArray.sort((a, b) => a - b)
                console.log(leastToGreatest)

                /**
                * * Return Array Of Numbers Sorted From Greatest To Least
                */
                    const greatestToLeast = sortArray.sort((a, b) => b - a);
                    console.log(greatestToLeast);

                /*
                * * Return Array Of Numbers Sorted From Shortest String To Longest String
                */
                let sortStringArray = ['maverik', 'cat', 'about', 'a', 'winery']

                    const longestToShortest = sortStringArray.sort((a, b) => a.length - b.length);
                    console.log(longestToShortest);

                /*
                * * Return Array Sorted Alphabetically
                */
                    const alphabetically = sortStringArray.sort()
                    console.log(alphabetically);