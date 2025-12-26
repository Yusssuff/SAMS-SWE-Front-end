import '../../css/study-plan.css';

export function renderStudyPlan() {
    return `
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">Two-Year Study Plan</h1>
            <p class="hero-subtitle">Recommended sequence of courses for Software Engineering students over two academic years</p>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Year 1</h2>
                <p class="section-desc">Build strong foundations in programming, systems, and engineering practices.</p>
            </div>

            <div class="plan-grid">
                <div class="term-card">
                    <div class="term-header">
                        <span class="badge">Semester 1</span>
                        <span class="term-title"><i class="fa-solid fa-seedling"></i> Foundations</span>
                    </div>
                    <div class="course-list">
                        <div class="course-item">
                            <span class="course-code">SE101</span>
                            <span class="course-name">Intro to Software Engineering</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Principles, process models, and collaboration</span>
                            <span class="course-prereq"><b>Prereq:</b> None</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE120</span>
                            <span class="course-name">Object-Oriented Programming</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Core OOP with Java/C#</span>
                            <span class="course-prereq"><b>Prereq:</b> Programming Fundamentals</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE250</span>
                            <span class="course-name">Databases & Information Systems</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Relational modeling and SQL</span>
                            <span class="course-prereq"><b>Prereq:</b> OOP</span>
                        </div>
                    </div>
                </div>

                <div class="term-card">
                    <div class="term-header">
                        <span class="badge">Semester 2</span>
                        <span class="term-title"><i class="fa-solid fa-layer-group"></i> Core Structures</span>
                    </div>
                    <div class="course-list">
                        <div class="course-item">
                            <span class="course-code">SE210</span>
                            <span class="course-name">Data Structures & Algorithms</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Efficiency and problem solving</span>
                            <span class="course-prereq"><b>Prereq:</b> OOP</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE220</span>
                            <span class="course-name">Requirements Engineering</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Elicitation to validation</span>
                            <span class="course-prereq"><b>Prereq:</b> SE101</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE340</span>
                            <span class="course-name">Web Application Development</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Frontend, backend, APIs</span>
                            <span class="course-prereq"><b>Prereq:</b> OOP</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section-header" style="margin-top:3rem;">
                <h2 class="section-title">Year 2</h2>
                <p class="section-desc">Advance to architecture, quality, and modern delivery practices.</p>
            </div>

            <div class="plan-grid">
                <div class="term-card">
                    <div class="term-header">
                        <span class="badge">Semester 3</span>
                        <span class="term-title"><i class="fa-solid fa-cubes"></i> Architecture & Design</span>
                    </div>
                    <div class="course-list">
                        <div class="course-item">
                            <span class="course-code">SE310</span>
                            <span class="course-name">Software Design & Architecture</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Patterns and styles</span>
                            <span class="course-prereq"><b>Prereq:</b> SE220</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE330</span>
                            <span class="course-name">Testing & Quality Assurance</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Automation and CI</span>
                            <span class="course-prereq"><b>Prereq:</b> SE310</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE360</span>
                            <span class="course-name">DevOps & Cloud Engineering</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Pipelines and cloud</span>
                            <span class="course-prereq"><b>Prereq:</b> SE330</span>
                        </div>
                    </div>
                </div>

                <div class="term-card">
                    <div class="term-header">
                        <span class="badge">Semester 4</span>
                        <span class="term-title"><i class="fa-solid fa-flag-checkered"></i> Delivery & Management</span>
                    </div>
                    <div class="course-list">
                        <div class="course-item">
                            <span class="course-code">SE420</span>
                            <span class="course-name">Software Project Management</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Planning and leadership</span>
                            <span class="course-prereq"><b>Prereq:</b> SE310</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE340</span>
                            <span class="course-name">Advanced Web Engineering (Elective)</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Scaling and security</span>
                            <span class="course-prereq"><b>Prereq:</b> Web Dev</span>
                        </div>
                        <div class="course-item">
                            <span class="course-code">SE3XX</span>
                            <span class="course-name">Capstone Project</span>
                            <span class="course-credits">3 cr</span>
                            <span class="course-desc">Team-based real project</span>
                            <span class="course-prereq"><b>Prereq:</b> SE310, SE330</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="legend">
                <span><span class="dot dot-core"></span> Core</span>
                <span><span class="dot dot-elective"></span> Elective</span>
            </div>

            <div style="text-align:center;margin-top:2rem;">
                <a href="#courses" class="nav-link" data-page="courses" style="color: var(--brand-700); font-weight:700;">View Course Details</a>
            </div>
        </div>
    </section>
    `;
}

export function initStudyPlan() {
    // Initialize any study plan page specific functionality
    console.log('Study Plan page initialized');
}
