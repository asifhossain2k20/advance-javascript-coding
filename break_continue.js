const arr=[10,20,30,40,50];

for(let i=0;i<arr.length;i++){
    if(arr[i]>30){
        break;  //break the program
    }
    console.log(arr[i]);
}


const arr2=[10,20,-2,40,-1,50];
for(let i=0;i<arr2.length;i++){
    if(arr2[i]<0){
        continue; //skip condition
    }
    console.log(arr2[i]);
}
