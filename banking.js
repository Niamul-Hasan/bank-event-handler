//get value from input field when you click on any button
function getInput(input) {
    const inputAmount = document.getElementById(input);
    const inputAmountText = inputAmount.value;
    const Amount = parseFloat(inputAmountText);
    //clear deposit input field
    inputAmount.value = "";
    return Amount;
}
// deposit and withdraw dashboard is updating here
function getTotal(total, amount) {
    const Totoal = document.getElementById(total);
    const previousTotalText = Totoal.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const currentTotal = amount + previousTotal;
    Totoal.innerText = currentTotal;
}

//balance updating double function code

function getCurrentBalance() {
    const balanceUpdate = document.getElementById('balance');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance; //getting current balance value from here
}
//updating balance 
function getBalanceTotal(inputAmount, isAdd) {
    const balanceUpdate = document.getElementById('balance');
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        const currentBalance = previousBalance + inputAmount;
        balanceUpdate.innerText = currentBalance;
    }
    else {
        const currentBalance = previousBalance - inputAmount;
        balanceUpdate.innerText = currentBalance;
    }
}



// deposit button handler
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInput('input-deposit');
    //Update deposit total with error handler
    if (depositAmount > 0) {
        getTotal('deposit-total', depositAmount);
        getBalanceTotal(depositAmount, true);
    }

})

//withdraw button handler
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInput('input-withdraw')
    //Update withdraw total with error handler
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount <= currentBalance) {
        getTotal('withdraw-total', withdrawAmount);
        getBalanceTotal(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        document.getElementById('error-check').innerText = "YOUR BALANCE IS LOWER THAN YOUR DEMAND";
    }
    //optional Advanced error handler by myself...it is my self practice with js but it is not recognised process...
    document.getElementById('input-withdraw').addEventListener('focus', function () {
        const error = document.getElementById('error-check');
        error.innerText = 'Please Withdraw';
    });
})

