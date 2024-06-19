document.addEventListener('DOMContentLoaded', function() {
    const societyDetails = document.getElementById('society-details');

    // Dummy data for the detail page
    const societies = [
        {
            id: '1',
            title: 'AIMS-DTU Recruitment',
            description: 'We are DTUs AI/ML society, excelling in competitions like the Smart India Hackathon. Our passionate team advances AI/ML, robotics, and drones through research, innovation, and continuous learning. Join us in shaping the future.',
            image: 'aims.jpg',
            startDate: '2024-07-01',
            deadline: '2024-07-15',
            applyLink: 'https://apply.aims-dtu.com'
        },
        {
            id: '2',
            title: 'AUV-DTU Recruitment',
            description: 'DTU AUV, created by Delhi Technological University students, is an industrial-grade Autonomous Underwater Vehicle competing in RoboSub. It showcases research in engineering fields for shallow water tasks with and without human aid.',
            image: 'auv.jpg',
            startDate: '2024-07-05',
            deadline: '2024-07-20',
            applyLink: 'https://apply.auv-dtu.com'
        },
        {
            id: '3',
            title: 'ROTARACT Recruitment',
            description: 'The Rotaract Club of DTU Regency fosters leadership and community service among young adults. Part of Rotary International, it promotes personal development, ethical standards, and global friendship through various initiatives.',
            image:'ROT.jpg',
            startDate: '2024-07-10',
            deadline: '2024-07-25',
            applyLink: 'https://apply.rotaract.com'
        },
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const societyId = urlParams.get('id');
    const society = societies.find(society => society.id === societyId);

    if (society) {
        societyDetails.innerHTML = `
            <img src="${society.image}" alt="${society.title}">
            <h1>${society.title}</h1>
            <p>${society.description}</p>
            <div class="dates">
                <p>Start Date: ${society.startDate}</p>
                <p>Deadline: ${society.deadline}</p>
            </div>
            <div class="apply-link">
                <a href="${society.applyLink}" target="_blank">Apply Here</a>
            </div>
            <button onclick="notify('${society.title}', '${society.startDate}', '${society.deadline}')">Notify Me</button>
        `;
    } else {
        societyDetails.innerHTML = '<p>Society not found.</p>';
    }
});

function notify(title, startDate, deadline) {
    alert(`You will be notified about ${title}.\nStart Date: ${startDate}\nDeadline: ${deadline}`);
}
