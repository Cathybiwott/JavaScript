//Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
var z=arr1.slice(-1);
console.log(z);


arr2 = [true, "green", "where",12,56]
var d=arr2.slice(-1);
console.log(d)

//Write a JS program that will join the following array of elements into a string
myPets=["Cow","Birds","Snake","Dog"]
const mammals=["Cow","Birds","Snake","Dog"]
console.log(mammals.join(''));

//Write a JS script to sort the following array of items
var arrnumbers=[-5,9,5,3,2,-3,6,8,4,1]
const numbers=[-5,9,5,3,2,-3,6,8,4,1]
console.log(numbers.sort())

//Write a program to remove duplicates from the following array.console the array without duplicate and console another array that only contains the duplicates
var arr=["apple","mango","apple",
       "orange","mango","mango"];
function removeDuplicates(arr){
return arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(removeDuplicates(arr));

function Duplicates(arr){
    return arr.filter((item,index)=>arr.indexOf(item)!==index);
}
console.log(Duplicates(arr));


//Write a script to search the word "way" in the array.If the word is present,console it else console"the search word was not found"
let arr6=["the","way","x",4]
if(arr6=>"way"){
    console.log("way");
}
else{
    console.log("the search word was not found")
}

//Write a script to sort the following word
//let word="sevink"
let textString=(string) =>{
    return string.split("").sort().join("")
}
console.log(textString("sevink"))