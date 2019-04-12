let elText;
function clickMe(event){
    showText(event,"lightgray");
}
const clickMeToo = function(event){
    showText(event,"lightblue");
}
function showText(evt,color){
    elText.innerHTML = `You clicked on button: ${evt.target.innerHTML}`;
    evt.target.setAttribute("style",`background-color:${color}`)
}
window.onload = function(){
    elText = document.getElementById("textButtons");
    elDoc = document.getElementsByTagName("body");
    //alle button elementen ophalen
    const buttons = document.getElementsByTagName('button');
    [...buttons].map((btn)=>{
        //callback koppelen aan click event dmv eventListener
        // switch (btn.id){
        //     case 'b1': 
        //         btn.addEventListener('click',clickMe);
        //         break;
        //     case 'b2': 
        //         btn.addEventListener('click',clickMeToo);
        //         break;
        //     case 'b3': 
        //         btn.addEventListener('click',function(event){showText(event,"lightgreen");});
        //         break;
        //     case 'b4': 
        //         btn.addEventListener('click', event=>{showText(event,"yellow");});
        //         break;
        //     default: elText.innerHTML = "Something went wrong";
        // }
        //callback koppelen aan click event dmv onclick
        switch (btn.id){
            case 'b1': 
                btn.onclick = clickMe;
                break;
            case 'b2': 
                btn.onclick = clickMeToo;
                break;
            case 'b3': 
                btn.onclick = function(event){showText(event,"lightgreen");};
                break;
            case 'b4': 
                btn.onclick = event=>{showText(event,"yellow");};
                break;
            default: 
                elText.innerHTML = "Something went wrong";
        }
    })
}