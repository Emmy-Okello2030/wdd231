// This file contains JavaScript code to enhance the functionality of the course home page.

// Function to update the footer with the current year and last modified date
function updateFooter() {
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    footer.innerHTML = `&copy; ${currentYear} Course Home Page. Last modified: ${lastModified}`;
}

// Function to handle the responsive navigation menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Event listeners for DOMContentLoaded and menu toggle
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();

    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});

// Sample course data
const courses = [
    {
        title: "Introduction to Programming",
        description: "Learn the basics of programming using Python.",
        duration: "10 weeks"
    },
    {
        title: "Web Development",
        description: "Build responsive websites using HTML, CSS, and JavaScript.",
        duration: "12 weeks"
    },
    {
        title: "Data Science",
        description: "Analyze data and build predictive models using R.",
        duration: "14 weeks"
    }
];

// Function to display course information
function displayCourses() {
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseItem = document.createElement('li');
        courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p><span>${course.duration}</span>`;
        courseList.appendChild(courseItem);
    });
}

// Call the function to display courses
document.addEventListener('DOMContentLoaded', displayCourses);