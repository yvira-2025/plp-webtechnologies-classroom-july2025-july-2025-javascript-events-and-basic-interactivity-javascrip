// Feature 1: Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Feature 2: Click Counter
let count = 0;
const countBtn = document.getElementById('countBtn');
const clickCount = document.getElementById('clickCount');

countBtn.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
});

// Feature 3: Collapsible FAQ
const faqBtn = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');

faqBtn.addEventListener('click', () => {
  faqAnswer.classList.toggle('hidden');
});

// Feature 4: Custom Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formMessages = document.getElementById('formMessages');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessages.textContent = ''; // Clear previous messages

  let errors = [];

  // Validate name
  if (nameInput.value.trim().length < 2) {
    errors.push('Name must be at least 2 characters.');
  }

  // Validate email with regex
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(emailInput.value)) {
    errors.push('Please enter a valid email address.');
  }

  // Validate password
  if (passwordInput.value.length < 6) {
    errors.push('Password must be at least 6 characters.');
  }

  if (errors.length > 0) {
    formMessages.innerHTML = errors.map(err => `<p>${err}</p>`).join('');
  } else {
    formMessages.style.color = 'green';
    formMessages.textContent = 'Form submitted successfully!';
    form.reset();
  }
});
