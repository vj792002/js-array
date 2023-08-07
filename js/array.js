//1. program to sort the items of an array.

var arr=["mango","orange","apple","grapes","watermelon","banana"];
var res=arr.sort();
console.log("sort():")
console.log(res);

//2.Add an element to an array front and back without push and unshift

var a=["mango","orange"];
console.log("front and back:");
console.log(a);
a.splice(0,0,"apple");
console.log(a);
a.splice(4,0,"pineapple");
console.log(a);


//3.Find the names in the array

var myArr1=["vijay","gokul","bharathi"];
console.log("find names:");
console.log(myArr1.includes("vijay"));	
console.log(myArr1.includes("baru"));


//4.Filter an array greater than 10
 
var arr=[10,30,5,60,4,9,12,44,67];

function value(num){
    return num>10;
}
var res=arr.filter(value);
console.log("filter():");
console.log(res);

//5.Check the findindex less then 20

var myArr=[35,9,4,25,3,10,11,13,21];
function findVal(n)
{
	return n<20;
}
var res=myArr.findIndex(findVal);	
console.log(res);