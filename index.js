const formElement = document.getElementById("form");
const answerElement = document.getElementById("answer");

formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    console.log(firstName);
    loadAge();
});

async function loadAge(firstName) {
    const res = await fetch (`https://api.agify.io/?name=${firstName}`);
    const obj = await res.json();
    console.log(obj);
    const {name, age} = obj;
    console.log(name);
    console.log(age);
    answerElement.textContent = `name: ${name} age: ${age}`;
}