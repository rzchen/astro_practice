window.addEventListener('DOMContentLoaded', function() {
  document.getElementById('create-element').addEventListener('click', function() {
    const timeDiv = document.createElement('div')

    timeDiv.className = 'time'
    const currentTime = new Date()
    timeDiv.textContent = currentTime.toString()

    document.querySelector('.right').appendChild(timeDiv)
    // debugger
  })
  
  document.getElementById('reset-inner-html').addEventListener('click', function() {
    document.querySelector('.right').innerHTML = '<div class="title">DOM practice...</div>'
  })

  document.getElementById('remove').addEventListener('click', function() {
    const lastTime = document.querySelector('.right .time:last-child')

    if (lastTime) {
      document.querySelector('.right .time:last-child').remove()
    }
  })

  document.getElementById('create-element-insert-adjacent').addEventListener('click', function() {
    const timeDiv = document.createElement('div')

    timeDiv.className = 'time'
    const currentTime = new Date()
    timeDiv.textContent = currentTime.toString()

    document.querySelector('.title').insertAdjacentElement('afterend', timeDiv)
    // debugger
  })
})