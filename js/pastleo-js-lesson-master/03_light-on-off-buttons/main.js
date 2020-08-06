window.addEventListener('DOMContentLoaded', function() {
  const statusDiv = document.querySelector('.status')
  const statusSpan = document.querySelector('.status span')

  document.getElementById('on').addEventListener('click', function() {
    document.body.classList.add('light')

    statusSpan.textContent = '開'

    statusDiv.classList.remove('off')
    statusDiv.classList.add('on')
  })
  document.getElementById('off').addEventListener('click', function() {
    document.body.classList.remove('light')

    statusSpan.textContent = '關'

    statusDiv.classList.remove('on')
    statusDiv.classList.add('off')
  })
})