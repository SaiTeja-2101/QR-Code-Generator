const flash = document.getElementById("click");
const input = document.getElementById("input");
const qrid = document.getElementById("qrid");
const transform = document.getElementById("transform");

flash.addEventListener('click', () => {
   if (input.value.trim() !== "") {
      generate();
      flash.classList.add('flash');
      transform.classList.add("change");
   }
});

function generate() {
  qrid.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}
