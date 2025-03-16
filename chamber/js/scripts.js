// Fetch and display members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error("Failed to fetch members data.");
        }
        const members = await response.json();
        displayMembers(members);
    } catch (error) {
        console.error("Error fetching members:", error);
    }
}

function displayMembers(members) {
    const container = document.getElementById('directory-container');
    if (!container) {
        console.error("Error: Container element not found.");
        return;
    }

    container.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('member-card');

        const img = document.createElement('img');
        img.src = `images/${member.image}`;
        img.alt = member.name;
        img.onerror = function() {
            this.onerror = null;
            this.src = 'images/default.png'; // Fallback image
        };

        card.appendChild(img);
        card.innerHTML += `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        container.appendChild(card);
    });
}

// Toggle between grid and list views
document.getElementById('grid-view')?.addEventListener('click', () => {
    document.getElementById('directory-container')?.classList.add('grid-view');
    document.getElementById('directory-container')?.classList.remove('list-view');
});

document.getElementById('list-view')?.addEventListener('click', () => {
    document.getElementById('directory-container')?.classList.add('list-view');
    document.getElementById('directory-container')?.classList.remove('grid-view');
});

// Footer dynamic content
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Fetch members on page load
fetchMembers();
