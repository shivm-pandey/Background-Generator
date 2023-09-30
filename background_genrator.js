let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let b=document.querySelector("b");
    let btn_color=random_color();
    b.innerText=btn_color;
    let body=document.querySelector("body");
   body.style.backgroundColor = btn_color;
 });
 function random_color()
{
  let red=Math.floor(Math.random()*255);
  let green=Math.floor(Math.random()*255);
  let blue=Math.floor(Math.random()*255);
   let color=(`rgb(${red},${green},${blue})`);
  return color;
}
