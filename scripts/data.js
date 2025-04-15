// Using a Public API (Example: JSONPlaceholder)
export async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        displayPosts(data.slice(0, 15)); // Show first 15 items
    } catch (error) {
        console.error(error);
        document.getElementById('posts-container').innerHTML = 
            `<p class="error">Failed to load data. Please try again later.</p>`;
    }
}

function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    container.innerHTML = posts.map(post => `
        <div class="card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <small>User ID: ${post.userId}</small>
        </div>
    `).join('');
}