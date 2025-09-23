import { useEffect, useState } from 'react';
import cloudImg from '@/assets/cloud.png';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BackgroundElements = () => {
  const [clouds, setClouds] = useState<FloatingElement[]>([]);
  const [stars, setStars] = useState<FloatingElement[]>([]);

  useEffect(() => {
    // Generate random clouds
    const cloudArray: FloatingElement[] = [];
    for (let i = 0; i < 8; i++) {
      cloudArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 60 + Math.random() * 80,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 5,
      });
    }
    setClouds(cloudArray);

    // Generate random stars
    const starArray: FloatingElement[] = [];
    for (let i = 0; i < 15; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      });
    }
    setStars(starArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Clouds */}
      {clouds.map((cloud) => (
        <img
          key={`cloud-${cloud.id}`}
          src={cloudImg}
          alt="Nube onírica decorativa DreamFrame"
          style={{
            position: 'absolute',
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            width: `${cloud.size}px`,
            height: `${cloud.size * 0.6}px`,
            opacity: 0.9,
            animation: `float ${cloud.duration}s ease-in-out infinite`,
            animationDelay: `${cloud.delay}s`,
            filter: 'drop-shadow(0 6px 16px hsla(0,0%,0%,0.12))',
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className={`star ${Math.random() > 0.5 ? 'star-bright' : ''}`}
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
  );
};

export default BackgroundElements;