
import { useEffect } from 'react';

function CursorStars() {
  useEffect(() => {
    let lastSpawn = 0;

    const createTrail = (event: MouseEvent) => {
      const now = performance.now();

      // Limit particles to roughly 60 per second
      if (now - lastSpawn < 16) return;
      lastSpawn = now;

      const particle = document.createElement('span');
      particle.className = 'cursor-star';

      // Small random spread around the cursor
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;

      particle.style.left = `${event.clientX + offsetX}px`;
      particle.style.top = `${event.clientY + offsetY}px`;

      // Random particle size
      particle.style.width = `${4 + Math.random() * 8}px`;
      particle.style.height = particle.style.width;

      // Drift away from the cursor
      particle.style.setProperty(
        '--drift-x',
        `${(Math.random() - 0.5) * 30}px`
      );
      particle.style.setProperty(
        '--drift-y',
        `${(Math.random() - 0.5) * 30}px`
      );

      document.body.appendChild(particle);

      particle.addEventListener(
        'animationend',
        () => particle.remove(),
        { once: true }
      );
    };

    window.addEventListener('mousemove', createTrail);

    return () => {
      window.removeEventListener('mousemove', createTrail);
      document
        .querySelectorAll('.cursor-star')
        .forEach((particle) => particle.remove());
    };
  }, []);

  return null;
}

export default CursorStars;
