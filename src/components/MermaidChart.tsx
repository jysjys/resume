import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
}

const MermaidChart = ({ chart }: MermaidChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 初始化 Mermaid
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      fontFamily: 'var(--font-geist-sans)',
      themeVariables: {
        fontFamily: 'var(--font-geist-sans)',
        fontSize: '16px',
      },
    });

    // 渲染图表
    const renderChart = async () => {
      if (containerRef.current) {
        try {
          const { svg } = await mermaid.render('mermaid-chart', chart);
          containerRef.current.innerHTML = svg;
        } catch (error) {
          console.error('Error rendering Mermaid chart:', error);
          containerRef.current.innerHTML = 'Error rendering chart';
        }
      }
    };

    renderChart();
  }, [chart]);

  return <div ref={containerRef} className="mermaid-chart" />;
};

export default MermaidChart; 