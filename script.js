
//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click',function(){
    const login_area=document.getElementById("login-area");
    login_area.style.display="none";

    const transaction_area=document.getElementById('transaction-area');
    transaction_area.style.display='block';
})

//deposit button handler
const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener('click',function(){
    const depositNumber=getInputNumber('depositAmount');
/*
    const currentDeposit=document.getElementById('currentDeposit').innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=currentDepositNumber+depositNumber;
    
    document.getElementById('currentDeposit').innerText=totalDeposit;
    */
   updateSpanText("currentDeposit",depositNumber);
//balance
   updateSpanText("currentBalance",depositNumber);
   document.getElementById('depositAmount').value=""; 
})


//withdraw button handler
const withdrawbtn=document.getElementById("addWithdraw");
withdrawbtn.addEventListener('click',function(){
    const withdrawNumber=getInputNumber("withdrawAmount");

    updateSpanText('currentWithdraw',withdrawNumber);
    updateSpanText('currentBalance',-1 * withdrawNumber);

    document.getElementById('withdrawAmount').value="";
})

function getInputNumber(id){
    const Amount=document.getElementById(id).value;
    const amountNumber=parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id,depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const totalAmount=depositNumber+currentNumber;
    document.getElementById(id).innerText=totalAmount;

}