// Rest Parameters

function logResults(suitName, ...results){
    console.log(`Suite Name : ${suitName}`);
    console.log(`Results : ${results.join("|")}`);
    
    
}

logResults("AuthState","Pass","Fail","Skip",'Block');

// Suite Name : AuthState
// Results : Pass|Fail|Skip|Block