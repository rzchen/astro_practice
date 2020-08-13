function addCircle(){
  let div = document.createElement('div')
  div.classList.add("circle")
  return div
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('button').addEventListener('click', function(){
    document.querySelector('.box').insertAdjacentElement('beforeend', addCircle())
  })
})
