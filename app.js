// create functionality for the Tip Calculator

//function to do the calculations
const calculateTips = () => {
    const bill = document.getElementById('amount').value;
    const percentage = document.getElementById('percentage').value;
    const people = document.getElementById('people').value;

    let tip = bill * (percentage / 100);
    tip = tip.toFixed(2);

    let share = tip / people;

    if (people == '' || people == null) {
        document.getElementById('share').innerHTML = "Your tip!";
        document.getElementById('finalAmount').innerHTML = "$" + tip;
    } else {
        document.getElementById('share').innerHTML = "Your Share!";
        document.getElementById('finalAmount').innerHTML = "$" + share;
    }    
}
//event listener to call first function upon click
document.getElementById('submit').addEventListener('click', calculateTips);


