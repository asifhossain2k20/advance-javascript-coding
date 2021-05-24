
function stopWatch(){
    let count=1;
    return function(){
        return count++;
    }
}

const clock1=stopWatch();
const clock2=stopWatch();

console.log(clock1());
console.log(clock1());
console.log(clock2());
console.log(clock2());
console.log(clock1());