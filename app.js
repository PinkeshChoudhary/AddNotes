console.log("this is js file");
showNotes();
window.onload = function () {
    document.getElementById("addbtn").addEventListener("click", function () {
        let addTxt = document.getElementById('addTxt');
        console.log(addTxt);
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        notesObj.push(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        console.log(notesObj);
        showNotes();
    });
}
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card"  style="width: 18rem;">
<h5 class="card title">Note ${index + 1}</h5>

<div class="form group">
    <p class="card" id=" addTxt" rows="3"> ${element}</p>
   
</div>
<button id ="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary" id="deletebtn" style = "width: 7rem;">Delete Note</button>

</div>`;
    });

    let notesElm = document.getElementById("notes");
    if (notes.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `nothing to show! "add a note" section above to add notes`;
    }

}

//delete node
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));


    showNotes();
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputval = search.value;
    let card = document.getElementsByClassName("card")
    Array.from(card).forEach(function (element) {
        let cardTxt = document.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {



            element.style.display = "";
        }
        else {
            element.style.display = "none";
        }
        showNotes();
    })
    
})

