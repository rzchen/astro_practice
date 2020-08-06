window.addEventListener('DOMContentLoaded', function() {
  let cnt = 0, running = false, intervel, parentDiv, lastDiv
  document.querySelector('button').addEventListener('click', function() {
    if (running) {
      document.getElementById('running').style.display="none"
      document.querySelector('button').textContent = 'start'
      running = false
      clearInterval(interval)
    } else {
      document.getElementById('running').style.display="block"
      document.querySelector('button').textContent = 'stop'
      running = true
      interval = setInterval(function() {
        cnt = cnt + 1
        parentDiv = document.querySelector('.dots')
        lastDiv = document.querySelector('.dots > div:last-child')
        
        parentDiv.insertBefore(lastDiv, parentDiv.firstChild)
        
        document.getElementById('seconds').textContent = Math.floor(cnt / 10)
      }, 100)
    }
  })
})