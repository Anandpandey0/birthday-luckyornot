const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#checkbtn")

check.addEventListener("click", checkNumberIsLucky);

//Sorry for the comments but it is for my knowledge , so that I can easily go through this code anytime without getting into any truble
function checkNumberIsLucky() {
    // console.log(dateOfBirth.value);
    // console.log(luckyNumber.value)
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    
    // console.log(dob);
    // console.log(sum);
    const result = luckyornot(sum , luckyNumber)
    


}

function calculateSum(dob) {
    dob = dob.replaceAll("-" , "" );
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
function luckyornot(sum , luckyNumber){
    const luckynumber = Number(luckyNumber.value);
    if(luckynumber>0){
        if ((sum%luckynumber) == 0){
            document.getElementById("output").innerHTML = "Yes , It is lucky";
        }
        else{
            document.getElementById("output").innerHTML = "Sorry , It is not lucky ";
        }
    }
    else{
        document.getElementById("output").innerHTML = "Please enter a positive lucky number. ";
    }

   
}