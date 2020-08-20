// create functionality for the Tip Calculator

//function to do the calculations
const calculateTips = () => {
    const bill = document.getElementById('amount').value;
    const percentage = document.getElementById('percentage').value;
    const people = document.getElementById('people').value;
    const peopleLabel = document.getElementById('peopleLabel')

    let tip = bill * (percentage / 100);
    tip = tip.toFixed(2);

    let share = tip / people;

    if (people == '' || people == null) {
        peopleLabel.textContent = 'How many people?';
        peopleLabel.style.color = ''
        document.getElementById('share').innerHTML = "Your tip!";
        document.getElementById('finalAmount').innerHTML = "$" + tip;
    } else if (people < 1) {
        peopleLabel.textContent = 'Please Enter a valid number of people';
        peopleLabel.style.color = "#f5ed00";
    } else {
        peopleLabel.textContent = 'How many people?'
        peopleLabel.style.color = ''
        document.getElementById('share').innerHTML = "Your Share!";
        document.getElementById('finalAmount').innerHTML = "$" + share;
    }    
}
//event listener to call function upon click
document.getElementById('submit').addEventListener('click', calculateTips);


