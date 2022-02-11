
let bill = document.getElementById("bill");
let quality = document.getElementById("quality");
let people = document.getElementById("people");
let out = document.getElementById("output");

function calcTip() {
    console.log("test function calcTip()");

    let a = Number(bill.value);
    let b = Number(people.value);

    console.log(a);
    console.log(b);

    if (quality.value == "1") {
        let x = (a * 0.02);
        console.log(x);
        let y = (a + x);
        console.log(y);
        let z = (y / b);
        console.log(z);
        out.innerHTML = `<p>Suggested tip: ${x}€</p><br>
        <p>Total ampount: ${y}€</p><br>
        <p>Amount per person: ${z}€</p>`

    } else if (quality.value == "2") {
        let x = (a * 0.1);
        console.log(x);
        let y = (a + x);
        console.log(y);
        let z = (y / b);
        console.log(z);
        out.innerHTML = `<p>Suggested tip: ${x}€</p><br>
        <p>Total ampount: ${y}€</p><br>
        <p>Amount per person: ${z}€</p>`

    } else if (quality.value == "3") {
        let x = (a * 0.2);
        console.log(x);
        let y = (a + x);
        console.log(y);
        let z = (y / b);
        console.log(z);
        out.innerHTML = `<p>Suggested tip: ${x}€</p><br>
        <p>Total ampount: ${y}€</p><br>
        <p>Amount per person: ${z}€</p>`

    } else {
        out.innerHTML = `<p>Please value service for a tip suggestion!</p>`
    }
}