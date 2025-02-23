const card = document.getElementById('box');
        
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.boxShadow = `0 0 25px rgba(0, 255, 255, 0.7), ${x}px ${y}px 20px rgba(0, 255, 255, 0.5)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = "0 0 15px rgba(0, 255, 255, 0.5)";
        });