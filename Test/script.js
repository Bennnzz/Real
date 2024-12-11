document.getElementById('clickButton').addEventListener('click', function() {
    const circlesContainer = document.getElementById('circlesContainer');
    circlesContainer.style.display = 'block'; // Show the circles container

    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.opacity = 1; // Fade in the circles
            const angle = (index * 90) * (Math.PI / 180); // Calculate angle in radians
            const x = 80 * Math.cos(angle); // Calculate x position
            const y = 80 * Math.sin(angle); // Calculate y position
            circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`; // Move circles out
        }, index * 200); // Stagger the animations
    });
});