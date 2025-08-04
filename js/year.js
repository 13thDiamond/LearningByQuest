export function yearSpan() {
const yearSpan = document.getElementById('spanYear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
}