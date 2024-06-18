document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const title = document.querySelector('input[name="title"]').value.trim();
        const content = document.querySelector('textarea[name="content"]').value.trim();
        
        if (!title || !content) {
            alert('Both title and content are required.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
