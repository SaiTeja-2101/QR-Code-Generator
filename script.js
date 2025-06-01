const flash=document.getElementById("click");
const input=document.getElementById("input");
const qrid=document.getElementById("qrid");
const transform=document.getElementById("transform");
flash.addEventListener('click',()=>{
   if(input.value>0){
    generate();
    flash.classList.add('flash');
    transform.classList.add("change");
   }
    // document.getElementsByClassName("input1")[0].style.marginBottom="20px";
    // document.getElementsByClassName("color")[0].style.marginTop="20px";
});
function generate(){
  qrid.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;
}