let inputnumber = document.querySelector('#number')
let colorcontainer = document.querySelector('.colorcontainer')
let btn = document.querySelector('.btn')
let copied = document.querySelector('.copied')

function generate(){
  let hexcodes='0123456789abcdef'
  let hex='#'
  for (let i = 0; i <6; i++) {
  hex+=hexcodes[Math.floor(Math.random()*hexcodes.length)]
  }
  return hex
}

function fillcontainer(){
  colorcontainer.innerHTML='';
  for (let i = 0; i <inputnumber.value ; i++) {
    let colordiv=`
    <div style="--i:${generate()};">
    <p onclick='copyvalue(this);'>${generate()}</p></div>`
    colorcontainer.insertAdjacentHTML('beforeend',colordiv)
  }
}
fillcontainer()
btn.addEventListener('click',fillcontainer)
function copyvalue(e){
  navigator.clipboard.writeText(e.textContent)
  copied.textContent=e.textContent+' is Copied to Clipboard'
  copied.classList.add('active')
  setTimeout(() => {
  copied.classList.remove('active')
  }, 2000);
}