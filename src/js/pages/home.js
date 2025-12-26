import '../../css/test2.css';

export function renderHome() {
    return `
    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-bg"></div>
        <div class="hero-pattern"></div>
        <div class="container hero-content">
            <span class="hero-tag">Department of Software Engineering</span>
            <h1 class="hero-title">Advancing the Science of <br>Intelligent Systems</h1>
            <p class="hero-subtitle">
                We prepare the next generation of software architects and researchers through rigorous academic programs and industry-aligned research initiatives.
            </p>
            <div class="flex justify-center gap-4">
                <a href="#apply" class="btn btn-primary">Undergraduate Admissions</a>
                <a href="#grad" class="btn btn-outline" style="color:white; border-color:white;">Graduate Studies</a>
            </div>
        </div>
    </header>

    <!-- Stats Bar -->
    <div class="stats-bar">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">#1</div>
                    <div class="stat-label">Regional Ranking</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">45+</div>
                    <div class="stat-label">Research Labs</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">120</div>
                    <div class="stat-label">Faculty Members</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">98%</div>
                    <div class="stat-label">Career Placement</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Career Paths in Software Engineering -->
    <section id="academics" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Software Engineering Career Paths</h2>
                <p class="section-desc">Explore diverse career opportunities with competitive salary packages in the Software Engineering Department</p>
            </div>

            <div class="grid-3">
                <!-- Full Stack Developer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-code-branch"></i></div>
                    <h3 class="card-title">Full Stack Developer</h3>
                    <p class="card-text">Build complete web applications with modern technologies across frontend and backend. Master system integration and API development.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$65,000 - $85,000</p>
                    </div>
                </div>

                <!-- Backend Engineer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-database"></i></div>
                    <h3 class="card-title">Backend Engineer</h3>
                    <p class="card-text">Design robust server-side applications, manage databases, and build scalable infrastructure for enterprise solutions.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$70,000 - $90,000</p>
                    </div>
                </div>

                <!-- Frontend Developer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-laptop"></i></div>
                    <h3 class="card-title">Frontend Developer</h3>
                    <p class="card-text">Create engaging user interfaces and responsive designs using modern frameworks and UX principles.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$60,000 - $80,000</p>
                    </div>
                </div>

                <!-- Security Engineer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-shield-halved"></i></div>
                    <h3 class="card-title">Security Engineer</h3>
                    <p class="card-text">Protect applications and systems from vulnerabilities, implement security protocols, and conduct threat assessments.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$75,000 - $95,000</p>
                    </div>
                </div>

                <!-- Machine Learning Engineer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-brain"></i></div>
                    <h3 class="card-title">Machine Learning Engineer</h3>
                    <p class="card-text">Develop intelligent systems using deep learning, neural networks, and advanced AI techniques for real-world applications.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$80,000 - $110,000</p>
                    </div>
                </div>

                <!-- DevOps Engineer -->
                <div class="dept-card">
                    <div class="card-icon"><i class="fa-solid fa-gears"></i></div>
                    <h3 class="card-title">DevOps Engineer</h3>
                    <p class="card-text">Streamline development and operations through CI/CD pipelines, cloud infrastructure management, and automation.</p>
                    <div style="margin: 1rem 0; padding: 1rem; background: var(--brand-50); border-radius: 8px; text-align: center;">
                        <p style="font-size: 0.9rem; color: var(--slate-600); margin-bottom: 0.3rem;">Starting Salary</p>
                        <p style="font-size: 1.5rem; font-weight: 700; color: var(--brand-600);">$72,000 - $92,000</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- People Section -->
    <section id="people" class="section bg-light">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Faculty</h2>
                <p class="section-desc">Meet our distinguished professors and researchers</p>
            </div>

            <div class="people-grid">
                <div class="person-card">
                    <div class="person-image">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <h3>Dr. Ahmed Hassan</h3>
                    <p class="person-title">Department Head</p>
                    <p class="person-bio">Ph.D. in Computer Science, specializing in AI and Machine Learning</p>
                    <div class="person-links">
                        <a href="#" title="Email"><i class="fa-solid fa-envelope"></i></a>
                        <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" title="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>
                    </div>
                </div>

                <div class="person-card">
                    <div class="person-image">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <h3>Dr. Fatma Mohamed</h3>
                    <p class="person-title">Associate Professor</p>
                    <p class="person-bio">Expert in Software Engineering and Agile Methodologies</p>
                    <div class="person-links">
                        <a href="#" title="Email"><i class="fa-solid fa-envelope"></i></a>
                        <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" title="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>
                    </div>
                </div>

                <div class="person-card">
                    <div class="person-image">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <h3>Dr. Khaled Ibrahim</h3>
                    <p class="person-title">Assistant Professor</p>
                    <p class="person-bio">Cybersecurity and Network Security Specialist</p>
                    <div class="person-links">
                        <a href="#" title="Email"><i class="fa-solid fa-envelope"></i></a>
                        <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" title="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>
                    </div>
                </div>

                <div class="person-card">
                    <div class="person-image">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <h3>Dr. Mona Ali</h3>
                    <p class="person-title">Assistant Professor</p>
                    <p class="person-bio">Data Science and Big Data Analytics Expert</p>
                    <div class="person-links">
                        <a href="#" title="Email"><i class="fa-solid fa-envelope"></i></a>
                        <a href="#" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" title="Google Scholar"><i class="fa-solid fa-graduation-cap"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export function initHome() {
    // Initialize any home page specific functionality
    console.log('Home page initialized');
}
