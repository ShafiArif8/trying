let divlist = document.getElementById('list');
// Inputs
let moviename = document.getElementById('moviename')
let description = document.getElementById('description')
let imgurl = document.getElementById('link')
//empty array
let holdarraystr =JSON.parse(localStorage.getItem("userlister")) || []
// ui holder
let uiholder
let getit
let trash = document.getElementById('trash')
// Button 
let addbtn = document.getElementById('add')
let deletebtn = document.getElementById('delete')
//click count
let clkcount = JSON.parse(localStorage.getItem("clkcount"))||[]
// functionality
addbtn.addEventListener('click', () => {

    if (!moviename.value || !description.value || !imgurl.value) {
        divlist.innerHTML = `<h1 id="error">Please fill all the fields!</h1>`
        setTimeout(() => {
            divlist.innerHTML = ''
        }, 2000);
    }
    else {
        clkcount.push(1)
        localStorage.setItem("clkcount",JSON.stringify(clkcount))
        uiholder = ` <div class="listcon">
        <div class="img">
        <img src="${imgurl.value}" alt="" width="100" height="100"
        referrerpolicy="no-referrer">
        </div>
        <div class="text">
        <h1>${moviename.value}</h1>
        <h5>${description.value}</h5>
        </div>
       <div class="cross"><button class="btn delbtn" onclick="deleted()" value="${clkcount.length-1}"><i class="fa-solid fa-trash"></i></button></div>
        
        </div>
        `
        // pushing in array named holder
        holdarraystr.push(uiholder)
        
        for (let i = 0; i < holdarraystr.length; i++) {
            divlist.innerHTML += holdarraystr[i]
        }
        localStorage.setItem("userlister", JSON.stringify(holdarraystr))
        // moviename.value = ''
        // description.value = ''
        // imgurl.value = ''
    }
})

deletebtn.addEventListener('click', () => {
    if (!localStorage.getItem("userlister")) {
        divlist.innerHTML = `<h1 id="error">nothing to clear</h1>`
        setTimeout(() => {
            divlist.innerHTML = ''
        }, 2000);
    }
    else {
        divlist.innerHTML = ''
        localStorage.removeItem("userlister")
    }
})

function deleted() {
    holdarraystr = JSON.parse(localStorage.getItem("uselister"))
    holdarraystr.splice(trash.value,1)
    localStorage.setItem("userlister", JSON.stringify(holdarraystr))
    clkcount.pop()
    JSON.stringify("clkcount",localStorage.setItem(clkcount))
}