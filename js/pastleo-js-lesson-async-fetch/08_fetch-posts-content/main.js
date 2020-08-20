document.addEventListener('DOMContentLoaded', async () => {
  const postTemplate = document.getElementById('post-template');
  const postContainer = document.getElementById('posts-container');

  const response = await fetch('https://pastleo-posts-api.herokuapp.com/api/posts')
  const posts = await response.json()

  // console.log(posts)

  document.getElementById('init-loading').classList.add('hidden');

      posts.forEach(post => {
        const postDOM = postTemplate.content.cloneNode(true);
        postDOM.querySelector('.post-created-at').textContent = post.created_at;
        postDOM.querySelector('.post-author').textContent = `By ${post.author}`;
        const postTitleA = postDOM.querySelector('a.post-title');
        postTitleA.textContent = post.title;
        postTitleA.href = post.url;
        const descriptionDiv = postDOM.querySelector('.post-description')
        descriptionDiv.textContent = post.description;

        const postLinkA = postDOM.querySelector('.post-link');
        postLinkA.classList.remove('hidden');

        const postContentDiv = postDOM.querySelector('.post-content');

        const showContent = async event => {

          const showResponse = await fetch(post.api_url)
          const postDetails = await showResponse.json()

          postContentDiv.textContent = post.content;
          descriptionDiv.classList.add('hidden');
          postLinkA.classList.add('hidden');

          event.preventDefault();
          postLinkA.textContent = 'Loading...';
        }

        postLinkA.addEventListener('click', showContent);
        postTitleA.addEventListener('click', showContent);

        postContainer.appendChild(postDOM);
      });


});

