// Course data structure
const coursesData = {
  year3: {
    semester5: {
      title: "Semester 5",
      core: [
        { code: "SE313", title: "Software Architecture Structure", credits: 3, desc: "Architectural styles, components, connectors, and documentation.", prereq: "CS214 Data Structure" },
        { code: "SE314", title: "Software Configuration Management", credits: 3, desc: "Version control, build systems, release management, and DevOps practices.", prereq: "CS214 Data Structure" },
        { code: "SE321", title: "Software Requirements Specification and Validation", credits: 3, desc: "Requirements specification standards, validation techniques, and stakeholder communication.", prereq: "SE111 Software Engineering Fundamentals" },
        { code: "HS202", title: "Report Writing Skills & Communication", credits: 2, desc: "Technical writing, presentation skills, and professional communication.", prereq: "None" }
      ],
      electives: [
        { code: "SE332", title: "Advanced Programming Tools", credits: 3, desc: "Modern tooling, build pipelines, debugging, and performance profiling.", prereq: "CS222 Algorithms Analysis & Design" },
        { code: "SE332", title: "Software Engineering and Blockchain", credits: 3, desc: "Distributed ledgers, smart contracts, and SE practices for blockchain systems.", prereq: "CS222 Algorithms Analysis & Design" },
        { code: "SE391", title: "Selected Topics in Software Engineering (1)", credits: 3, desc: "Focused study on contemporary topics in SE.", prereq: "None" }
      ],
      otherSectors: [
        { code: "AI311", title: "Machine and Deep Learning", credits: 3, desc: "Neural networks, deep learning architectures, and applications.", prereq: "ST121 Statistics 1 / MA112 Math 2 / CS214 Data Structure" },
        { code: "IS313", title: "Big Data Analytics", credits: 3, desc: "Data pipelines, analytics frameworks, and large-scale processing.", prereq: "IS212 Database Systems" },
        { code: "CS311", title: "Object Oriented Programming", credits: 3, desc: "Advanced OOP concepts and design for robust systems.", prereq: "CS112 Programming 1 / CS222 Algorithms Analysis & Design" }
      ]
    },
    semester6: {
      title: "Semester 6",
      core: [
        { code: "SE323", title: "Fundamentals of Pattern Design and Software Construction", credits: 3, desc: "Design patterns, software construction principles, and refactoring.", prereq: "CS214 Data Structure" },
        { code: "SE331", title: "Software Engineering Security", credits: 3, desc: "Secure development lifecycle, threat modeling, and mitigation.", prereq: "CS214 Data Structure" },
        { code: "SE427", title: "Software Testing and Validation", credits: 3, desc: "Test design, validation strategies, automation, and CI.", prereq: "IS111 Technology of IS" },
        { code: "HS105", title: "Principles of Law", credits: 2, desc: "Foundations of law relevant to technology and software.", prereq: "None" }
      ],
      electives: [
        { code: "SE441", title: "Software Economics", credits: 3, desc: "Economic models, cost estimation, and ROI in software projects.", prereq: "IS111 Technology of IS" },
        { code: "SE393", title: "Selected Topics in Software Engineering (2)", credits: 3, desc: "Focused study on contemporary topics in SE.", prereq: "None" }
      ],
      otherSectors: [
        { code: "IS427", title: "Business Intelligence", credits: 3, desc: "BI systems, dashboards, and decision support.", prereq: "None" },
        { code: "ISDS312", title: "Introduction to Data Science", credits: 3, desc: "Data analysis, visualization, and ML basics.", prereq: "None" },
        { code: "IS437", title: "Selected Topics in Information Systems (1)", credits: 3, desc: "Contemporary topics in information systems.", prereq: "None" }
      ]
    }
  },
  year4: {
    semester7: {
      title: "Semester 7",
      core: [
        { code: "SE425", title: "Engineering and Software Analysis in Big Data", credits: 3, desc: "Big data systems engineering and analytical frameworks.", prereq: "SE111 Software Engineering Fundamentals" },
        { code: "SE431", title: "Software Project Management", credits: 3, desc: "Planning, estimation, risk management, agile, and leadership.", prereq: "SE111 Software Engineering Fundamentals" },
        { code: "SE311", title: "Software Maintenance Fundamentals", credits: 3, desc: "Maintenance processes, evolution, refactoring, and legacy systems.", prereq: "SE111 Software Engineering Fundamentals" },
        { code: "HS301", title: "Critical Thinking", credits: 2, desc: "Analytical reasoning and decision-making skills.", prereq: "None" }
      ],
      electives: [
        { code: "SE426", title: "Cyber Security in Software Engineering", credits: 3, desc: "Security in software architectures and development practices.", prereq: "SE313 Software Architecture Structure" },
        { code: "SE491", title: "Selected Topics in Software Engineering (3)", credits: 3, desc: "Advanced contemporary topics in SE.", prereq: "None" }
      ],
      otherSectors: [
        { code: "AI312", title: "Automated Reasoning", credits: 3, desc: "Logic-based reasoning and intelligent systems.", prereq: "CS226 Modeling & Simulation" },
        { code: "CS321", title: "Computer Graphics", credits: 3, desc: "Graphics pipelines, rendering, and visualization.", prereq: "None" }
      ]
    },
    semester8: {
      title: "Semester 8",
      core: [
        { code: "SE421", title: "Software Quality Analysis and Design", credits: 3, desc: "Quality models, analysis techniques, and design for reliability.", prereq: "CS214 Data Structure, SE111 Software Engineering Fundamentals" },
        { code: "SE498", title: "Graduation Project", credits: 4, desc: "Capstone project with real-world scope, team collaboration, and delivery.", prereq: "Department approval" },
        { code: "HS401", title: "Human Rights", credits: 2, desc: "Foundations of human rights relevant to technology.", prereq: "None", note: "Pass/Fail" }
      ],
      electives2credit: [
        { code: "HS102", title: "English 2", credits: 2, desc: "Academic English and communication skills.", prereq: "None" },
        { code: "HS405", title: "Principles of Management", credits: 2, desc: "Management fundamentals for engineering projects.", prereq: "None" },
        { code: "HS402", title: "Principles of Economics & Feasibility Studies", credits: 2, desc: "Economic principles and feasibility analysis.", prereq: "None" },
        { code: "HS411", title: "Accounting for Non-Accountants", credits: 2, desc: "Basic accounting concepts for engineers.", prereq: "None" },
        { code: "HS412", title: "Organizational Behavior", credits: 2, desc: "Behavioral dynamics and teams in organizations.", prereq: "None" },
        { code: "HS413", title: "Digital Marketing", credits: 2, desc: "Digital channels, analytics, and strategy basics.", prereq: "None" },
        { code: "HS414", title: "Strategic Planning", credits: 2, desc: "Strategy formulation and execution.", prereq: "None" }
      ],
      electives3credit: [
        { code: "SE423", title: "Software Engineering Applications in the Internet of Things", credits: 3, desc: "IoT architectures, protocols, and application development.", prereq: "SE111 Software Engineering Fundamentals" },
        { code: "SE493", title: "Selected Topics in Software Engineering (4)", credits: 3, desc: "Advanced selected topics in SE.", prereq: "None" }
      ],
      otherSectors: [
        { code: "CS467", title: "Cloud and Mobile Computing", credits: 3, desc: "Cloud platforms and mobile application architectures.", prereq: "CS313 Computer Network 1" },
        { code: "CSCS311", title: "Principles of Cryptology", credits: 3, desc: "Cryptographic primitives, protocols, and security applications.", prereq: "CS225 Cyber Security" }
      ]
    }
  }
};

