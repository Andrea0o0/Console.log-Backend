export const kata =[
    {
        "name": "Multiply",
        "initialValue": "function multiply(a, b){\na * b\n}",
        "input":"multiply(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Multiply the two arguments of the function, for example:</p><ControlledEditor value={example} options={{    lineWrapping:true, mode:'javascript', theme: 'material', readOnly:true}}/>",
        "example":'multiply(3,5)==15 // 3 * 5\nmultiply(10,2)==20 // 10 * 2\nmultiply(300,47)==14100 // 300 * 47\nmultiply(0.5,28.8)==14.4 // 0.5 * 28.8',
        "output": [ [ (1,1) ,1 ],
                    [ (2,1), 2 ],
                    [ (2,2), 4 ],
                    [ (3,5), 15 ],
                    [ (0.5,20) ,10 ],
                    [ (8.7,5.48) ,47.676 ],
                    [ (1582,8641) ,13670062 ],
                    [ (156.7,519) ,81327.3 ],
                    [ (45146,0.005161) ,232.998506 ],
                    [ (0.003,25678) ,77.034 ]
                ],
        "level": 5
    },
    {
        "name": "Even or Odd",
        "initialValue": "function evenOrOdd(number) {\n \n}",
        "input":"evenOrOdd(${input})",
        "instructions": '<h4>DESCRIPTION:</h4><p>Create a function that takes an integer as an argument and returns <span className={border}>"Even"</span> for even numbers or <span className={border}>"Odd"</span> for odd numbers.</p>',
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
        "instructions": "<h4>DESCRIPTION:</h4><p>There was a test in your class and you passed it. <br/>Congratulations!<br/>But you're an ambitious person. You want to know if you're better than the average student in your class.</p><p>You receive an array with your peers' test scores. Now calculate the average and compare your score!</p><p>Return <span className={border}>True</span> if you're better, else <span className={border}>False</span>!</p><h4><br/>Note:</h4><p>Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!</p>",
        "output": [ [ [[2, 3], 5], true],
                    [ [[100, 40, 34, 57, 29, 72, 57, 88], 75], true ],
                    [ [[12, 23, 34, 45, 56, 67, 78, 89, 90], 9], false],
                    [ [[41, 75, 72, 56, 80, 82, 81, 33], 50], false],
                    [ [[29, 55, 74, 60, 11, 90, 67, 28], 21], false ],
                    [ [[34, 45, 74, 60,1000,43,24,500], 220], true ],
                    [  [[29, 55, 74, 6, 11, 90, 77, 20,90], 11], false ],
                    [  [[150, 35, 74, 60, 61, 7, 67, 28,200], 70], false ],
                    [  [[50, 25, 18, 7, 67, 28,200,5,35,75], 90], true ],
                    [ [[34.6, 0.5, 9, 7.9,10.48,35], 18], true  ]
    ],
        "level": 5
    }, 
    {
        "name": "Multiples of 3 or 5",
        "initialValue": "function solution(number){\n \n}",
        "input":"solution(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p><p>Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).</p><h4><br/>Note:</h4><p>If the number is a multiple of both 3 and 5, only count it once.</p>",
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
        "instructions": "<h4>DESCRIPTION:</h4><p>Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.</p><p>Your task is to write a function <span className={border}>maskify</span>, which changes all but the last four characters into <span className={border}>'#'</span></p><ControlledEditor     value={example}  options={{lineWrapping:true,mode:'javascript',theme: 'material',readOnly:true}}/>",
        "example":'maskify("4556364607935616") == "############5616"\nmaskify(     "64607935616") ==      "#######5616"\nmaskify(               "1") ==                "1"\nmaskify(                "") ==                 ""\n \n// "What was the name of your first pet?"\nmaskify("Skippy")                                   == "##ippy"\nmaskify("Nananananananananananananananana Batman!") == "####################################man!"',
        "output": [ [ '4556364607935616', '############5616'],
                    [ '1', '1'],
                    [ '11111', '#1111'],
                    [ '21341651', '####1651'],
                    [ '979254168535', '########8535'],
                    [ '', '' ],
                    [ '0000', '0000' ],
                    [ '00460000', '####0000'],
                    [ 'jfjfck,ltl khgktkkkuñhgx', '####################ñhgx'],
                    [ '/sc/-NZdaw AJC', '########## AJC']
    ],
        "level": 4
    }, 
    {
        "name": "Vowel Count",
        "initialValue": "function getCount(str) {\n return 0;\n}",
        "input":"getCount(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Return the number (count) of vowels in the given string.</p>       <p>We will consider <span className={border}>a</span>,<span className={border}>e</span>,<span className={border}>i</span>,<span className={border}>o</span>,<span className={border}>u</span> as vowels for this Kata (but not <span className={border}>y</span>).</p>        <p>The input string will only consist of lower case letters and/or spaces.</p>",
        "output": [ [ 'SJgBKBCKANI8BBIEio', '############5616'],
                    [ 'abracadabra', 5],
                    [ 'ioaueEio', 7],
                    [ 'aeiuoyiuiay', 9],
                    [ 'nxai7svjuaIYyai', 6],
                    [ '', 0 ],
                    [ 'YYYYa', 1 ],
                    [ '.-asjnolbxos56', 3],
                    [ 'AHUIOEB9iaiua68a989',6],
                    [ 'SJgBKBCKANI8BBIEio', 2]
    ],
        "level": 4
    },
    {
        "name": "Sum Mixed Array",
        "initialValue": "function sumMix(x){\n \n}",
        "input":"sumMix(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.</p><p>Return your answer as a number.</p>",
        "output": [ [ [9, 3, '7', '3'], 22],
                    [ ['5', '0', 9, 3, 2, 1, '9', 6, 7], 42],
                    [ ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 41],
                    [ ['3',6,725,'783',7], 1524],
                    [ ['8.2',4567,'0.6','83',6.2], 4665],
                    [ [-56,'2.6',67,0.6,'-2'], 0 ],
                    [ [-56,2,67,0], 13 ],
                    [ ['2.2',-4567,'0.6','-5',6.2], -4563],
                    [ [3456,-987,'7.37'],2476.37],
                    [ ['4.678','0785',-098987,'2678.7'], -95518.622]
    ],
        "level": 5
    },
    {
        "name": "Find the vowels",
        "initialValue": "function vowelIndices(word){\n//your code here\n}",
        "input":"vowelIndices(${input})",
        "instructions": '<h4>DESCRIPTION:</h4><p>We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).</p><p>So given a string "super", we should return a list of <span className={border}>[2, 4]</span>.</p><ControlledEditor value={example} options={{   lineWrapping:true, mode:"javascript", theme: "material", readOnly:true}}/><h4>Notes</h4><li>Vowels in this context refers to: a e i o u y (including upper case)</li><li>This is indexed from <span className={border}>[1..n]</span> (not zero indexed!)</li>',
        "example": "Some examples:\nMmmm  => []\nSuper => [2,4]\nApple => [1,5]\nYoMama -> [1,2,4,6]",
        "output": [ [ "mmm", []],
                    [ "apple", [1,5]],
                    [ "super", [2,4]],
                    [ "orange", [1,3,6]],
                    [ "supercalifragilisticexpialidocious", [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]],
                    [ "sternocleidomastoid", [ 3,  6,  9, 10,
                       12, 14, 17, 18 ] ],
                    [ "buajajajaja:!", [ 2, 3, 5, 7, 9, 11 ] ],
                    [ "I really love this amazing app, WHAT GENIUS MADE THIS?", [  1,  4,  5,  8, 11, 13, 17, 20, 22, 24, 28, 35, 39, 41,
                       42, 46, 48, 52 ]],
                    [ "Yupiiii BUajAiani yy sidcxniuA04",[      1,  2,  4,  5,  6,  7, 10, 11, 13, 14, 15, 17, 19, 20, 23, 28, 29, 30 ]],
                    [ "I guess you wonder where I've been I searched to find a love within I came back to let you know Got a thing for you and I can't let go ;;;! Yydbd8765vsvretozsxAauiAUIUIiuai",  [1,   4,   5,   9,  10,  11,  14,  17,  22,  24,  26,  29,  32,  33,  36,  39,  40,  44,  48,  51,  55,  58,  60,  63,  66,  69,  72,  74,  77,  82,  85,  88,  89,  90,  94,  98,   101, 105, 110, 113, 114, 115, 117, 121, 124, 130, 134, 141, 142, 154, 156, 160, 161, 162, 163, 164, 165, 166, 167, 168,
                   169, 170, 171, 172]]
    ],
        "level": 4
    },
    {
        "name": "Count of positives / sum of negatives",
        "initialValue": "function countPositivesSumNegatives(input) {\n// your code here\n}",
        "input":"countPositivesSumNegatives(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Given an array of integers.</p><p>Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.</p><p>If the input is an empty array or is null, return an empty array.</p><h3>Example</h3><p>For input <br/> <span className={border}>[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]</span>, you should return <span className={border}>[10, -65]</span>.</p>",
        "output": [ [ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12,  -13, -14, -15], [10, -65]],
                    [ [], []],
                    [ [34,627,7,-26,-36,4.5,24], [ 5, -62 ]],
                    [ [5.7,2,-46.2,-0,27,58], [ 4, -46.2 ]],
                    [[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14],[8, -50]],
                    [[53673,7,-46,-92874,2,48.2,-274.6],[ 4, -93194.6 ]],
                    [[1,1,1,1,1,1,1,1,1,-1,-186,-156,-9147,0],[ 9, -9490 ]],
                    [[0,0,0,0,0,0,0,0,-0,-0,-0,-0],[ 0, 0 ]],
                    [[2834692,-372,-28,-276,297,2948,28634,283746823462346,-27.7578,-74.8284862],[ 5, -778.5862862 ]],
                    [[1,2,436,363,36,3,63,3,63,6,7,3,3,6,3737,7,37,3,7353252,2,426,5,99,6],[ 24, 0 ]]
    ],
        "level": 5
    },
    {
        "name": "Jaden Casing Strings",
        "initialValue": "String.prototype.toJadenCase = function () {\n//...\n};",
        "input":"const input = ${input}\n input.toJadenCase()",
        "instructions": "<h4>DESCRIPTION:</h4><p>Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013).When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.</p><p>Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.</p><p>Example</p><div className={border}><p>Not Jaden-Cased: 'How can mirrors be real if our eyes aren't real'<br/>Jaden-Cased:     'How Can Mirrors Be Real If Our Eyes Aren't Real'</p>",
        "output": [[ "Hello, is it me you're looking for??","Hello, Is It Me You're Looking For??" ],
                    ["if you like piña coladas and gettin' caught in the rain", "If You Like Piña Coladas And Gettin' Caught In The Rain"],
                    ["How can mirrors be real if our eyes aren't real","How Can Mirrors Be Real If Our Eyes Aren't Real"],
                    ["Ouga chaka ouga. I can't stop this feeling. Deep inside of me","Ouga Chaka Ouga. I Can't Stop This Feeling. Deep Inside Of Me"],
                    ["I'm not in love, so don't forget it","I'm Not In Love, So Don't Forget It"],
                    ["bua ja ja ja ja aja ajjaja :","Bua Ja Ja Ja Ja Aja Ajjaja :"],
                    ["are you ready FOR THE GOOD time", "Are You Ready FOR THE GOOD Time"],
                    ["Thunder, thunder, thunder, thunder","Thunder, Thunder, Thunder, Thunder"],
                    ["if you leave me now, you'll take away the biggest part of, uuuuu uuuu uuuu no, baby, please don't go","If You Leave Me Now, You'll Take Away The Biggest Part Of, Uuuuu Uuuu Uuuu No, Baby, Please Don't Go"],
                    ["jhs skdw wdkjhw wkwbd wdxkuhhnv END","Jhs Skdw Wdkjhw Wkwbd Wdxkuhhnv END"]
    ],
        "level": 4
    },
    {
        "name": "Exes and Ohs",
        "initialValue": "function XO(str) {\n//code here\n}",
        "input":"XO(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.</p><p>Examples input/output:</p><ControlledEditor value={example} options={{    lineWrapping:true, mode:'javascript', theme: 'material', readOnly:true}}/>",
        "output": [ ['xo',true],
                    ["xxOo",true],
                    ["xxxm",false],
                    ["Oo",false],
                    ["ooom",false],
                    ["zpzpzpp",true],
                    ["OoOoXxX0XgvGV0x",false],
                    ["XOXOXOxo",true],
                    ["dXfOefXd4OveX5OxxdfooO",false],
                    ["oxojmOxXsñlc,ñ",true]
    ],
        "level": 4
    },
    {
        "name": "Exes and Ohs",
        "initialValue": "function XO(str) {\n//code here\n}",
        "input":"XO(${input})",
        "instructions": "<h4>DESCRIPTION:</h4><p>Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.</p><p>Examples input/output:</p><ControlledEditor value={example} options={{    lineWrapping:true, mode:'javascript', theme: 'material', readOnly:true}}/>",
        "output": [ ['xo',true],
                    ["xxOo",true],
                    ["xxxm",false],
                    ["Oo",false],
                    ["ooom",false],
                    ["zpzpzpp",true],
                    ["OoOoXxX0XgvGV0x",false],
                    ["XOXOXOxo",true],
                    ["dXfOefXd4OveX5OxxdfooO",false],
                    ["oxojmOxXsñlc,ñ",true]
    ],
        "level": 4
    },
] 
    

    