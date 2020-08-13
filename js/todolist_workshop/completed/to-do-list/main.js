document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('li').forEach(function(li){
    li.addEventListener('click', function(e){
      e.target.classList.toggle('checked')
    })
  })

  document.querySelectorAll('.close').forEach(function(span){
    span.addEventListener('click', function(e){
      e.target.parentNode.remove()
    })
  })

  document.querySelector('#addBtn').addEventListener('click', function(e){
    document.querySelector("ul").appendChild(createElement());
  })

  document.querySelectorAll('li').forEach(function(li){
    drag(li)
  })
})

function createElement(){
  let li = document.createElement('li')
  let input = document.querySelector('#input').value
  document.querySelector('#input').value = ''

  let span = document.createElement('span')
  span.appendChild(document.createTextNode('x'))
  span.classList.toggle('close')

  li.appendChild(document.createTextNode(input))
  li.appendChild(span)

  li.addEventListener('click', function(e){
    e.target.classList.toggle('checked')
  })

  span.addEventListener('click', function(e){
    e.target.parentNode.remove()
  })
  drag(li)
  return li
}

function drag(li){
  li.setAttribute('draggable', true)
  li.addEventListener('drag', function(e){
    let selectItem = e.target,
        x = e.clientX,
        y = e.clientY
    let swapItem = document.elementFromPoint(x, y)
    document.querySelector('ul')
    if(selectItem !== swapItem && document.querySelector('ul') === swapItem.parentNode){
      if(selectItem.nextSibling === swapItem){
        selectItem.insertAdjacentElement('beforebegin', swapItem)
      }else{
        selectItem.insertAdjacentElement('afterend', swapItem)
      }
    }
  })
}
