var btn = document.getElementById("btn");
var inputs = document.getElementById("content");
var outputs = document.getElementById("result");
var span = document.getElementById("span")
btn.addEventListener("click", function(){

    let text = inputs.value;
    let newdev= document.createElement("div")
    let updateBtn = document.createElement("button")
    updateBtn.textContent= "update";
    let deletBtn= document.createElement("button");
    deletBtn.textContent = "delete";
    let paragraph = document.createElement("p");
    
   
    if (text ==""){

       inputs.classList.toggle("wroning");
       span.style.display = "block";
    }
    else if (text){
        paragraph.innerText= text;
        newdev.appendChild(paragraph);
        newdev.appendChild(updateBtn);
        newdev.appendChild(deletBtn);
        outputs.appendChild(newdev);
    }

    deletBtn.onclick = function(){
        newdev.remove();
    }
    updateBtn.onclick= function(){
       
    }

    inputs.value = "";
});

