window.addEventListener('DOMContentLoaded', function() {
  let cnt = 0, running = false, intervel, parentDiv, lastDiv
  document.querySelector('button').addEventListener('click', function() {
    if (running) {
      document.querySelector('button').textContent = 'start'
      document.getElementById('running').style.height = '0px';
      running = false
      clearInterval(interval)
    } else {
      document.querySelector('button').textContent = 'stop'
      document.getElementById('running').style.height = '40px';
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