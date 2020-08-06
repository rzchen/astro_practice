$(document).ready(function() {
  let cnt = 0, running = false, intervel
  $('button').click(function() {
    if (running) {
      $('#running').slideUp()
      $('button').text('start')
      running = false
      clearInterval(interval)
    } else {
      $('#running').slideDown()
      $('button').text('stop')
      running = true
      interval = setInterval(function() {
        cnt = cnt + 1
        $('.dots > div:last-child').prependTo($('.dots'))
        $('#seconds').text(Math.floor(cnt / 10))
      }, 100)
    }
  })
})
