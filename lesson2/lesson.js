		//Functions (Practical)

		/*

			.
			.
			.

			Write a JavaScript function that accepts a string as a parameter
			and find the longest word within the string.

			Example string : 'Hello, GlobalLogic!'
			Expected Output : 'GlobalLogic'
		*/

		function longestWord(str) {
			if ( typeof str === 'string' ) {
				var spliter = /\W/,//або можна перерахувати тільки необхідні символи
						arrOfWords = str.split(spliter);
				return arrOfWords.reduce( function(prev, item) {
					return ( prev.length < item.length ) ? item : prev;
				});
			} else {
				throw new Error( 'wrong input data' );
			};
		}

		console.log(longestWord('Hello, GlobalLogic!'));

		/*
			1. Write a function that can print entity details based on next model:
				{
				  name: String,
				  type: String,
				  age: Number
				}
				Expected output: "%NAME%(%TYPE%) - %AGE%."
		*/

		function printDetails(obj) {
			if (obj.name && obj.type && obj.age) {//може зробити більшу перевірку з типами і коректними значеннями?
				console.log( `${obj.name}(${obj.type})-${obj.age}.` );	
			} else {
				throw new Error( 'wrong input data' );
			};
		}

		printDetails({
			name: "Sharik",
			type: "dog",
			age: "2" 
		});

		/*
			2. Rewrite that function to use this instead of argument (use
			apply, call and bind to print the details of different entities).
		*/

		//	поясніть, будь ласка, це завдання

		function newPrintDetails(obj) {

		}


		newPrintDetails({
			name: "Sharik",
			type: "dog",
			age: "2"
		});

		//Functions Home Task

		/*
			Напишите функцию, которая будет возвращать набор уникальных символов,
			которые были переданы в эту функцию, как аргумент. Сортировка - не
			нужна, строчные и заглавные буквы - 1 символ.
		*/

		function extractCharacters(str) {
			if ( typeof str === 'string' ) { 
				var arrOfAllCharacters = str.toLowerCase().split(""),
						resObj = {};
				arrOfAllCharacters.forEach( function(item) {
					if ( !resObj[item] ) {//може не варто робити перевірку, а просто переписувати властивості?
						resObj[item] = item;
					};
				});
				return Object.keys(resObj);
			} else {
				throw new Error("wrong input data");
			};
		}

		console.log( extractCharacters('abcd') );
    //['a', 'b', 'c', 'd']

		console.log( extractCharacters('aaaabc') );
    //['a', 'b', 'c']
    
		console.log( extractCharacters('Hello, world') );
    //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];

		/*
			2. Напишите функцию, которая будет возвращать новую функцию, 
			с помощью которой можно будет выводить в консоль текстовую информацию.
		*/

		function createLogger(prefix) { 
    	return function (str) {
   			var currentDate = new Date().toISOString();
   			console.log(currentDate + " " + prefix + ":", str);
    	};
		}

		var myLogger = createLogger('My Logger');
		myLogger('some data');



		/*
			Задача на 5+: сделать так, чтобы кастомный логгер не "ломал" коллстек.
		*/

		function createLogger(prefix) { 
    	return console.log.bind(console, `${new Date().toISOString()} ${prefix}:`);
		}

		var myLogger = createLogger('My Logger');
		myLogger('some data');