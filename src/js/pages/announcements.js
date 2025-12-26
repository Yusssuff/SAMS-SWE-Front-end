import '../../css/announcements.css';

export function renderAnnouncements() {
    return `
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">Department Announcements</h1>
            <p class="hero-subtitle">Stay updated with the latest news, events, and important notifications</p>
        </div>
    </section>

    <!-- Filter Tabs -->
    <section class="section">
        <div class="container">
            <div class="filter-tabs">
                <button class="filter-tab active" data-filter="all">All Announcements</button>
                <button class="filter-tab" data-filter="academic">Academic</button>
                <button class="filter-tab" data-filter="events">Events</button>
                <button class="filter-tab" data-filter="research">Research</button>
            </div>

            <!-- Announcements Grid -->
            <div class="announcements-grid">
                <!-- Announcement 1 -->
                <div class="announcement-card" data-category="academic">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-academic">Academic</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 20, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">Spring 2026 Registration Opens</h3>
                    <p class="announcement-excerpt">
                        Registration for Spring 2026 semester courses is now open. Students can access the course catalog and register through the student portal.
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Announcement 2 -->
                <div class="announcement-card" data-category="events">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-events">Events</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 18, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">Annual Tech Conference 2026</h3>
                    <p class="announcement-excerpt">
                        Join us for our annual technology conference featuring industry leaders, research presentations, and networking opportunities.
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Announcement 3 -->
                <div class="announcement-card" data-category="research">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-research">Research</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 15, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">New AI Research Lab Inauguration</h3>
                    <p class="announcement-excerpt">
                        We are excited to announce the opening of our new state-of-the-art AI and Machine Learning research laboratory.
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Announcement 4 -->
                <div class="announcement-card" data-category="academic">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-academic">Academic</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 12, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">Midterm Exam Schedule Released</h3>
                    <p class="announcement-excerpt">
                        The midterm examination schedule for the current semester has been published. Please check the student portal for details.
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Announcement 5 -->
                <div class="announcement-card" data-category="events">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-events">Events</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 10, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">Hackathon 2026: Innovation Challenge</h3>
                    <p class="announcement-excerpt">
                        Registration is now open for our annual hackathon. Form your teams and compete for exciting prizes!
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <!-- Announcement 6 -->
                <div class="announcement-card" data-category="research">
                    <div class="announcement-header">
                        <span class="announcement-badge badge-research">Research</span>
                        <span class="announcement-date">
                            <i class="fa-regular fa-calendar"></i> Dec 5, 2025
                        </span>
                    </div>
                    <h3 class="announcement-title">Research Grant Opportunities</h3>
                    <p class="announcement-excerpt">
                        Faculty members and graduate students are invited to apply for research grants in AI, cybersecurity, and software engineering.
                    </p>
                    <div class="announcement-footer">
                        <a href="#" class="announcement-link">Read more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initAnnouncements() {
    // Initialize announcements page specific functionality
    console.log('Announcements page initialized');
    
    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const announcementCards = document.querySelectorAll('.announcement-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const filter = tab.getAttribute('data-filter');
            
            // Update active tab
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Filter announcements
            announcementCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
