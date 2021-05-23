const student=[
    {id:1,name:"Alif"},
    {id:2,name:"Kamal"},
    {id:3,name:"Akash"}
]
// const arr=[];
// for(let i=0;i<student.length;i++){
//     const n=student[i].name;
//     arr.push(n);
// }

// console.log(arr);

const ids=student.map(s=>s.id);
const names=student.map(n=>n.name);

console.log(ids);
console.log(names);

const f=student.filter(s => s.id>1);;
console.log(f);

const ff=student.find(s=>s.id>2);
console.log(ff);

