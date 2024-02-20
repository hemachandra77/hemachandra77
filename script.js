// Function to animate progress bars
function animateProgress(progressBarId, targetValue, duration) {
    var progressBar = document.getElementById(progressBarId);
    var startValue = parseInt(progressBar.value);
    var increment = (targetValue - startValue) / (duration / 10);
    var interval = setInterval(function() {
        startValue += increment;
        progressBar.value = startValue;
        progressBar.innerHTML = '<strong>' + Math.round(startValue) + '%</strong>';
        if (startValue >= targetValue) {
            clearInterval(interval);
            // Change progress bar color when animation completes
            progressBar.style.backgroundColor = '#6ed56e'; // Green color
        }
    }, 10);
}

// Call the animateProgress function for each progress bar
animateProgress('pythonProgress', 75, 2000); // 85% in 2 seconds
animateProgress('webTechProgress', 85, 2000); // 85% in 2 seconds
animateProgress('djangoProgress', 70, 2000); // 85% in 2 seconds
animateProgress('mysqlProgress', 80,2000);
