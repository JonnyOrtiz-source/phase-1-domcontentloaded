// Your code goes here
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    //target the paragraph element with id="text" and replace the text with "This is really cool!"
    const elP = document.getElementById('text');
    elP.textContent = 'This is really cool!';
});
