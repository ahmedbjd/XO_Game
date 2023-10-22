var bln=true;
let title = document.querySelector(".title");
let content = document.querySelector(".content");
let table = [];
for (let i = 0; i < 9; i++) {
  table.push(document.getElementById('squar'+i));
}
let tableTest = [[table[0],table[1],table[2]],
[table[0],table[4],table[2]],
[table[0],table[3],table[6]],
[table[1],table[4],table[7]],
[table[2],table[5],table[8]],
[table[3],table[4],table[5]],
[table[2],table[4],table[6]],
[table[6],table[7],table[8]]];
let o = `<h1 class="hh1">o</h1>`;
let x = `<h1 class="hh1">x</h1>`;
function test(player){
    let a=0;
    let score=false;
    while ((a<tableTest.length) && (!score)){
          if(
            (tableTest[a][0].innerHTML==tableTest[a][1].innerHTML) && 
            (tableTest[a][1].innerHTML==tableTest[a][2].innerHTML) && 
            (tableTest[a][2].innerHTML==player)
            ){
             title.innerHTML=`<h1 id="hhh1">${player}   winner</h1>`;
             let score=true;
            return score;
          }
    a++;
 }
}
var i=0;
function fct(id){
    if (bln){
    if (((i%2)==0) && (id.innerHTML=='')){
        id.innerHTML = x;
        title.innerHTML=`<h1>O</h1>`;
       if(test(x)){
        bln=false;
        repeat();
       }else{
            i++;
       }    
    }else if (id.innerHTML==''){
    id.innerHTML = o; 
     title.innerHTML=`<h1>X</h1>`;
     if(test(o)){
        bln=false;
        repeat();
       }else{
            i++;
       }  
    }
    if (i==9){
        title.innerHTML=`<h1>game drawn</h1>`;
        repeat();
    }
}
}
function repeat(){
   content.innerHTML+=`<div class="repeat">
   <p>Do you want to play again:</p>
    <button onclick="repeatClk()" id="repeatBtn">Yes</button>
   </div>`;
}
function repeatClk(){
    window.location.reload();
}