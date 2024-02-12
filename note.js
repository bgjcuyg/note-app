let inputE1 = document.querySelector('.input');
const btnE1 =document.querySelector(".btn");
const inputContainer = document.querySelector(".input-list");

btnE1.addEventListener("click", function(e){
    let noteItem = inputE1.value;
    if(noteItem){
        const li = document.createElement("li");
        li.textContent = noteItem;
        inputContainer.appendChild(li);
        inputE1.value="";
    }

});
