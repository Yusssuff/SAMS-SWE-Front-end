import '../../css/courses.css';
import { initCoursesLayout } from '../courses-layouts.js';

export function renderCourses() {
    return `
    <!-- Hero -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">Software Engineering Courses</h1>
            <p class="hero-subtitle">Explore core and elective courses with credits, descriptions, and prerequisites</p>
        </div>
    </section>

    <!-- Courses -->
    <section class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Undergraduate Courses</h2>
                <p class="section-desc">Curriculum designed to build strong foundations in software engineering and modern development practices.</p>
            </div>

            <!-- TABBED LAYOUT -->
            <div class="layout-container active" id="tabs-layout"></div>
        </div>
    </section>
    `;
}

export function initCourses() {
    // Initialize courses page specific functionality
    console.log('Courses page initialized');
    // Initialize the courses layout after the DOM is ready
    setTimeout(() => {
        initCoursesLayout();
    }, 100);
}
