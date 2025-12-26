import '../../css/aboutus.css';

export function renderAbout() {
    return `
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">About the Department</h1>
            <p class="hero-subtitle">Excellence in Software Engineering Education and Research</p>
        </div>
    </section>

    <!-- Department Overview -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Department Overview</h2>
            </div>

            <div class="two-column">
                <div class="column-text">
                    <h3>Who We Are</h3>
                    <p>
                        The Department of Software Engineering at the Faculty of Computers & Artificial Intelligence is committed to advancing software engineering education and research. Our department serves as a hub of innovation, bringing together world-class faculty, cutting-edge research facilities, and talented students.
                    </p>
                    <p>
                        Established to meet the growing demand for skilled software engineers in the industry, our department has grown to become a leader in software engineering education in the region. We offer comprehensive programs designed to prepare students for successful careers in software development, systems architecture, artificial intelligence, and cybersecurity.
                    </p>
                    <p>
                        Our commitment extends beyond the classroom, fostering industry partnerships, collaborative research, and a vibrant campus community that encourages innovation and intellectual growth.
                    </p>
                </div>
                <div class="column-icon">
                    <i class="fa-solid fa-code"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section bg-light">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Mission & Vision</h2>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                <!-- Mission Card -->
                <div class="info-card">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                        To educate and inspire the next generation of software engineers who will drive innovation and solve complex technological challenges. We are committed to:
                    </p>
                    <ul style="margin-top: 1rem; margin-left: 1.5rem;">
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Providing world-class education in software engineering principles and practices</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Conducting cutting-edge research that advances the field</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Fostering partnerships with industry and academic institutions</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Developing ethical professionals who contribute to society</li>
                    </ul>
                </div>

                <!-- Vision Card -->
                <div class="info-card">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-lightbulb"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>
                        To be a globally recognized leader in software engineering education and research. We envision:
                    </p>
                    <ul style="margin-top: 1rem; margin-left: 1.5rem;">
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">A center of excellence attracting top talent from around the world</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Innovation labs driving technological advancement</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Graduates who are leaders in their fields</li>
                        <li style="list-style-type: disc; margin-bottom: 0.5rem;">Strong impact on industry and society through research and education</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Core Values</h2>
            </div>

            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
                <div class="info-card" style="border-top-color: #3b82f6;">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-graduation-cap"></i>
                    </div>
                    <h3 style="font-size: 1.2rem;">Excellence</h3>
                    <p>We strive for the highest standards in teaching, research, and student outcomes.</p>
                </div>

                <div class="info-card" style="border-top-color: #10b981;">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-handshake"></i>
                    </div>
                    <h3 style="font-size: 1.2rem;">Collaboration</h3>
                    <p>We believe in teamwork and partnership with industry, academia, and our community.</p>
                </div>

                <div class="info-card" style="border-top-color: #f59e0b;">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-rocket"></i>
                    </div>
                    <h3 style="font-size: 1.2rem;">Innovation</h3>
                    <p>We foster creativity and encourage exploring new ideas and technologies.</p>
                </div>

                <div class="info-card" style="border-top-color: #ef4444;">
                    <div class="info-card-icon">
                        <i class="fa-solid fa-scale-balanced"></i>
                    </div>
                    <h3 style="font-size: 1.2rem;">Integrity</h3>
                    <p>We uphold the highest ethical standards in all our endeavors.</p>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initAbout() {
    // Initialize any about page specific functionality
    console.log('About page initialized');
}
