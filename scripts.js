// Simulate loading time  
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust the timeout as needed (2000ms = 2 seconds)
}
