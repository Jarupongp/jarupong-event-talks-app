document.addEventListener('DOMContentLoaded', () => {
    const scheduleContainer = document.getElementById('schedule-container');
    const searchBar = document.getElementById('search-bar');
    let allTalks = [];

    // Fetch the talks schedule from the API
    fetch('/api/talks')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(error => {
            console.error('Error fetching schedule:', error);
            scheduleContainer.innerHTML = '<p class="error">Failed to load schedule. Please try again later.</p>';
        });

    // Render the schedule dynamically
    function renderSchedule(talks) {
        scheduleContainer.innerHTML = '';

        if (talks.length === 0) {
            scheduleContainer.innerHTML = '<p class="no-results">No talks found matching that category.</p>';
            return;
        }

        talks.forEach(talk => {
            const card = document.createElement('div');
            
            if (talk.isBreak) {
                card.className = 'card break';
                card.innerHTML = `
                    <h3 class="title">${talk.title}</h3>
                    <span class="time">${talk.time}</span>
                `;
            } else {
                card.className = 'card';
                
                // Create tags
                const badges = talk.categories.map(cat => `<span class="badge">${escapeHtml(cat)}</span>`).join('');
                
                card.innerHTML = `
                    <div class="card-header">
                        <span class="time">${escapeHtml(talk.time)}</span>
                        <span class="duration">${escapeHtml(talk.duration)}</span>
                    </div>
                    <h2 class="title">${escapeHtml(talk.title)}</h2>
                    <p class="speakers">By ${escapeHtml(talk.speakers.join(', '))}</p>
                    <p class="description">${escapeHtml(talk.description)}</p>
                    <div class="categories">
                        ${badges}
                    </div>
                `;
            }
            scheduleContainer.appendChild(card);
        });
    }

    // Filter talks by category
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            renderSchedule(allTalks);
            return;
        }

        const filteredTalks = allTalks.filter(talk => {
            // Keep breaks in the schedule, or filter them out if you only want matching talks.
            // Let's filter them out for a cleaner search result.
            if (talk.isBreak) return false;

            return talk.categories.some(category => 
                category.toLowerCase().includes(searchTerm)
            );
        });

        renderSchedule(filteredTalks);
    });

    // Helper function to prevent XSS
    function escapeHtml(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
        );
    }
});
