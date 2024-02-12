var inputPlayer1=document.getElementById("player1");
var inputPlayer2=document.getElementById("player2");
var inputPlayer3=document.getElementById("player3");
var inputPlayer4=document.getElementById("player4");
var ColumnNumber=document.getElementById("carton");

var btnStart=document.getElementById("btnStart")


var inputval1=/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
var inputval2=/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
var inputval3=/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;
var inputval4=/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi;

var input1val=false
var input2val=false
var input3val=false
var input4val=false

inputPlayer1.addEventListener("change",e=>{
    console.log(e.target.value)
    input1val=inputval1.test(e.target.value)
    console.log(input1val);
    validar(inputPlayer1,input1val)
})
inputPlayer2.addEventListener("change",e=>{
    console.log(e.target.value)
    input2val=inputval2.test(e.target.value)
    console.log(input1val);
    validar(inputPlayer1,input1val)

})
inputPlayer3.addEventListener("change",e=>{
    console.log(e.target.value)
    input3val=inputval3.test(e.target.value)
    console.log(input1val);
    validar(inputPlayer1,input1val)

})
inputPlayer4.addEventListener("change",e=>{
    console.log(e.target.value)
    input4val=inputval4.test(e.target.value)
    console.log(input1val);
    validar(inputPlayer1,input1val)

})

function validar(){
    btnStart.disabled=input1val&&input2val&&input3val&&input4val ?false :true
}


var play=[];

console.log(inputPlayer1)

btnStart.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(inputPlayer1.value); 
    var numero = ColumnNumber.value

    
    var players=[
        {
            player1:inputPlayer1.value,
            victories:Number,
            puntajes : Number
        },
        {
            player2:inputPlayer2.value,
            victories:Number,
            puntajes : Number
        },
        {
            player3:inputPlayer3.value,
            victories:Number,
            puntajes : Number
        },
        {
            player4:inputPlayer4.value,
            victories:Number,
            puntajes : Number
        }
        
    ]

    

   /*const playersObj={
        Player1:inputPlayer1.value,
        Player2:inputPlayer2.value,
        Player3:inputPlayer3.value,
        Player4:inputPlayer4.value
        
    }*/

    localStorage.setItem("players",JSON.stringify(players));
    localStorage.setItem("Columnas",JSON.stringify(numero));


    console.log(players);
    //window.location.href="../Html/start.html"


})

