/* Efeito interativo de linhas sutis ao redor do mouse — elegante e discreto */
import { useEffect, useRef } from "react";

interface Line {
  x: number;
  y: number;
  angle: number;
  length: number;
  opacity: number;
  life: number;
}

const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Redimensionar canvas para tela inteira */
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Capturar posição do mouse */
    let lastX = 0;
    let lastY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Criar linhas apenas quando o mouse se move significativamente
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 20) {
        // Adicionar pequenas linhas ao redor do cursor
        for (let i = 0; i < 2; i++) {
          const angle = Math.random() * Math.PI * 2;
          const offset = 20 + Math.random() * 30;
          linesRef.current.push({
            x: e.clientX + Math.cos(angle) * offset,
            y: e.clientY + Math.sin(angle) * offset,
            angle: angle + Math.PI / 2 + (Math.random() - 0.5) * 0.5,
            length: 8 + Math.random() * 16,
            opacity: 0.15 + Math.random() * 0.1,
            life: 1,
          });
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    /* Loop de animação */
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linesRef.current = linesRef.current.filter((line) => {
        line.life -= 0.015; // Desaparece lentamente
        if (line.life <= 0) return false;

        const alpha = line.opacity * line.life;
        ctx.beginPath();
        ctx.moveTo(
          line.x - Math.cos(line.angle) * line.length * 0.5,
          line.y - Math.sin(line.angle) * line.length * 0.5
        );
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length * 0.5,
          line.y + Math.sin(line.angle) * line.length * 0.5
        );
        // Cor marrom do tema principal
        ctx.strokeStyle = `hsla(25, 35%, 35%, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.stroke();

        return true;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    /* Canvas ocupa tela inteira, sem bloquear interações */
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-40 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default MouseTrail;
