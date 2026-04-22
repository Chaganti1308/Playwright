let arr = [1,2,3,4,5,6,7];

let res = arr.map(element =>{
    console.log("Element is : ", element);
    return element*element;
    
});

console.log("Original Array : ",arr);

console.log("Modified Array : ",res);


const products = [
    {id : 1, productName : "Iphone", productPrice : 1000},
    {id : 2, productName : "Macbook", productPrice : 2000},
    {id : 3, productName : "Ipad", productPrice : 500},

];

console.log("Products original Array :",products);

const modifiedProducts = products.map((product) =>{
    return ({id:product.id, productName : product.productName});
   
});

console.log("Modifird Products array :",modifiedProducts);

