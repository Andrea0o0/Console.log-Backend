const kata = [
    {
        "name": "Multiply",
        "initialValue": "function multiply(a, b){\n \n}",
        "input":"multiply(${input})",
        "instructions": "<p>Multiply the two arguments of the function, for example:</p><ControlledEditor/>",
        "example":['multiply(3,5)==15 // 3 * 5\nmultiply(10,2)==20 // 10 * 2\nmultiply(300,47)==14100 // 300 * 47\nmultiply(0.5,28.8)==14.4 // 0.5 * 28.8'],
        "output": [ [ [1,1] ,1 ],
                    [ [2,1], 2 ],
                    [ [2,2], 4 ],
                    [ [3,5], 15 ],
                    [ [0.5,20] ,10 ],
                    [ [8.7,5.48] ,47.676 ],
                    [ [1582,8641] ,13670062 ],
                    [ [156.7,519] ,81327.29999999999 ],
                    [ [45146,0.005161] ,232.998506 ],
                    [ [0.003,25678] ,77.034 ]
                ],
        "level": 5
    },
    {
        "name": "Even or Odd",
        "initialValue": "function evenOrOdd(number) {\n \n}",
        "input":"evenOrOdd(${input})",
        "instructions": '<p>Create a function that takes an integer as an argument and returns <span class="border">"Even"</span> for even numbers or <span class="border">"Odd"</span> for odd numbers.</p>',
        "output": [ [ 2 ,"Even" ],
                    [ 7, "Odd" ],
                    [ -42, "Even" ],
                    [ -7, "Odd" ],
                    [ 25 , "Odd" ],
                    [ 150 ,"Even" ],
                    [ -25 ,"Odd" ],
                    [ 86 ,"Even" ],
                    [ 6732454 ,"Even" ],
                    [ -2567 ,"Odd" ]
    ],
        "level": 5
    }, 
    {
        "name": "How good are you really?",
        "initialValue": "function betterThanAverage(classPoints, yourPoints) {\n// Your code here\n}",
        "input":" betterThanAverage(${input})",
        "instructions": `<p>There was a test in your class and you passed it. <br/>Congratulations!<br/>But you're an ambitious person. You want to know if you're better than the average student in your class.</p><p>You receive an array with your peers' test scores. Now calculate the average and compare your score!</p><p>Return <span class="border">True</span> if you're better, else <span class="border">False</span>!</p><h4><br/>Note:</h4><p>Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!</p>`,
        "output": [ [ [`[2, 3]`, 5], true],
                    [ [`[100, 40, 34, 57, 29, 72, 57, 88]`, 75], true ],
                    [ [`[12, 23, 34, 45, 56, 67, 78, 89, 90]`, 9], false],
                    [ [`[41, 75, 72, 56, 80, 82, 81, 33]`, 50], false],
                    [ [`[29, 55, 74, 60, 11, 90, 67, 28]`, 21], false ],
                    [ [`[34, 45, 74, 60,1000,43,24,500]`, 220], false ],
                    [  [`[29, 55, 74, 6, 11, 90, 77, 20,90]`, 11], false ],
                    [  [`[150, 35, 74, 60, 61, 7, 67, 28,200]`, 70], false ],
                    [  [`[50, 25, 18, 7, 67, 28,200,5,35,75]`, 90], true ],
                    [ [`[34.6, 0.5, 9, 7.9,10.48,35]`, 18], true  ]
    ],
        "level": 5
    }, 
    {
        "name": "Multiples of 3 or 5",
        "initialValue": "function solution(number){\n \n}",
        "input":"solution(${input})",
        "instructions": `<p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p><p>Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).</p><h4><br/>Note:</h4><p>If the number is a multiple of both 3 and 5, only count it once.</p>`,
        "output": [ [ 10, 23],
                    [ 30, 195],
                    [ 70, 1133],
                    [ 213, 10395],
                    [ 63, 870],
                    [ 15, 45 ],
                    [ 1537, 551579 ],
                    [ -5, 0],
                    [ 700, 114218],
                    [ -200, 0]
    ],
        "level": 3
    }, 
    {
        "name": "Credit Card Mask",
        "initialValue": "// return masked string\nfunction maskify(cc) {\n \n}",
        "input":"maskify(${input})",
        "instructions": `<p>Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.</p><p>Your task is to write a function <span class="border">maskify</span>, which changes all but the last four characters into <span class="border">'#'</span></p><ControlledEditor/>`,
        "example":['maskify("4556364607935616") == "############5616"\nmaskify(     "64607935616") ==      "#######5616"\nmaskify(               "1") ==                "1"\nmaskify(                "") ==                 ""\n \n// "What was the name of your first pet?"\nmaskify("Skippy")                                   == "##ippy"\nmaskify("Nananananananananananananananana Batman!") == "####################################man!"'],
        "output": [ [ "'4556364607935616'", '############5616'],
                    [ "'1'", '1'],
                    [ "'11111'", '#1111'],
                    [ "'21341651'", '####1651'],
                    [ "'979254168535'", '########8535'],
                    [ "''", '' ],
                    [ "'0000'", '0000' ],
                    [ "'00460000'", '####0000'],
                    [ "'jfjfck,ltl khgktkkkuñhgx'", '####################ñhgx'],
                    [ "'/sc/-NZdaw AJC'", '########## AJC']
    ],
        "level": 4
    }, 
    {
        "name": "Vowel Count",
        "initialValue": "function getCount(str) {\n return 0;\n}",
        "input":"getCount(${input})",
        "instructions": `<p>Return the number (count) of vowels in the given string.</p>       <p>We will consider <span class="border">a</span>,<span class="border">e</span>,<span class="border">i</span>,<span class="border">o</span>,<span class="border">u</span> as vowels for this Kata (but not <span class="border">y</span>).</p>        <p>The input string will only consist of lower case letters and/or spaces.</p>`,
        "output": [ [ "'SJgBKBCKANI8BBIEio'", 2],
                    [ "'abracadabra'", 5],
                    [ "'ioaueEio'", 7],
                    [ "'aeiuoyiuiay'", 9],
                    [ "'nxai7svjuaIYyai'", 6],
                    [ "''", 0 ],
                    [ "'YYYYa'", 1 ],
                    [ "'.-asjnolbxos56'", 3],
                    [ "'AHUIOEB9iaiua68a989'",6],
                    [ "'SJgBKBCKANI8BBIEio'", 2]
    ],
        "level": 4
    },
    {
        "name": "Sum Mixed Array",
        "initialValue": "function sumMix(x){\n \n}",
        "input":"sumMix(${input})",
        "instructions": `<p>Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.</p><p>Return your answer as a number.</p>`,
        "output": [ [ `[9, 3, '7', '3']`, 22],
                    [ `['5', '0', 9, 3, 2, 1, '9', 6, 7]`, 42],
                    [ `['3', 6, 6, 0o3, '5', 8, 5, '6', 2,'0']`, 44],
                    [ `['3',6,725,'783',7]`, 1524],
                    [ `['8.2',4567,'0.6','83',6.2]`, 4665],
                    [ `[-56,'2.6',67,0.6,'-2']`, 12.200000000000001 ],
                    [ `[-56,2,67,0]`, 13 ],
                    [ `['2.2',-4567,'0.6','-5',6.2]`, -4563],
                    [ `[3456,-987,'7.37']`,2476.37],
                    [ `['4.678','0785',-98987,'2678.7']`, -95518.622]
    ],
        "level": 5
    },
    {
        "name": "Find the vowels",
        "initialValue": "function vowelIndices(word){\n//your code here\n}",
        "input":"vowelIndices(${input})",
        "instructions": `<p>We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).</p><p>So given a string "super", we should return a list of <span class="border">[2, 4]</span>.</p><ControlledEditor/><h4>Notes</h4><li>Vowels in this context refers to: a e i o u y (including upper case)</li><li>This is indexed from <span class="border">[1..n]</span> (not zero indexed!)</li>`,
        "example": ["Some examples:\nMmmm  => []\nSuper => [2,4]\nApple => [1,5]\nYoMama -> [1,2,4,6]"],
        "output": [ [ "'mmm'", []],
                    [ "'apple'", [1,5]],
                    [ "'super'", [2,4]],
                    [ "'orange'", [1,3,6]],
                    [ "'supercalifragilisticexpialidocious'", [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]],
                    [ "'sternocleidomastoid'", [ 3,  6,  9, 10,
                       12, 14, 17, 18 ] ],
                    [ "'buajajajaja:!'", [ 2, 3, 5, 7, 9, 11 ] ],
                    [ "`I guess you wonder where I've been I searched to find a love within I came back to let you know Got a thing for you and I can't let go ;;;! Yydbd8765vsvretozsxAauiAUIUIiuai`",  [1,   4,   5,   9,  10,  11,  14,  17,  22,  24,  26,  29,  32,  33,  36,  39,  40,  44,  48,  51,  55,  58,  60,  63,  66,  69,  72,  74,  77,  82,  85,  88,  89,  90,  94,  98,   101, 105, 110, 113, 114, 115, 117, 121, 124, 130, 134, 141, 142, 154, 156, 160, 161, 162, 163, 164, 165, 166, 167, 168,
                        169, 170, 171, 172]],
                    [ "'I really love this amazing app, WHAT GENIUS MADE THIS?'", [  1,  4,  5,  8, 11, 13, 17, 20, 22, 24, 28, 35, 39, 41,
                       42, 46, 48, 52 ]],
                    [ "'Yupiiii BUajAiani yy sidcxniuA04'",[      1,  2,  4,  5,  6,  7, 10, 11, 13, 14, 15, 17, 19, 20, 23, 28, 29, 30 ]]
    ],
        "level": 4
    },
    {
        "name": "Count of positives / sum of negatives",
        "initialValue": "function countPositivesSumNegatives(input) {\n// your code here\n}",
        "input":"countPositivesSumNegatives(${input})",
        "instructions": `<p>Given an array of integers.</p><p>Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.</p><p>If the input is an empty array or is null, return an empty array.</p><h3>Example</h3><p>For input <br/> <span class="border">[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]</span>, you should return <span class="border">[10, -65]</span>.</p>`,
        "output": [ [ `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12,  -13, -14, -15]`, [10, -65]],
                    [ `[]`, []],
                    [ `[34,627,7,-26,-36,4.5,24]`, [ 5, -62 ]],
                    [ `[5.7,2,-46.2,-0,27,58]`, [ 4, -46.2 ]],
                    [`[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]`,[8, -50]],
                    [`[53673,7,-46,-92874,2,48.2,-274.6]`,[ 4, -93194.6 ]],
                    [`[1,1,1,1,1,1,1,1,1,-1,-186,-156,-9147,0]`,[ 9, -9490 ]],
                    [`[0,0,0,0,0,0,0,0,-0,-0,-0,-0]`,[ 0, 0 ]],
                    [`[2834692,-372,-28,-276,297,2948,28634,283746823462346,-27.7578,-74.8284862]`,[ 5, -778.5862862 ]],
                    [`[1,2,436,363,36,3,63,3,63,6,7,3,3,6,3737,7,37,3,7353252,2,426,5,99,6]`,[ 24, 0 ]]
    ],
        "level": 5
    },
    {
        "name": "Jaden Casing Strings",
        "initialValue": "String.prototype.toJadenCase = function () {\n//...\n};",
        "input":"noinput.toJadenCase()",
        "instructions": `<p>Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.</p><p>Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.</p><p>Example</p><div class="border"><p>Not Jaden-Cased: 'How can mirrors be real if our eyes aren't real'<br/>Jaden-Cased:     'How Can Mirrors Be Real If Our Eyes Aren't Real'</p>`,
        "output":  [[ `Hello, is it me you're looking for??`,`Hello, Is It Me You're Looking For??` ],
                    [`if you like piña coladas and gettin' caught in the rain`, `If You Like Piña Coladas And Gettin' Caught In The Rain`],
                    [`How can mirrors be real if our eyes aren't real`,`How Can Mirrors Be Real If Our Eyes Aren't Real`],
                    [`Ouga chaka ouga. I can't stop this feeling. Deep inside of me`,`Ouga Chaka Ouga. I Can't Stop This Feeling. Deep Inside Of Me`],
                    [`I'm not in love, so don't forget it`,`I'm Not In Love, So Don't Forget It`],
                    [`bua ja ja ja ja aja ajjaja :`,`Bua Ja Ja Ja Ja Aja Ajjaja :`],
                    [`are you ready FOR THE GOOD time`, `Are You Ready FOR THE GOOD Time`],
                    [`Thunder, thunder, thunder, thunder`,`Thunder, Thunder, Thunder, Thunder`],
                    [`if you leave me now, you'll take away the biggest part of, uuuuu uuuu uuuu no, baby, please don't go`,`If You Leave Me Now, You'll Take Away The Biggest Part Of, Uuuuu Uuuu Uuuu No, Baby, Please Don't Go`],
                    [`jhs skdw wdkjhw wkwbd wdxkuhhnv END`,`Jhs Skdw Wdkjhw Wkwbd Wdxkuhhnv END`]
    ],
        "level": 4
    },
    {
        "name": "Exes and Ohs",
        "initialValue": "function XO(str) {\n//code here\n}",
        "input":"XO(${input})",
        "instructions": `<p>Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.</p><p>Examples input/output:</p><ControlledEditor/>`,
        "example":[`XO("ooxx") => true\nXO("xooxx") => false
        'o' is present should return true\nXO("zzoo") => false`],
        "output": [ [`"xo"`,true],
                    [`"xxOo"`,true],
                    [`"xxxm"`,false],
                    [`"Oo"`,false],
                    [`"ooom"`,false],
                    [`"zpzpzpp"`,true],
                    [`"OoOoXxX0XgvGV0x"`,false],
                    [`"XOXOXOxo"`,true],
                    [`"dXfOefXd4OveX5OxxdfooO"`,false],
                    [`"oxojmOxXsñlc,ñ"`,true]
    ],
        "level": 4
    },
    {
        "name": "Remove the minimum",
        "initialValue": "function removeSmallest(numbers) {\nreturn [];\n}",
        "input":"removeSmallest(${input})",
        "instructions": `<h3>The museum of incredible dull things</h3><p>The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.</p><p>However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.</p> <h3>Task</h3><p>Given an array of integers, remove the smallest value. <span class='highlight'>Do not mutate the original array/list.</span> If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.</p><p>Don't change the order of the elements that are left.</p><p>Examples</p>   <ControlledEditor/>`,
        "example":["* Input: [1,2,3,4,5], output = [2,3,4,5]\n* Input: [5,3,2,1,4], output = [5,3,2,4]\n* Input: [2,2,1,2,1], output = [2,2,2,1]"],
        "output": [ [`[1, 2, 3, 4, 5]`,[2, 3, 4, 5]],
                    [`[5, 3, 2, 1, 4]`, [5, 3, 2, 4]],
                    [`[2, 2, 1, 2, 1]`, [2, 2, 2, 1]],
                    [`[]`, []],
                    [`[3,5,2.1,2]`,[ 3, 5, 2.1 ]],
                    [`[8.3,8.299,9]`,[ 8.3, 9 ]],
                    [`[-5,-3,-4.9,-4.99]`,[ -3, -4.9, -4.99 ]],
                    [`[0,-0.1,1,-0.2]`,[ 0, -0.1, 1 ]],
                    [`[0,6,1,9,4,7,3,7,8,9,0,2]`,[ 6, 1, 9, 4, 7,
                        3, 7, 8, 9, 0, 2 ]],
                    [`[8]`,[]]
    ],
        "level": 4
    },
    {
        "name": "Isograms",
        "initialValue": "function isIsogram(str){\n//...\n}",
        "input":"isIsogram(${input})",
        "instructions": `<p>An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.</p><p>Example: (Input --> Output)</p>     <p>"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)</p><ControlledEditor/>`,
        "example":['isIsogram "Dermatoglyphics" = true\nisIsogram "moose" = false\nisIsogram "aba" = false'],
        "output": [ [`"Dermatoglyphics"`, true ],
                    [`"isogram"`, true],
                    [`"aba"`, false],
                    [`"moOse"`, false],
                    [`"isIsogram"`, false],
                    [`""`, true],
                    [`"abcdefghijklmnopq"`,true],
                    [`"I am ."`,false],
                    [`"hello"`,false],
                    [`"yupi !abcdefg.3791"`,true]
    ],
        "level": 4
    },
    {
        "name": "Sum of two lowest positive integers",
        "initialValue": "function sumTwoSmallestNumbers(numbers) {\n//Code here\n}",
        "input":"sumTwoSmallestNumbers(${input})",
        "instructions": `<p>Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.</p>  <p>For example, when an array is passed like <span class="border">[19, 5, 42, 2, 77]</span>, the output should be <span class="border">7</span>.</p>       <p><span class="border">[10, 343445353, 3453445, 3453545353453]</span> should return <span class="border">3453455</span>.</p>`,
        "output": [ [`[5, 8, 12, 19, 22]`, 13 ],
                    [`[15, 28, 4, 2, 43]`, 6],
                    [`[3, 87, 45, 12, 7]`, 10],
                    [`[23, 71, 33, 82, 1]`, 24],
                    [`[52, 76, 14, 12, 4]`, 16],
                    [`[45,876,356,34]`,79],
                    [`[2.01,2.01,2.01]`,4.02],
                    [`[35.9999,35.9999,35.99999,456,72]`,71.9998],
                    [`[0,-5]`,-5],
                    [`[-374,651,1381,112,12124,22,424,553]`,-352]
    ],
        "level": 4
    },
    {
        "name": "Are the numbers in order?",
        "initialValue": "function inAscOrder(arr) {\n  // Code your algorithm here :)\n \n  // Hmmm ... maybe we should try our luck out ...\n  // if (Math.random() > 0.5) {\n  //  return true;\n  // } else {\n  //  return false;\n  // }\n}",
        "input":"inAscOrder(${input})",
        "instructions": `<h3>Are the numbers in order?</h3><p>In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.</p><p>For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.</p><p>Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.</p><p>For example:</p><ControlledEditor/> <p><i>N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.</i></p>`,
        "example": ["inAscOrder([1,2,4,7,19]); // returns true\ninAscOrder([1,2,3,4,5]); // returns true\ninAscOrder([1,6,10,18,2,4,20]); // returns false\ninAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order"],
        "output": [ [`[1, 2, 4, 7, 19]`, true ],
                    [`[1, 2, 3, 4, 5]`, true],
                    [`[1, 6, 10, 18, 2, 4, 20]`,false],
                    [`[9, 8, 7, 6, 5, 4, 3, 2, 1]`, false],
                    [`[1,2,3,4,5,62]`, true],
                    [`[63892,82367,27873,2863287]`,false],
                    [`[0,0.5,6,7.3]`,true],
                    [`[10893,2673223,2442525,24242424]`,false],
                    [`[]`,true],
                    [`['4.6',5,6]`,true]
    ],
        "level": 4
    },
    {
        "name": "Remove anchor from URL",
        "initialValue": "function removeUrlAnchor(url){\n  // TODO: complete\n}",
        "input":"removeUrlAnchor(${input})",
        "instructions": `<p>Complete the function/method so that it returns the url with anything after the anchor <span class="border">(#)</span> removed.</p><h3>Examples:</h3><ControlledEditor/>`,
        "example": ['"www.codewars.com#about" --> "www.codewars.com"\n"www.codewars.com?page=1" -->"www.codewars.com?page=1"'],
        "output": [ [`'www.codewars.com#about'`, 'www.codewars.com' ],
                    [`'www.codewars.com/katas/?page=1#about'`, 'www.codewars.com/katas/?page=1'],
                    [`'www.codewars.com/katas/'`, 'www.codewars.com/katas/'],
                    [`'removeUrlAnchor@jhadf##jhbkhcs'`,'removeUrlAnchor@jhadf'],
                    [`''`, ''],
                    [`' .#'`,' .'],
                    [`'kjhfcksjj.adhacjacaclk.d.adl.dk#ksdfvksbvkjs'`,'kjhfcksjj.adhacjacaclk.d.adl.dk'],
                    [`'546576tg647th#g765#tr'`,'546576tg647th'],
                    [`'hvcfbjuu63juj3v.xx'`,'hvcfbjuu63juj3v.xx'],
                    [`'17371bhbkwqfd#hjbjlbdsb '`,'17371bhbkwqfd']
    ],
        "level": 4
    },
    {
        "name": "Number of People in the Bus",
        "initialValue": "var number = function(busStops){\n  // Good Luck!\n}",
        "input":"number(${input})",
        "instructions": `<p>There is a bus moving in the city which takes and drops some people at each bus stop.</p><p>You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.</p><p>Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D</p><p>Take a look on the test cases.</p><p>Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.</p><p>The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.</p>`,
        "output": [ [`[[10,0],[3,5],[5,8]]`,5],
                    [`[[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]`,17],
                    [`[[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]`,21],
                    [`[[0,0]]`,0],
                    [`[]`, 0],
                    [`[[3,2],[8,9],[57,25]]`,32],
                    [`[[65,6],[7,0],[4,8],[0,26]]`,36],
                    [`[[37,5],[7,7],[2,0],[15,25],[5,35],[7,8],[14,7]]`,0],
                    [`[[6,3],[27,15],[14,2],[1,7]]`,21],
                    [`[[16,7],[9,28],[4,1],[35,0],[5,18]]`,15]
    ],
        "level": 4
    },
    {
        "name": "Don't give me five!",
        "initialValue": "function dontGiveMeFive(start, end)\n{\nreturn 0;\n}",
        "input":"dontGiveMeFive(${input})",
        "instructions": `<h3>Don't give me five!</h3><p>In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!</p><p>Examples:</p><ControlledEditor/><p>The result may contain fives. ;-)<br/>The start number will always be smaller than the end number.<br/>Both numbers can be also negative!</p>      <p>I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.</p><p>Have fun coding it and please don't forget to vote and rank this kata! :-)</p> <p>I have also created other katas. Take a look if you enjoyed this kata!</p>`,
        "example": ["1,9 -> 1,2,3,4,6,7,8,9 -> Result 8\n4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12"],
        "output": [ [`4,17`, 12],
                    [`1,9`, 8],
                    [`16,289`,220],
                    [`0,0`,1],
                    [`-4,92`,79],
                    [`-4,0`,5],
                    [`0,25.6`,23],
                    [`6,12345`,8298],
                    [`56,9864`,6404],
                    [`-828,0`,593]
    ],
        "level": 4
    },
    {
        "name": "Is it a palindrome?",
        "initialValue": "function isPalindrome(x) {\n  // your code here\n}",
        "input":"isPalindrome(${input})",
        "instructions": `<p>Write a function that checks if a given string (case insensitive) is a <a href='https://en.wikipedia.org/wiki/Palindrome'>palindrome</a>.</p>`,
        "output": [ [`"a"`, true],
                    [`"aba"`, true],
                    [`"Abba"`, true],
                    [`"hello"`, false],
                    [`"Bob"`, true],
                    [`"Madam"`, true],
                    [`"AbBa"`, true],
                    [`""`, true],
                    [`"AbCdedcba"`, true],
                    [`"Y.aiA.y"`,true]
    ],
        "level": 5
    },
    {
        "name": "Get the Middle Character",
        "initialValue": "function getMiddle(s)\n{\n  //Code goes here!\n}",
        "input":"getMiddle(${input})",
        "instructions": `<p>You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.</p><p>Examples:</p><ControlledEditor/><p>Input</p><p>A word (string) of length <span class="border"> 0 ${`< str < 1000`}</span> (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.</p><p>Output</p><p>The middle character(s) of the word represented as a string.</p>`,
        "example": ['Kata.getMiddle("test") should return "es"\n \nKata.getMiddle("testing") should return "t"\n \nKata.getMiddle("middle") should return "dd"\n \nKata.getMiddle("A") should return "A"'],
        "output": [ [`"test"`,"es"],
                    [`"testing"`,"t"],
                    [`"middle"`,"dd"],
                    [`"A"`,"A"],
                    [`''`,''],
                    [`'baby born'`,' '],
                    [`'aladdin'`,'d'],
                    [`'keyboard'`,'bo'],
                    [`'    '`, '  '],
                    [`'allEhOp'`,'E']
    ],
        "level": 4
    },
    {
        "name": "Disemvowel Trolls",
        "initialValue": "function disemvowel(str) {\n return str;\n}",
        "input":"disemvowel(${input})",
        "instructions": `<p>Trolls are attacking your comment section!</p><p>A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.</p> <p>Your task is to write a function that takes a string and return a new string with all vowels removed.</p>  <p>For example, the string 'This website is for losers LOL!' would become 'Ths wbst s fr lsrs LL!'.</p><p>Note: for this kata <span class="border">y</span> isn't considered a vowel.</p>`,
        "output": [ [`"This website is for losers LOL!"`, "Ths wbst s fr lsrs LL!"],
                    [`"No offense but,Your writing is among the worst I've ever read"`,"N ffns bt,Yr wrtng s mng th wrst 'v vr rd"],
                    [`"What are you, a communist?"`,"Wht r y,  cmmnst?"],
                    [`'hello, is it me your looking for'`,'hll, s t m yr lkng fr'],
                    [`''`,''],
                    [`'Kata fruskAY'`,'Kt frskY'],
                    [`'aladdin'`,'lddn'],
                    [`'     6ygjaAh'`,'     6ygjh'],
                    [`' i'`,' '],
                    [`'aaaaeiaoouaoIiau'`,'']
    ],
        "level": 4
    },
    {
        "name": "Find the missing letter",
        "initialValue": "function findMissingLetter(array)\n{\n  return ' ';\n}",
        "input":"findMissingLetter(${input})",
        "instructions": `<h3>Find the missing letter</h3><p>Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.</p><p>You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.<br/>The array will always contain letters in only one case.</p><p>Example:</p><ControlledEditor/><p>(Use the English alphabet with 26 letters!)</p><p>Happy coding! ${`:-)`}</p>`,
        "example": ["['a','b','c','d','f'] -> 'e'\n['O','Q','R','S'] -> 'P'"],
        "output": [ [`['a','b','c','d','f']`, 'e'],
                    [`['O','Q','R','S']`, 'P'],
                    [`['B','C','E','F']`,'D'],
                    [`['h','i','j','k','l','n']`,'m'],
                    [`['n','o','p','q','r','s','t','v','x','y']`,'u'],
                    [`['A','C']`,'B'],
                    [`['X','Z']`,'Y'],
                    [`['f','g','i']`,'h'],
                    [`['P','Q','R','S','T','U','V','X','Y','Z']`,'W'],
                    [`['b','d','f']`,'c']
    ],
        "level": 3
    },
    {
        "name": "Build Tower",
        "initialValue": "function towerBuilder(nFloors) {\n  // build here\n}",
        "input":"towerBuilder(${input})",
        "instructions": `<h3>Build Tower</h3><p>Build a pyramid-shaped tower, as an array/list of strings, given a positive integer <spam class="border">number of floors</spam>. A tower block is represented with <spam class="border">"*"</spam> character.</p><p>For example, a tower with <span class="border">3</span> floors looks like this:</p>  <ControlledEditor/><p>And a tower with <span class="border">6</span> floors looks like this:</p>       <ControlledEditor/></p>`,
        "example": ['[\n  "  *  ",\n  " *** ",\n  "*****"\n]','[\n  "     *     ",\n  "    ***    ",\n  "   *****   ",\n  "  *******  ",\n  " ********* ",\n  "***********"\n]'],
        "output": [ [1, ["*"]],
                    [2, [" * ","***"]],
                    [3, ["  *  "," *** ","*****"]],
                    [0,[]],
                    [5,[ '    *    ', '   ***   ', '  *****  ', ' ******* ', '*********' ]],
                    [8,[
                        '       *       ',
                        '      ***      ',
                        '     *****     ',
                        '    *******    ',
                        '   *********   ',
                        '  ***********  ',
                        ' ************* ',
                        '***************'
                      ]],
                    [10,[
                        '         *         ',
                        '        ***        ',
                        '       *****       ',
                        '      *******      ',
                        '     *********     ',
                        '    ***********    ',
                        '   *************   ',
                        '  ***************  ',
                        ' ***************** ',
                        '*******************'
                      ]],
                    [7,[
                        '      *      ',
                        '     ***     ',
                        '    *****    ',
                        '   *******   ',
                        '  *********  ',
                        ' *********** ',
                        '*************'
                      ]],
                    [12,[
                        '           *           ',
                        '          ***          ',
                        '         *****         ',
                        '        *******        ',
                        '       *********       ',
                        '      ***********      ',
                        '     *************     ',
                        '    ***************    ',
                        '   *****************   ',
                        '  *******************  ',
                        ' ********************* ',
                        '***********************'
                      ]],
                    [50,[
                        '                                                 *                                                 ',
                        '                                                ***                                                ',
                        '                                               *****                                               ',
                        '                                              *******                                              ',
                        '                                             *********                                             ',
                        '                                            ***********                                            ',
                        '                                           *************                                           ',
                        '                                          ***************                                          ',
                        '                                         *****************                                         ',
                        '                                        *******************                                        ',
                        '                                       *********************                                       ',
                        '                                      ***********************                                      ',
                        '                                     *************************                                     ',
                        '                                    ***************************                                    ',
                        '                                   *****************************                                   ',
                        '                                  *******************************                                  ',
                        '                                 *********************************                                 ',
                        '                                ***********************************                                ',
                        '                               *************************************                               ',
                        '                              ***************************************                              ',
                        '                             *****************************************                             ',
                        '                            *******************************************                            ',
                        '                           *********************************************                           ',
                        '                          ***********************************************                          ',
                        '                         *************************************************                         ',
                        '                        ***************************************************                        ',
                        '                       *****************************************************                       ',
                        '                      *******************************************************                      ',
                        '                     *********************************************************                     ',
                        '                    ***********************************************************                    ',
                        '                   *************************************************************                   ',
                        '                  ***************************************************************                  ',
                        '                 *****************************************************************                 ',
                        '                *******************************************************************                ',
                        '               *********************************************************************               ',
                        '              ***********************************************************************              ',
                        '             *************************************************************************             ',
                        '            ***************************************************************************            ',
                        '           *****************************************************************************           ',
                        '          *******************************************************************************          ',
                        '         *********************************************************************************         ',
                        '        ***********************************************************************************        ',
                        '       *************************************************************************************       ',
                        '      ***************************************************************************************      ',
                        '     *****************************************************************************************     ',
                        '    *******************************************************************************************    ',
                        '   *********************************************************************************************   ',
                        '  ***********************************************************************************************  ',
                        ' ************************************************************************************************* ',
                        '***************************************************************************************************'
                      ]]
    ],
        "level": 3
    },
    {
        "name": "Count characters in your string",
        "initialValue": "function count(string) {\n  // TODO\n  return {};\n}",
        "input":"count(${input})",
        "instructions": `<p>The main idea is to count all the occurring characters in a string. If you have a string like <span class="border">aba</span>, then the result should be <span class="border">${`{'a': 2, 'b': 1}`}</span>.</p><p>What if the string is empty? Then the result should be empty object literal, <span class="border">{}</span>.</p>`,
        "output": [ [`''`, {}],
                    [`'a'`, {'a': 1}],
                    [`'ab'`, {'a': 1, 'b': 1}],
                    [`'aba'`, {'a': 2, 'b': 1}],
                    [`'ABC'`, {'A': 1, 'B': 1, 'C': 1}],
                    [`'Da..'`,{ D: 1, a: 1, '.': 2 }],
                    [`'CXxxAb'`,{ C: 1, X: 1, x: 2, A: 1, b: 1 }],
                    [`'0zK´k'`,{ '0': 1, z: 1, K: 1, '´': 1, k: 1 }],
                    [`'pJkakJJa'`,{ p: 1, J: 3, k: 2, a: 2 }],
                    [`'AakHlJBiu7CHKJKJvJGCjhvBKHJVJHCKHVJHhmchhvhmv'`,{ '7': 1, A: 1, a: 1, k: 1, H: 6, l: 1, J: 7, B: 2, i: 1, u: 1, C: 3, K: 4, v: 4,  G: 1, j: 1, h: 5, V: 2, m: 2, c: 1 }]
    ],
        "level": 3
    },
    {
        "name": "Find the odd int",
        "initialValue": "function findOdd(A) {\n  //happy coding!\n  return 0;\n}",
        "input":"findOdd(${input})",
        "instructions": `<p>Given an array of integers, find the one that appears an odd number of times.</p><p>There will always be only one integer that appears an odd number of times.</p><p>Examples</p><p><span class="border">[7]</span> should return <span class="border">7</span>, because it occurs 1 time (which is odd).</p><p><span class="border">[0]</span> should return <span class="border">0</span>, because it occurs 1 time (which is odd).</p><p><span class="border">[1,1,2]</span> should return <span class="border">2</span>, because it occurs 1 time (which is odd).</p><p><span class="border">[0,1,0,1,0]</span> should return <span class="border">0</span>, because it occurs 3 times (which is odd).</p>`,
        "output": [ [`[7]`, 7],
                    [`[1,1,2]`, 2],
                    [`[1,2,2,3,3,3,4,3,3,3,2,2,1]`, 4],
                    [`[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]`, 5],
                    [`[1,1,2,-2,5,2,4,4,-1,-2,5]`, -1],
                    [`[20,1,1,2,2,3,3,5,5,4,20,4,5]`, 5],
                    [`[10]`, 10],
                    [`[1,1,1,1,1,1,10,1,1,1,1]`, 10],
                    [`[5,4,3,2,1,5,4,3,2,10,10]`, 1],
                    [`[0,1,0,1,0]`, 0]
    ],
        "level": 3
    },
    {
        "name": "Moving Zeros To The End",
        "initialValue": "function moveZeros(arr) {\n  return\n}",
        "input":"moveZeros(${input})",
        "instructions": `<p>Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.</p><ControlledEditor/>`,
        "example":['moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]'],
        "output": [ [`[1,2,0,1,0,1,0,3,0,1]`, [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]],
                    [`['hello',3,14,'bye',0,0,'o','no','no']`,[
                        'hello', 3, 14,'bye','o', 'no',   'no',  0, 0 ]],
                    [`[0,'.',0.1,'hi',0.0]`,[ '.', 0.1, 'hi', 0, 0 ]],
                    [`[1,'f','ho',0,'ho',0]`,[ 1, 'f', 'ho', 'ho', 0, 0 ]],
                    [`[45,82,'fgh',0.00,0,7]`,[ 45, 82, 'fgh', 7, 0, 0 ]],
                    [`[0,0.00000,0.000001,'h','hgfh',3]`,[ 0.000001, 'h', 'hgfh', 3, 0, 0 ]],
                    [`[0,0,78,'ldckn',true,false,0.0001,0.000000000,false,'jhdcbc']`,[ 78,'ldckn',true, false, 0.0001, false,'jhdcbc', 0, 0, 0 ]],
                    [`[0,9273,'kjsb','boolean','0',true]`,[ 9273, 'kjsb', 'boolean', '0', true, 0 ]],
                    [`[78,57,'true',0,0.000,true,'skkn',0.00003]`,[ 78, 57, 'true', true, 'skkn', 0.00003, 0, 0 ]],
                    [`[true,false,'jd',673,0.3,'dh']`,[ true, false, 'jd', 673, 0.3, 'dh' ]]
    ],
        "level": 2
    },
    {
        "name": "Simple Pig Latin",
        "initialValue": "function pigIt(str){\n  //Code here\n}",
        "input":"pigIt(${input})",
        "instructions": `<p>Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.</p><p>Examples</p><ControlledEditor/>`,
        "example":["pigIt('Pig latin is cool'); // igPay atinlay siay oolcay\npigIt('Hello world !');     // elloHay orldway !"],
        "output": [ [`'Pig latin is cool'`,'igPay atinlay siay oolcay'],
                    [ `'This is my string'`,'hisTay siay ymay tringsay'],
                    [`'How are you ?'`,'owHay reaay ouyay ?'],
                    [`'under THE Influenceeeay :D'`,'nderuay HETay nfluenceeeayIay :D'],
                    [`'Memories fading, I try to hold on'`,'emoriesMay fading, Iay rytay otay oldhay noay'],
                    [`'The sound of your voice was my all, was my home !!'`,'heTay oundsay foay ouryay oicevay asway ymay all, asway ymay omehay !!'],
                    [`'1 2 3 4 5 buajajaja'`,'1 2 3 4 5 uajajajabay'],
                    [`"Summertime and the livin' is easy"`,"ummertimeSay ndaay hetay livin' siay asyeay"],
                    [`'Stars shining bright above you. Night breezes seem to whisper I love you.'`,'tarsSay hiningsay rightbay boveaay you. ightNay reezesbay eemsay otay hisperway Iay ovelay you.'],
                    [`"L is for the way you look at me. O is for the only one I see. V is very, very extraordinary. E is even more!! than anyone!! that you adore can!!"`,'Lay siay orfay hetay ayway ouyay ooklay taay me. Oay siay orfay hetay nlyoay neoay Iay see. Vay siay very, eryvay extraordinary. Eay siay veneay more!! hantay anyone!! hattay ouyay doreaay can!!']
    ],
        "level": 2
    },
    {
        "name": "Human Readable Time",
        "initialValue": "function humanReadable (seconds) {\n  return '';\n}",
        "input":"humanReadable(${input})",
        "instructions": `<p>Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format <span class="border">(HH:MM:SS)</span></p><li><span class="border">HH</span> = hours, padded to 2 digits, range: 00 - 99</li>  <li><span class="border">MM</span> = minutes, padded to 2 digits, range: 00 - 59</li><li><span class="border">SS</span> = seconds, padded to 2 digits, range: 00 - 59</li><p>The maximum time never exceeds 359999 <span class="border">(99:59:59)</span></p><p>You can find some examples in the test fixtures.</p>`,
        "output": [ [0, "00:00:00"],
                    [59, "00:00:59"],
                    [60, "00:01:00"],
                    [90, "00:01:30"],
                    [3599, "00:59:59"],
                    [3600, "01:00:00"],
                    [45296, "12:34:56"],
                    [86399, "23:59:59"],
                    [86400, "24:00:00"],
                    [359999, "99:59:59"]
    ],
        "level": 2
    },
    {
        "name": "RGB To Hex Conversion",
        "initialValue": "function rgb(r, g, b){\n  // complete this function\n}",
        "input":"rgb(${input})",
        "instructions": `<p>The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.</p><p>Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.</p><p>The following are examples of expected output values:</p><ControlledEditor/>`,
        "example":["rgb(255, 255, 255) // returns FFFFFF\nrgb(255, 255, 300) // returns FFFFFF\nrgb(0,0,0) // returns 000000\nrgb(148, 0, 211) // returns 9400D3"],
        "output": [ [`0, 0, 0`, '000000'],
                    [`0, 0, -20`, '000000'],
                    [`300,255,255`, 'FFFFFF'],
                    [`173,255,47`, 'ADFF2F'],
                    [`200,40,28`, 'C8281C'],
                    [`45,78,156`, '2D4E9C'],
                    [`200,148,8`, 'C89408'],
                    [`5,249,16`, '05F910'],
                    [`37,96,189`, '2560BD'],
                    [`250,56,197`, 'FA38C5']
    ],
        "level": 2
    },
    {
        "name": "Directions Reduction",
        "initialValue": "function dirReduc(arr){\n  // ...\n}",
        "input":"dirReduc(${input})",
        "instructions": `  <p><b>Once upon a time, on a way through the old wild mountainous west,…</b></p>
        <p>… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.</p>
        <p>Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!</p>
        <p><b>How I crossed a mountainous desert the smart way.</b></p>
        <ControlledEditor/>
        <p>You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:</p>
        <ControlledEditor/>
        <p><b>Other examples:</b></p>
        <p>In <span class="border">["NORTH", "SOUTH", "EAST", "WEST"]</span>, the direction <span class="border">"NORTH" + "SOUTH"</span> is going north and coming back right away.</p>
        <p>The path becomes <span class="border">["EAST", "WEST"]</span>, now <span class="border">"EAST"</span> and <span class="border">"WEST"</span> annihilate each other, therefore, the final result is <span class="border">[]</span> (nil in Clojure).</p>
        <p>In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].</p>`,
        "example":['["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].','["WEST"]'],
        "output": [ [`["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]`,["WEST"]],
                    [`["NORTH", "WEST", "SOUTH", "EAST"]`,["NORTH", "WEST", "SOUTH", "EAST"]],
                    [`["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]`,[]],
                    [`["NORTH", "WEST", "SOUTH", "EAST","EAST","WEST"]`,[ 'NORTH', 'WEST', 'SOUTH', 'EAST' ]],
                    [`["NORTH", "WEST","NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]`,[ 'NORTH', 'WEST', 'WEST' ]],
                    [`[ 'NORTH', 'WEST', 'WEST','SOUTH' ]`,[ 'NORTH', 'WEST', 'WEST', 'SOUTH' ]],
                    [`[ 'NORTH','SOUTH', 'WEST', 'WEST', 'SOUTH' ]`,[ 'WEST', 'WEST', 'SOUTH' ]],
                    [`[ 'NORTH','SOUTH', 'WEST','EAST', 'WEST', 'SOUTH' ]`,[ 'WEST', 'SOUTH' ]],
                    [`[]`,[]],
                    [`['SOUTH','EAST','WEST']`,[ 'SOUTH' ]]
    ],
        "level": 2
    },
    {
        "name": "Snail",
        "initialValue": "const snail = function(array) {\n   // enjoy\n}",
        "input":"snail(${input})",
        "instructions": `    <h3>Snail Sort</h3>
        <p>Given an <span class="border">n x n</span> array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.</p>
        <ControlledEditor/>
        <p>For better understanding, please follow the numbers of the next array consecutively:</p>
        <ControlledEditor/>
        <p>NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.</p>
        <p>NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array <span class="border">[ [ ] ]</span>.</p>
        <img src="https://i.ibb.co/Mh4x2w0/snail.png" alt='snail'/>`,
        "example":['array = [[1,2,3],\n         [4,5,6],\n         [7,8,9]]\nsnail(array) #=> [1,2,3,6,9,8,7,4,5]','array = [[1,2,3],\n         [8,9,4],\n         [7,6,5]]\nsnail(array) #=> [1,2,3,4,5,6,7,8,9]'],
        "output": [ [`[[]]`, []],
                    [`[[1]]`, [1]],
                    [`[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, [1, 2, 3, 6, 9, 8, 7, 4, 5]],
                    [`[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]`, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]],
                    [`[[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]`, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]],
                    [`[[1, 3, 5, 6], [21, 22, 24, 7], [19, 32, 25, 8], [18, 31, 36, 9]]`,[ 1,  3,  5,  6,  7,  8, 9, 36, 31, 18, 19, 21, 22, 24, 25, 32
                     ]],
                    [`[[673,9,2],[7,93,748],[82,927,0]]`,[ 673,  9, 2, 748, 0, 927, 82, 7,  93 ]],
                    [`[[0,627.9],[true,'h']]`,[ 0, 627.9, 'h', true ]],
                    [`[[false,0.088,'hi','i'],[true,3,249,'yr'],[3,3,78,86],['t',false,'es',93]]`,[ false, 0.088, 'hi', 'i', 'yr',  86,    93,   'es',
                        false, 't',   3,    true,  3,     249,   78,   3 ]],
                    [`[[6,3,52,24,25,52,26,74],[57,true,48,false,'h',6,29,0.0],[57,true,48,false,'h',6,29,0.0],[6,3,52,24,25,52,26,74],[57,true,48,false,'h',6,29,0.0],[6,3,52,24,25,52,26,74],[57,true,48,false,'h',6,29,0.0],[57,true,48,false,'h',6,29,0.0]]`,[ 6,   3,     52,    24,   25,   52,   26,    74,
                        0,   0,     74,    0,    74,   0,    0,     29,
                        6,   'h',   false, 48,   true, 57,   57,    6,
                        57,  6,     57,    57,   true, 48,   false, 'h',
                        6,   29,    29,    26,   29,   26,   29,    6,
                        'h', false, 48,    true, 3,    true, 3,     true,
                        48,  false, 'h',   6,    52,   6,    52,    25,
                        24,  52,    48,    52,   24,   25,   'h',   false
                      ]]
    ],
        "level": 1
    },
    {
        "name": "Human readable duration format",
        "initialValue": "function formatDuration (seconds) {\n  // Complete this function\n}",
        "input":"formatDuration(${input})",
        "instructions": `
        <p>Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.</p>
        <span class="border">"now"</span>
        <p>The function must accept a non-negative integer. If it is zero, it just returns <span class="border">"now"</span>. Otherwise, the duration is expressed as a combination of <span class="border">years</span>, <span class="border">days</span>, <span class="border">hours</span>, <span class="border">minutes</span> and <span class="border">seconds</span>.</p>
        <p>It is much easier to understand with an example:</p>
        <ControlledEditor/>
        <p>For the purpose of this Kata, a year is 365 days and a day is 24 hours.</p>
        <p>Note that spaces are important.</p>
        <h4>Detailed rules</h4>
        <p>The resulting expression is made of components like <span class="border">4 seconds</span>, <span class="border">1 year</span>, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.</p>
        <p>The components are separated by a comma and a space (<span class="border">", "</span>). Except the last component, which is separated by <span class="border">" and "</span>, just like it would be written in English.</p>
        <p>A more significant units of time will occur before than a least significant one. Therefore, <span class="border">1 second and 1 year</span> is not correct, but 1 year and 1 second is.</p>
        <p>Different components have different unit of times. So there is not repeated units like in <span class="border">5 seconds and 1 second</span>.</p>
        <p>A component will not appear at all if its value happens to be zero. Hence, <span class="border">1 minute and 0 seconds</span> is not valid, but it should be just <span class="border">1 minute</span>.</p>
        <p>A unit of time must be used "as much as possible". It means that the function should not return <span class="border">61 seconds</span>, but <span class="border">1 minute and 1 second</span> instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.</p>`,
        "example":[`* For seconds = 62, your function should return 
        "1 minute and 2 seconds"
    * For seconds = 3662, your function should return
        "1 hour, 1 minute and 2 seconds"`],
        "output": [ [1,"1 second"],
                    [62, "1 minute and 2 seconds"],
                    [120, "2 minutes"],
                    [3600, "1 hour"],
                    [3662, "1 hour, 1 minute and 2 seconds"],
                    [7000,"1 hour, 56 minutes and 40 seconds"],
                    [10000,"2 hours, 46 minutes and 40 seconds"],
                    [100000, "1 day, 3 hours, 46 minutes and 40 seconds"],
                    [100000000,"3 years, 62 days, 9 hours, 46 minutes and 40 seconds"],
                    [82780000000,"2624 years, 341 days, 20 hours, 26 minutes and 40 seconds"]
    ],
        "level": 1
    },
    {
        "name": "Range Extraction",
        "initialValue": `function solution(list){
          // TODO: complete solution
        }`,
        "input":"solution(${input})",
        "instructions": `
        <p>A format for expressing an ordered list of integers is to use a comma separated list of either</p>
        <ul>
        <li>individual integers</li>
        <li>or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"</li>
        </ul>
        <p>Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.</p>
        <h4>Example</h4>
        <ControlledEditor/>`,
        "example":[`solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
        // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"`],
        "output": [ [`[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]`, "-6,-3-1,3-5,7-11,14,15,17-20"],
                    [`[-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]`,"-10--8,-6,-3-1,3-5,7-11,14,15,17-20"],
                    [`[-50.5,-49.5,-48.5,-20,-19,-18,-3,-2,-1,0,1,1.5,6,9,15]`,"-50.5--48.5,-20--18,-3-1,1.5,6,9,15"],
                    [`[-8,-8,-7,-6,-5,-4,-1,-0,1,5,7,8,9,10]`,"-8,-8--4,-1-1,5,7-10"],
                    [`[-22,-21,-19,2,3,6,7,9,10]`,"-22,-21,-19,2,3,6,7,9,10"],
                    [`[-256,-22,-21,-20,-19,63,2,3,6,36,7,8,9,10,63]`,"-256,-22--19,63,2,3,6,36,7-10,63"],
                    [`[-45,-44,-43.0299,-42,-3,7,8,9.00000,10]`,"-45,-44,-43.0299,-42,-3,7-10"],
                    [`[-36,-35.00000000000000000000000000001,-34,-4-33-3,-32]`,"-36--34,-40,-32"],
                    [`[-34-1-2,-30,-27-3+1,-28,-9*3,0,3,4,5,8.0000000000000000000003,9,10]`,"-37,-30--27,0,3-5,8-10"],
                    [`[-((9*9)**2),-6560,-656*8-1582+271.00000000000002,-3,-2,-1,67,68,'69','70',71]`,"-6561--6559,-3--1,67,68,69,70,71"]
      ],
        "level": 1
      }
] 

module.exports = kata;

    