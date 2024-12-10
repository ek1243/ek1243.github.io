# loading page


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loading Screen Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="loading-screen">
        <div class="loader"></div>
        <p>Loading...</p>
    </div>
    
    <div id="content" style="display: none;">
        <h1>Welcome to My Website!</h1>
        <p>This is the main content of the site.</p>
    </div>

    <script src="script.js"></script>
</body>
</html>


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

#loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Make sure it covers everything */
}

.loader {
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}


// Simulate loading time  
window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Adjust the timeout as needed (2000ms = 2 seconds)
}
