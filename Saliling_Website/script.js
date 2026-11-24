// ======================
// TAB FUNCTION
// ======================
 
function showTab(tabId) {
 
let tabs =
document.querySelectorAll(".tab-content");
 
tabs.forEach(tab => {
tab.classList.remove("active");
});
 
document
.getElementById(tabId)
.classList.add("active");
}
 
// ======================
// ASSIGNMENT 1
// ======================
 
function convert() {
 
let value =
parseFloat(
document.getElementById("convValue").value
);
 
let type =
document.getElementById("conversionType").value;
 
let result;
 
switch(type){
 
case "ctof":
result = (value * 9/5) + 32;
document.getElementById(
"conversionResult"
).innerHTML =
`${result.toFixed(2)} °F`;
break;
 
case "ftoc":
result = (value - 32) * 5/9;
document.getElementById(
"conversionResult"
).innerHTML =
`${result.toFixed(2)} °C`;
break;
 
case "mtof":
result = value * 3.28084;
document.getElementById(
"conversionResult"
).innerHTML =
`${result.toFixed(2)} Feet`;
break;
 
case "ftom":
result = value / 3.28084;
document.getElementById(
"conversionResult"
).innerHTML =
`${result.toFixed(2)} Meters`;
break;
}
}
 
// ======================
// ASSIGNMENT 2
// ======================
function calculateTax() {
    let income = parseFloat(document.getElementById("income").value);

    if (isNaN(income) || income < 0) {
        document.getElementById("taxResult").innerHTML =
            "Please enter a valid income.";
        return;
    }

    let tax;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = (income - 250000) * 0.20;
    } else if (income <= 800000) {
        tax = 30000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        tax = 130000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        tax = 490000 + (income - 2000000) * 0.32;
    } else {
        tax = 2410000 + (income - 8000000) * 0.35;
    }

    document.getElementById("taxResult").innerHTML =
        "Income Tax: ₱" + tax.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
}
// ======================
// ASSIGNMENT 3
// ======================
function calculateNumbers() {

    let n = parseInt(document.getElementById("nValue").value);

    if (isNaN(n) || n < 1) {
        alert("Please enter a positive integer.");
        return;
    }

    // Factorial using While Loop
    let factorial = 1;
    let i = 1;

    while (i <= n) {
        factorial *= i;
        i++;
    }

    // Sum using Do While Loop
    let sum = 0;
    let j = 1;

    do {
        sum += j;
        j++;
    } while (j <= n);

    // Average using For Loop
    let total = 0;

    for (let k = 1; k <= n; k++) {
        total += k;
    }

    let average = total / n;

    document.getElementById("factorialResult").innerHTML =
        `Factorial = ${factorial}`;

    document.getElementById("sumResult").innerHTML =
        `Sum = ${sum}`;

    document.getElementById("averageResult").innerHTML =
        `Average = ${average.toFixed(2)}`;
}
// ======================
// ASSIGNMENT 4
// ======================
 
let payrollList = [];
 
function addEmployee(){
 
let name =
document.getElementById("empName").value;
 
let daysWorked =
parseFloat(
document.getElementById("daysWorked").value
);
 
let dailyRate =
parseFloat(
document.getElementById("dailyRate").value
);
 
let deduction =
parseFloat(
document.getElementById("deductionAmount").value
);
 
let grossPay =
daysWorked * dailyRate;
 
let netPay =
grossPay - deduction;
 
payrollList.push({
name,
daysWorked,
dailyRate,
grossPay,
deduction,
netPay
});
 
displayPayroll();
}
 
function deleteEmployee(){
 
let lineNumber =
parseInt(
document.getElementById("deleteNumber").value
);
 
if(
lineNumber >= 1 &&
lineNumber <= payrollList.length
){
payrollList.splice(
lineNumber - 1,
1
);
}
 
displayPayroll();
}
 
function displayPayroll(){
 
let tableBody =
document.getElementById("payrollBody");
 
tableBody.innerHTML = "";
 
for(
let i = 0;
i < payrollList.length;
i++
){
 
tableBody.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${payrollList[i].name}</td>
<td>${payrollList[i].daysWorked}</td>
<td>${payrollList[i].dailyRate}</td>
<td>${payrollList[i].grossPay.toFixed(2)}</td>
<td>${payrollList[i].deduction.toFixed(2)}</td>
<td>${payrollList[i].netPay.toFixed(2)}</td>
</tr>
`;
}
}