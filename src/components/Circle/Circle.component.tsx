/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CircleComponent = () => {
  const numCircles = 20;
  const colors = [
    '#23A6F0',
    '#47AFF1',
    '#6AB8F3',
    '#8EC2F2',
    '#A2CAF3', // Gradiente de azul claro
    '#B7D3F4',
    '#CCDDF5',
    '#E1E6F7',
    '#F6F0F8',
    '#FFFFFF', // Hacia blanco
    '#FFFFFF',
    '#FFF8DD',
    '#FFF1BB',
    '#FFEA99',
    '#FFE277', // Hacia amarillo
    '#FFDB55',
    '#FFD433',
    '#FFCD11',
    '#FFC700',
    '#FFF666', // Amarillo y foco
  ];

  const [circles, setCircles] = useState(
    Array.from({ length: numCircles }, (_, index) => ({
      x: 0,
      y: 0,
      color: colors[index % colors.length],
    }))
  );
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const moveCircles = () => {
      setCircles((prevCircles) =>
        prevCircles.map((circle, index) => {
          if (index === 0) {
            return { ...circle, x: mousePos.x, y: mousePos.y };
          } else {
            const prevCircle = prevCircles[index - 1];
            return {
              ...circle,
              x: circle.x + (prevCircle.x - circle.x) * 0.35,
              y: circle.y + (prevCircle.y - circle.y) * 0.35,
            };
          }
        })
      );
    };

    const id = setInterval(moveCircles, 10);
    return () => clearInterval(id);
  }, [mousePos]);

  return (
    <div className="opacity-60">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'fixed',
            left: circle.x - 12,
            top: circle.y - 12,
            width: 24,
            height: 24,
            borderRadius: '50%',
            backgroundColor: circle.color,
            scale: (numCircles - index) / numCircles,
            pointerEvents: 'none',
            zIndex: 99999999,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: (numCircles - index) / numCircles }}
        />
      ))}
    </div>
  );
};
