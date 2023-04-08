let rand= document.getElementById('rand')
let out=document.getElementById('out')
let b1=document.getElementById('bu1')
let b2=document.getElementById('bu2')

function f1(){
  let b1= +but1.value
  let b2= +but2.value
  out.innerHTML = Math.floor(Math.random()*(b2-b1+1)+b1)
}
rand.onclick = f1
