let str="";
const success=new Audio("success-beep.mp3");
const sound= new Audio('button_click.mp3');
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        supervisor(key);
    } else if (key === '+' || key === '-' || key === '/' || key === '*' || key === '%' || key === '.') {
        supervisor(key);
    } else if (key === 'Enter') {
        supervisor('=');
    } else if (key === 'Backspace') {
        supervisor('Back_SP');
    }
});
function supervisor(x){
    if(x!='=') sound.play();
    if(str=='Re-enter values..') str="";
    if((x>='0' && x<='9')|| x=='00') {
        str+=x;
    }
    else if(x=='+' || x=='-' || x=='/' ||x=='*' || x=='%' || x=='.'){
        str+=x;
        
    } 
    displayValue(str);    //calling display function
    if(x=='CLEAR')  clearoutput();   //clearoutput function
    else if(x=='=') {
        success.play();
        calculate_output(str);
        str="";
    }
    else if(x=='Back_SP') backSpace();
}
function displayValue(x){
    let a=document.getElementById('output');
    a.innerHTML=x;
}
function clearoutput(){
    let a=document.getElementById("output");
    //a.innerHTML="";
    str="Re-enter values..";
    displayValue(str);
}
// function calculate_output(str){
//     if(str!=""){
//         let a =eval(str);
//         displayValue(a);
//     }
    
// }
function calculate_output(str){
    try {
        let a =eval(str);
        displayValue(a);
    } catch (error) {
        str="";
        displayValue("Invalid input");
    }
}
function backSpace(){
    str=str.slice(0,str.length-1);
    displayValue(str);
}