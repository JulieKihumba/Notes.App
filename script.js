const notesContainer = document.querySelector(".notes-container");
/*const notesContainer:
This line declares a constant variable named notesContainer.
It will hold a reference to an HTML element (in this case, a container for notes).
*/

/*document.querySelector(".notes-container"):
Is used to select an HTML element from the DOM (Document Object Model).
In this case, it searches for an element with the class name "notes-container".
The period (.) before "notes-container" indicates that we are selecting an element by its class name.
If found, the method returns the first matching element; otherwise, it returns null.
 */

/*Purpose:
The purpose of this line is to retrieve the notes container  from the HTML document.
Once we have a reference to this container, we can manipulate it
*/
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");//Selectes all the notes

//HERE WE HAVE CREATE 3 VARIABLES:
//  (1) notesContainer => constant variable for notes-container class name 
//  (1) createBtn => constant variable for btn class name 
//  (1) notes => for input-box class name which is currently not there bcoz we have commented it but we will retrieve it using JavaScript code


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes()


//Now let us add the local storage that will store the notes in our browser.
//Everytime we will open our browser it will be stored and displayed as it is.
function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", ()=>{   
//Here, we have added createBtn,addEventListener. It means,whenever we click on the button(btn), it will execute the following code:

    let inputBox= document.createElement("p");
//CREATES VARIABLE CALLED inputBox AND IT WILL STORE 1 ELEMENT, documen.createElement BY <p>
//SO, WE WILL CREATE ONE <p> ELEMENT AND IT WILL STORE IT AS inputBox

    let img=  document.createElement("img");
//WE HAVE CREATE ANOTHER ELEMENT WITH THE <img> TAG AND IT WILL STORE AS img

    inputBox.className= "input-box";
//THE <p> ELEMENT WHICH IS inputBox, IT WILL ADD 1 CLASS NAME CALLED input-box

    inputBox.setAttribute("contenteditable", "true");
//IN THE <p> ELEMENT WHICH IS THE inputBox, WE ADD 1 MORE THING WHICH IS "contenteditable", "true"
//WE HAVE SET THE ATTRIBUTE OF THE inputBox, WHICH IS "contenteditable", "true"

    img.src= "images/delete.png";
//E HAVE CREATED 1 MORE ELEMENT <img> AND IN THE src, WE HAVE ADDED THE FILE PATHFOR THE DELETE ICON

    notesContainer.appendChild(inputBox).appendChild(img);
//DISPLAYS THE inputBox AND img INSIDE THE notesContainer
})

//Now lets add the delete functionality
notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName ==="IMG"){
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName ==="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onekeyup = function(){
                updateStorage();
            }
        })
    }
})
//SO, I HAVE ADDED notesContainer, EVENT LISTENER, CLICK. SO WHEN WE CLICK WITHIN THIS notesContainer, AND IF THE TARGET ELEMENT IS IMG, THEN IT WILL REMOVE THE PARENT ELEMENT


document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
