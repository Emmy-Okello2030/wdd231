// Function to update the footer with the current year and last modified date
function updateFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;
}

// Function to handle the responsive navigation menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Function to display course information
function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><span>${course.duration}</span>`;
        courseList.appendChild(courseItem);
    });
}

// Function to filter courses
function filterCourses(category) {
    const courseCards = document.querySelector('.course-cards');
    courseCards.innerHTML = '';
    const filteredCourses = category === 'all' ? courses : courses.filter(course => course.category === category);
    filteredCourses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><span>${course.duration}</span>`;
        courseCards.appendChild(courseItem);
    });
}

// Sample course data
const courses = [
    {
        title: "CSE 110",
        description: "Introduction to Programming",
        duration: "10 weeks",
        category: "CSE"
    },
    {
        title: "WDD 130",
        description: "Web Development",
        duration: "12 weeks",
        category: "WDD"
    },
    {
        title: "CSE 111",
        description: "Data Science",
        duration: "14 weeks",
        category: "CSE"
    },
    {
        title: "CSE 210",
        description: "Advanced Programming",
        duration: "10 weeks",
        category: "CSE"
    },
    {
        title: "WDD 131",
        description: "Advanced Web Development",
        duration: "12 weeks",
        category: "WDD"
    },
    {
        title: "WDD 231",
        description: "Full Stack Development",
        duration: "14 weeks",
        category: "WDD"
    }
];

// Event listeners for DOMContentLoaded and menu toggle
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    displayCourses();

    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});