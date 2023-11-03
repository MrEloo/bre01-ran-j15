
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

    
    

    for(let i = 0; i < palette.length; i++){
        let header = document.querySelector("header")
        let div = document.createElement("div")
        let input = document.createElement("input")
        input.type = "color"
        input.id = `color-input-${i}`
        div.style.backgroundColor = palette[i]
        
        header.appendChild(div)
        div.appendChild(input)
        
        input.addEventListener("input", (e)=>{
            let selectedColor = e.target.value
            div.style.backgroundColor = selectedColor
        })
        
        
    }
    
    return palette
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#A4B494", "#BEC5AD", "#3B5249", "#519872", "#34252F", "#5C0029", "#61304B", "#857C8D"]);
    
    
    let divs = document.querySelectorAll("header > div")
    console.log(divs)
    for(let i = 0; i < divs.length; i++){
         divs[i].addEventListener("click", selectColor);
    }
;
    
        

   


    let main = document.querySelectorAll("main > div > div")
    console.log(main)
    
    for(let i = 0; i < main.length ; i++){
            main[i].addEventListener("click", ()=>{
            let color = getSelectedColor(); 
            if(main[i].style.backgroundColor){
                main[i].style.backgroundColor = ""
            } else {
                main[i].style.backgroundColor = color
                
            }
    })
    }
    
           
        let bodyMain = document.querySelector("body > main")
        let MainDiv = document.querySelector("main > div")
        let vraiMain = document.querySelector("main")
        
        
        let row =  parseInt(prompt("Veuillez choisir un nombre de ligne : "))
        let col =  parseInt(prompt("Veuillez choisir un nombre de colonne : "))
        

        
        for(let i = 0; i < row ; i++){
            let divRow = document.createElement("div")
            divRow.id = `row-${i}`

            for(let j = 0; j < col; j++){
              let divCol = document.createElement("div") 
              divCol.id = `col-${j}`
              divRow.appendChild(divCol)
              
        
            divCol.addEventListener("click", ()=>{
                let color = getSelectedColor(); 
                if(divCol.style.backgroundColor){
                    divCol.style.backgroundColor = ""
                }else {
                    divCol.style.backgroundColor = color
                }
            })
            }
            vraiMain.appendChild(divRow)
        }
        
        
        // // document.body.style.gridTemplateRows = `1fr, ${row}fr`
        // // bodyMain.style.gridTemplateRows = `repeat(${row}, 1fr)`
        // // MainDiv.style.gridTemplateColumns = `repeat(${col}, 1fr)`      
        
        
});