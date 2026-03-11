const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){
    let studentName = PARAMS.get("student");
    let orangeNum = PARAMS.get("orangeNum");
    let appleNum = PARAMS.get("appleNum");
    let moneyAmount = PARAMS.get("money");

    let totalCost = (18 * appleNum) + (20 * orangeQNum);
    let changeAmount = moneyAmount - totalCost;

    document.getElementById("greetings").innerText = `Hello, ${student}!`;
    document.getElementById("previousgrade").innerText = `${orangeNum} is the amount of Oranges you ordered.`;
    document.getElementById("tentativegrade").innerText = `${appleNum} is the amount of Apples you ordered.`;
    document.getElementById("finalGrade").innerText = `Your final total is PHP ${totalCost}!`;

    if (moneyAmount < totalCost) {
        document.getElementById("totalprice").innerText = `You do not have enough money.`;
    } else {
        document.getElementById("totalprice").innerText = `${moneyAmount} is your total money.`;
        document.getElementById("change").innerText = `Your change is PHP ${changeAmount}.`;
    }
}
