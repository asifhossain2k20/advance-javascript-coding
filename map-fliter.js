


const nums=[1,2,3,4,5,6,7,8,9];

nums.map(function(element,index,array){
    console.log(element , index, array);
})



const numbers=[10,20,30,40,50];

const doubleIt=numbers.map(x=> x*x);
console.log(doubleIt);


const f=numbers.filter( x=> x<20);
console.log(f);

const ff=numbers.find(x=> x>30);
console.log(ff);