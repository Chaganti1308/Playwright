// with function

function StatusCheck(score){
    const res = score > 50 ? "Pass" : "Fail";
    console.log(res);
}

StatusCheck(60);
StatusCheck(40);
StatusCheck(50);
StatusCheck(80);