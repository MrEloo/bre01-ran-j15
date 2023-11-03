
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

    let divs = document.querySelectorAll("header > div")
    

    for(let i = 0; i < palette.length; i++){
        divs[i].style.backgroundColor = palette[i]
    }
    return palette
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80",]);
    
    
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
});