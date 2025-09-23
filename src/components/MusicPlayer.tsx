import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, SkipForward, SkipBack, Play, Pause } from 'lucide-react';

interface Track {
  id: number;
  name: string;
  url: string;
}

const tracks: Track[] = [
  {
    id: 1,
    name: "Nocturno Onírico",
    url: "https://www.soundjay.com/misc/sounds/chime-08.wav"
  },
  {
    id: 2,
    name: "Susurros Etéreos", 
    url: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
  },
  {
    id: 3,
    name: "Lluvia de Sueños",
    url: "https://www.soundjay.com/misc/sounds/rain-03.wav"
  },
  {
    id: 4,
    name: "Melodía Celestial",
    url: "https://www.soundjay.com/misc/sounds/soft-bell.wav"
  }
];

const MusicPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('ended', handleEnded);
    audio.volume = volume;
    
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
    } else {
      audio.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(console.error);
    }
  }, [currentTrack]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="glass-card p-2 min-w-[220px]">
        <audio
          ref={audioRef}
          src={tracks[currentTrack].url}
          loop={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        <div className="text-center mb-2">
          <h3 className="font-heading text-xs text-white/90 mb-0.5">Radio</h3>
          <p className="text-[10px] text-white/70 truncate">{tracks[currentTrack].name}</p>
        </div>

        <div className="flex items-center justify-center gap-1 mb-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevTrack}
            className="text-white/80 hover:text-white hover:bg-white/10 h-7 w-7 p-0"
          >
            <SkipBack className="h-3 w-3" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={togglePlay}
            className="text-white/80 hover:text-white hover:bg-white/10 h-7 w-7 p-0"
          >
            {isPlaying ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={nextTrack}
            className="text-white/80 hover:text-white hover:bg-white/10 h-7 w-7 p-0"
          >
            <SkipForward className="h-3 w-3" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="text-white/80 hover:text-white hover:bg-white/10 ml-1 h-7 w-7 p-0"
          >
            {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-[10px] text-white/60">Vol</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => {
              const newVolume = parseFloat(e.target.value);
              setVolume(newVolume);
              if (audioRef.current && !isMuted) {
                audioRef.current.volume = newVolume;
              }
            }}
            className="flex-1 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;