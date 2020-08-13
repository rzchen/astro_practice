// TO DO
window.addEventListener('DOMContentLoaded', function() {

  var ul_select = document.querySelector('ul')


  // check item
  ul_select.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked')
    }
  })

  // delete item
  ul_select.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
      e.target.parentNode.remove()
    }
  })

  // create
  var btn = document.querySelector('.addBtn')

  btn.addEventListener('click', function() {
    var input_value = document.getElementById('input').value
    var create_li = document.createElement('li')
    var parentDiv = document.querySelector('ul')
    var close_span = document.createElement('span')

    if (input_value !== '') {
      // 有值做
      create_li.textContent = input_value
      close_span.classList.add('close')
      close_span.textContent = "x"
      create_li.setAttribute("draggable","true")
      create_li.appendChild(close_span)
      parentDiv.appendChild(create_li)
    }
  })

  // drag
  ul_select.addEventListener('drag', function() {
    
  })

})


// Todo
// 1.可以check li
// 2.刪除 li
// 3.新增 li
// 4.拖拉