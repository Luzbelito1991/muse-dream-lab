import { useEffect, useState } from 'react';

interface CloudElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'wispy' | 'fluffy' | 'dramatic' | 'subtle';
  layer: 'front' | 'middle' | 'back';
  opacity: number;
}

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
  const [clouds, setClouds] = useState<CloudElement[]>([]);
  const [stars, setStars] = useState<StarElement[]>([]);

  useEffect(() => {
    // Generate cinematic realistic clouds with aerial depth
    const cloudArray: CloudElement[] = [];
    const cloudTypes: CloudElement['type'][] = ['wispy', 'fluffy', 'dramatic', 'subtle'];
    const layers: CloudElement['layer'][] = ['back', 'middle', 'front'];
    
    // Create fewer, more substantial clouds for realism
    for (let i = 0; i < 6; i++) {
      cloudArray.push({
        id: i,
        x: Math.random() * 100, // Keep within viewport for focus
        y: 15 + Math.random() * 70, // Avoid extreme edges
        size: 150 + Math.random() * 250, // Larger, more realistic proportions
        duration: 35 + Math.random() * 15, // Slower, more majestic
        delay: Math.random() * 12,
        type: cloudTypes[Math.floor(Math.random() * cloudTypes.length)],
        layer: layers[Math.floor(Math.random() * layers.length)],
        opacity: 0.7 + Math.random() * 0.25, // Higher visibility for definition
      });
    }
    setClouds(cloudArray);

    // Generate layered stars with different intensities
    const starArray: StarElement[] = [];
    const intensities: StarElement['intensity'][] = ['dim', 'medium', 'bright', 'sparkle'];
    
    for (let i = 0; i < 45; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 5,
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

      {/* Layered Clouds */}
      {['back', 'middle', 'front'].map(layer => (
        <div key={`cloud-layer-${layer}`} className={`cloud-layer cloud-layer-${layer}`}>
          {clouds
            .filter(cloud => cloud.layer === layer)
            .map((cloud) => (
              <div
                key={`cloud-${cloud.id}`}
                className={`cloud cloud-${cloud.type}`}
                style={{
                  left: `${cloud.x}%`,
                  top: `${cloud.y}%`,
                  width: `${cloud.size}px`,
                  height: `${cloud.size * 0.65}px`,
                  opacity: cloud.opacity,
                  animationDuration: `${cloud.duration}s`,
                  animationDelay: `${cloud.delay}s`,
                }}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default BackgroundElements;