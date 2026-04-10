let testScore = 85;

switch(true){
    case (testScore >= 95):
        console.log("OutStanding -- Top Performer");
        break;
    case (testScore >= 85):
        console.log("Excellent -- Above Expectations");
        break;
    case (testScore >= 70):
        console.log("Good -- Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Need Improvement");
        break;
    default:
        console.log("Unsatisfactory -- Needs Training");
        break;
    
}