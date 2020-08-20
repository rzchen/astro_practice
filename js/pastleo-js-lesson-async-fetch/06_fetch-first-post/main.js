window.addEventListener('DOMContentLoaded', function() {
  fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
  .then(request => request.json())
  .then(posts => {

    // 測試用
    console.log(posts)

    // 拿出第一筆
    const post = posts[0];

    // 把爬到內容塞進 html
    document.querySelector('.post-created-at').textContent = post.created_at;
    document.querySelector('.post-author').textContent = post.author;
    document.querySelector('.post-title').textContent = post.title;
    document.querySelector('.post-description').textContent = post.description;

    const postTitle = document.querySelector('.post-title')

    postTitle.textContent = post.title
    postTitle.href = post.url

    const postLink = document.querySelector('.post-link')

    // 先把 readmore class 內的 hidden 拿掉（顯示）
    postLink.classList.remove('hidden')
    postLink.href = post.url

  })
})
