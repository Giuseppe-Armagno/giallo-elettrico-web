
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface AnimatedStatProps {
  endValue: number;
  label: string;
  duration?: number;
}

const AnimatedStat = ({ endValue, label, duration = 2 }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * endValue));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, endValue, duration]);

  return (
    <motion.div
      ref={ref}
      className="bg-electric-black/50 p-6 rounded-lg border border-electric-yellow/30"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl font-bold text-electric-yellow mb-2">
        {count}
        {label.includes("Clienti") && "%"}
        {label.includes("Anni") && "+"}
        {label.includes("Progetti") && "+"}
      </div>
      <div className="text-gray-300">{label}</div>
    </motion.div>
  );
};

export function AnimatedStats() {
  const stats = [
    { value: 15, label: "Anni di Esperienza" },
    { value: 500, label: "Progetti Completati" },
    { value: 50, label: "Impianti Fotovoltaici" },
    { value: 100, label: "Clienti Soddisfatti" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => (
        <AnimatedStat
          key={index}
          endValue={stat.value}
          label={stat.label}
          duration={2}
        />
      ))}
    </div>
  );
}
