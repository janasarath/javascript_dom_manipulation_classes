function output(){
    let sarath = document.getElementById("myname");
    sarath.textContent = "Richitha";
    sarath.classList.add("maincontainer")
    

    console.log(sarath)

    let recrutar = document.getElementById("mypara");
    recrutar.textContent = "Richita working as a H.r";
    recrutar.classList.add("maincontainer")
    console.log(recrutar)
    
    
}


function input(){
    let bumrah = document.getElementById("myname")
    bumrah.classList.remove("maincontainer")

    let virat = document.getElementById("mypara")
    virat.classList.remove("maincontainer")
}