// Generate course card HTML
function createCourseCard(course) {
  const note = course.note ? ` <span style="color: var(--brand-600);">(${course.note})</span>` : '';
  return `
    <div class="course-card">
      <div class="course-header">
        <div>
          <div class="course-title">${course.title}</div>
          <div class="course-code">${course.code}</div>
        </div>
        <div class="course-meta"><i class="fa-solid fa-clock"></i> ${course.credits} credit hour${course.credits !== 1 ? 's' : ''}${note}</div>
      </div>
      <div class="course-desc">${course.desc}</div>
      <div class="course-prereq"><b>Prerequisites:</b> ${course.prereq}</div>
    </div>
  `;
}

// TABBED LAYOUT
function generateTabbedLayout() {
  let html = `
    <div class="semester-tabs">
      <button class="semester-tab active" data-semester="y3s5">Year 3 - Semester 5</button>
      <button class="semester-tab" data-semester="y3s6">Year 3 - Semester 6</button>
      <button class="semester-tab" data-semester="y4s7">Year 4 - Semester 7</button>
      <button class="semester-tab" data-semester="y4s8">Year 4 - Semester 8</button>
    </div>
  `;

  // Semester 5
  html += `<div class="semester-content active" data-semester="y3s5">`;
  html += `<h3 class="semester-heading">Year 3 - Semester 5</h3>`;
  html += `<h4 class="course-category">Core Courses</h4><div class="courses-grid">`;
  coursesData.year3.semester5.core.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Elective Courses (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year3.semester5.electives.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Courses from Other Sectors (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year3.semester5.otherSectors.forEach(course => html += createCourseCard(course));
  html += `</div></div>`;

  // Semester 6
  html += `<div class="semester-content" data-semester="y3s6">`;
  html += `<h3 class="semester-heading">Year 3 - Semester 6</h3>`;
  html += `<h4 class="course-category">Core Courses</h4><div class="courses-grid">`;
  coursesData.year3.semester6.core.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Elective Courses (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year3.semester6.electives.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Courses from Other Sectors (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year3.semester6.otherSectors.forEach(course => html += createCourseCard(course));
  html += `</div></div>`;

  // Semester 7
  html += `<div class="semester-content" data-semester="y4s7">`;
  html += `<h3 class="semester-heading">Year 4 - Semester 7</h3>`;
  html += `<h4 class="course-category">Core Courses</h4><div class="courses-grid">`;
  coursesData.year4.semester7.core.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Elective Courses (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year4.semester7.electives.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Courses from Other Sectors (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year4.semester7.otherSectors.forEach(course => html += createCourseCard(course));
  html += `</div></div>`;

  // Semester 8
  html += `<div class="semester-content" data-semester="y4s8">`;
  html += `<h3 class="semester-heading">Year 4 - Semester 8</h3>`;
  html += `<h4 class="course-category">Core Courses</h4><div class="courses-grid">`;
  coursesData.year4.semester8.core.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Elective Courses (Choose TWO – total 4 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year4.semester8.electives2credit.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Elective Courses (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year4.semester8.electives3credit.forEach(course => html += createCourseCard(course));
  html += `</div><h4 class="course-category">Courses from Other Sectors (Choose ONE – 3 Credit Hours)</h4><div class="courses-grid">`;
  coursesData.year4.semester8.otherSectors.forEach(course => html += createCourseCard(course));
  html += `</div></div>`;

  return html;
}

// Initialize layouts
document.addEventListener('DOMContentLoaded', function() {
  // Generate tabbed layout
  document.getElementById('tabs-layout').innerHTML = generateTabbedLayout();
  
  // Setup tab switching for tabbed layout
  setupTabbedView();
});

// Setup tabbed view functionality
function setupTabbedView() {
  document.querySelectorAll('.semester-tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const semester = this.dataset.semester;
      
      // Update active tab
      document.querySelectorAll('.semester-tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      // Show corresponding content
      document.querySelectorAll('.semester-content').forEach(content => {
        content.classList.remove('active');
        if (content.dataset.semester === semester) {
          content.classList.add('active');
        }
      });
    });
  });
}
