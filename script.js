document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts-container');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Dummy posts data
    const posts = [
        {
            id: '1',
            title: 'AIMS-DTU Recruitment',
            description: 'Advancing AI/ML through innovation and research',
            image: 'aims.jpg',
            startDate: '2024-07-01',
            deadline: '2024-07-15',
            applyLink: 'https://apply.aims-dtu.com'
        },
        {
            id: '2',
            title: 'AUV-DTU Recruitment',
            description: 'Engineering excellence in autonomous underwater exploration',
            image: 'auv.jpg',
            startDate: '2024-07-05',
            deadline: '2024-07-20',
            applyLink: 'https://apply.auv-dtu.com'
        },
        {
            id: '3',
            title: 'ROTARACT Recruitment',
            description: 'Empowering youth through leadership and service',
            image: 'ROT.jpg',
            startDate: '2024-07-10',
            deadline: '2024-07-25',
            applyLink: 'https://apply.rotaract.com'
        },
    ];

    function displayPosts(filteredPosts) {
        postsContainer.innerHTML = '';
        filteredPosts.forEach(post => {
            const postElement = document.createElement('a');
            postElement.className = 'post';
            postElement.href = `detail.html?id=${post.id}`;
            postElement.innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="dates">
                    <p>Start Date: ${post.startDate}</p>
                    <p>Deadline: ${post.deadline}</p>
                </div>
                <div class="apply-link">
                    <a href="${post.applyLink}" target="_blank">Apply Here</a>
                </div>
                <button onclick="notify('${post.title}', '${post.startDate}', '${post.deadline}')">Notify Me</button>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    displayPosts(posts);

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query));
        displayPosts(filteredPosts);
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });
});

function notify(title, startDate, deadline) {
    alert(`You will be notified about ${title}.\nStart Date: ${startDate}\nDeadline: ${deadline}`);
}
