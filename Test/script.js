document.getElementById('clickButton').addEventListener('click', function() {
    const circlesContainer = document.getElementById('circlesContainer');
    circlesContainer.style.display = 'block'; // Show the circles container

    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        setTimeout(() => {
            circle.style.opacity = 1; // Fade in the circles
            circle.style.transform = `translate(-50%, -50%) translate(${(index % 2 === 0 ? 80 : -80)}px, ${(index < 2 ? 80 : -80)}px)`;
        }, index * 200); // Stagger the animations
    });
});