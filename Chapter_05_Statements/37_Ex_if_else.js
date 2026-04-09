let isLoggedIn = true;
let userRole  = "Editor";

// Viewer -- limited view
// Editor -- Can edit & View
// Admin -- can do all

if(isLoggedIn){
    if(userRole === "Viewer"){
        console.log(`You are  ${userRole}. You can have only View Access`);
        
    }else if (userRole === "Editor") {
        console.log(`You are  ${userRole}.You can have View & Edit Access`);
        
    }else if(userRole === "Admin"){
        console.log(`You are  ${userRole}.You have all the access rights`);
        
    }else{
        console.log("No specified user role");
        
    }
}