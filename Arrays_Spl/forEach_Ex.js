let names = ["NC","NCC","MVRC","CH"];

names.forEach((name,index) => {
    console.log(`${index} ---> ${name}`);
    
})

// custom forEach


// function customForEach(arr,cb){
//     for(let i =0; i < arr.length; i++){
//         cb(arr[i],i)
//     }
// }

// customForEach(["NC","NCC","MVRC","CH","MNC","CC"],(element,index) =>{
//     console.log(`${index} ---> ${element}`);

// })