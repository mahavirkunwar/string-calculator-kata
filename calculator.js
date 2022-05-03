document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", submitHandler);
});

function submitHandler(e) {
    e.preventDefault();
    const inputStringValue = document.getElementById("input-string").value;
    const sum = Add(inputStringValue);
    document.getElementById("result").innerHTML = `Sum is ${sum}`;
}

function Add(str = "") {
    if (str == "") {
        return 0;
    }
    const numbersArr = str.split(",");
    const sum = numbersArr.reduce((count, num) => {
        return (count + Number(num));
    }, 0);
    return sum;
}