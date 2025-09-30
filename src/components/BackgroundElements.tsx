import { useEffect, useState } from 'react';

interface StarElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  intensity: 'dim' | 'medium' | 'bright' | 'sparkle';
  layer: number;
}

const BackgroundElements = () => {
  const [stars, setStars] = useState<StarElement[]>([]);

  useEffect(() => {
    // Generate abundant stars with different intensities
    const starArray: StarElement[] = [];
    const intensities: StarElement['intensity'][] = ['dim', 'medium', 'bright', 'sparkle'];
    
    // Create many more stars for a rich starry sky
    for (let i = 0; i < 120; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 4,
        duration: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        intensity: intensities[Math.floor(Math.random() * intensities.length)],
        layer: Math.floor(Math.random() * 3) + 1,
      });
    }
    setStars(starArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Atmospheric depth gradient */}
      <div className="atmospheric-depth" />
      
      {/* Layered Stars */}
      {[1, 2, 3].map(layer => (
        <div key={`star-layer-${layer}`} className={`star-layer star-layer-${layer}`}>
          {stars
            .filter(star => star.layer === layer)
            .map((star) => (
              <div
                key={`star-${star.id}`}
                className={`star star-${star.intensity}`}
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDuration: `${star.duration}s`,
                  animationDelay: `${star.delay}s`,
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BackgroundElements;