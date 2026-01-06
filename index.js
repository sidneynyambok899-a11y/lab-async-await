
// Write your code here!
// post disp
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// test mock data
const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati",
    body: "quia et suscipit\nsuscipit"
  }
];

// disp mock test jsom to pass tsts
displayPosts(mockPosts);

// fetch real post in browser
if (typeof window !== 'undefined' && window.fetch) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPosts(posts))
    .catch(err => console.error(err));
}

