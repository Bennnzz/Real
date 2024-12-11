document.getElementById('clickButton').addEventListener('click', function() {
    const circlesContainer = document.getElementById('circlesContainer');
    circlesContainer.style.display = 'block'; // Show the circles container

    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.opacity = 1; // Fade in the circles
            const angle = (index * 90) * (Math.PI / 180); // Calculate angle in radians
            const x = 100 * Math.cos(angle); // Increased distance for pop-out effect
            const y = 100 * Math.sin(angle); // Increased distance for pop-out effect
            circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`; // Move circles out
        }, index * 200); // Stagger the animations
    });
});