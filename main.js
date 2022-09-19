var boxDiv = document.getElementById("box");
const noteToShow = document.getElementById("textNote");
const br = document.createElement("br");
const pTag = document.createElement("p");
const myFunction = () => {
    if(noteToShow.value){
        console.log('btn was clicked');
        console.log(noteToShow.value);
        pTag.innerText = `note: ${noteToShow.value}`;
        pTag.append(br);
        boxDiv.append(pTag);
        noteToShow.value = "";
    } else {
        alert("textbox must not be empty!");
    }
};
