document.addEventListener('DOMContentLoaded', function() {
    loadAttractions();
    showVisitMessage();
});

async function loadAttractions() {
    const grid = document.querySelector('.attractions-grid');
    
    try {
        // Try multiple possible paths
        const pathsToTry = [
            'data/attractions.json', // Try relative path from the root
            '../data/attractions.json', // Parent folder and then 'data'
            './data/attractions.json', // Current folder with 'data'
            'http://127.0.0.1:5500/chamber/data/attractions.json' // Explicit URL for local server
        ];
        
        let response;
        for (const path of pathsToTry) {
            console.log(`Trying path: ${path}`); // For debugging purposes
            try {
                response = await fetch(path);
                if (response.ok) break; // Break out of the loop if the fetch is successful
            } catch (e) {
                console.log(`Tried ${path} - failed`);
            }
        }
        
        if (!response || !response.ok) {
            throw new Error('Could not find attractions.json');
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Response is not JSON');
        }
        
        const attractions = await response.json();
        
        // Clear previous content
        grid.innerHTML = '';
        
        // Build cards for each attraction
        attractions.forEach(attraction => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <h2>${attraction.name}</h2>
                <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                <address>${attraction.address}</address>
                <p>${attraction.description}</p>
                <button>Learn More</button>
            `;
            grid.appendChild(card);
        });
        
    } catch (error) {
        console.error('Error:', error);
        grid.innerHTML = ` 
            <div class="error-message">
                <p>⚠️ Could not load attractions</p>
                <p>${error.message}</p>
            </div>
        `;
    }
}

function showVisitMessage() {
    // Display message or other functionality
    // Add your existing visit message logic here if you have one
}
