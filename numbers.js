//1-1 While loop declare (target: Display 1 to 10)
var number = 0;
while (number <= 10) {
    console.log(number, "unique number");
    number++;
}
// print
// 0 unique number
// 1 unique number
// 2 unique number
// 3 unique number
// 4 unique number
// 5 unique number
// 6 unique number
// 7 unique number
// 8 unique number
// 9 unique number
// 10 unique number

//1-2 For loop declare (target: Display 1 to 10)
for ( var number = 0; number <= 10; number++) {
    console.log(number)
}// print
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//2-1 While loop even numbers (target: 1 to 10 all even numbers)
var number = 0;
while (number <= 10) {
    console.log(number);
    // number++;
    // number = number + 2;
    number += 2;
}//print
// 0
// 2
// 4
// 6
// 8
// 10

//2-2 For loop even numbers (target: 1 to 10 all even numbers)
for (var number = 0; number <= 10; number += 2){
    console.log(number);
}    
    //print
    // 0
    // 2
    // 4
    // 6
    // 8
    // 10

//2-3 For loop even numbers (target: 1 to 10 all even numbers)
for (var i = 0; i <= 10; i += 2){
    console.log(i);
}    
    //print
    // 0
    // 2
    // 4
    // 6
    // 8
    // 10


//3-1 While loop odd numbers (target: 1 to 10 all odd numbers)
var number = 1;
while (number <= 10) {
    console.log(number);
    // number++;
    // number = number + 2;
    number += 2;
}//print
// 1
// 3
// 5
// 7
// 9
 
//3-2 For loop odd numbers (target: 1 to 10 all odd numbers)
for (var number = 1; number <= 10; number += 2){
    console.log(number);
} //print
// 1
// 3
// 5
// 7
// 9

//3-3 For loop odd numbers (target: 1 to 10 all odd numbers)
for (var i = 1; i <= 10; i += 2){
    console.log(i);
} //print
// 1
// 3
// 5
// 7
// 9