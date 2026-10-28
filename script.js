const serverButton = document.getElementById("serverButton");
const dataBase = document.getElementById("dataBase");
const nameInput = document.getElementById("nameInput");
const greetResult = document.getElementById("greetResult");
const greetButton = document.getElementById("greetButton");
const namesButton = document.getElementById("namesButton");
const namesResult = document.getElementById("namesResult");






greetButton.addEventListener("click", function(){
    const name = nameInput.value;

    fetch("http://localhost:3000/greet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then(response => response.json())
    .then(data => {
greetResult.textContent = data.message;
  })
    .catch(error => {
console.log("error", error)    });
});

serverButton.addEventListener("click", function(){
fetch("http://localhost:3000/person")
.then(function(response){
    return response.json();
})
.then(function(data){
    dataBase.textContent =  data.name + " is " + data.age;
})
.catch(function(error){
    dataBase.textContent = "could not reach server";})
}
);

namesButton.addEventListener("click", function(){
    fetch("http://localhost:3000/names") 
.then(function(response){
    return response.json();

})
    .then(function(nameData){
        namesResult.textContent = nameData.join(", ");

    })
    .catch(function(error){
console.log("could not reach server");
    })
});