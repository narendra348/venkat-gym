import { useEffect, useState, useRef } from "react";

interface StatProps {
  target: number;
  suffix?: string;
  label: string;
}

function Stat({ target, suffix = "", label }: StatProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const countingDone = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !countingDone.current) {
          const duration = 2000; // ms
          const frameDuration = 1000 / 60; // 60fps
          const totalFrames = Math.round(duration / frameDuration);
          const increment = target / totalFrames;
          
          let currentFrame = 0;
          
          const counter = setInterval(() => {
            currentFrame++;
            const progress = Math.min(currentFrame / totalFrames, 1);
            const currentCount = Math.ceil(progress * target);
            
            setCount(currentCount);
            
            if (currentFrame === totalFrames) {
              clearInterval(counter);
              countingDone.current = true;
            }
          }, frameDuration);
        }
      },
      { threshold: 0.5 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [target]);

  return (
    <div className="reveal">
      <div ref={counterRef} className="text-4xl font-montserrat font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <p className="text-accent text-lg font-semibold">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <Stat target={10} suffix="+" label="YEARS EXPERIENCE" />
          <Stat target={2} suffix="+" label="EXPERT TRAINERS" />
          <Stat target={10} suffix="+" label="WEEKLY CLASSES" />
          <Stat target={200} suffix="+" label="HAPPY MEMBERS" />
        </div>
      </div>
    </div>
  );
}
