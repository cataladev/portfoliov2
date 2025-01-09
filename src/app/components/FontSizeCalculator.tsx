'use client';
import React, { useEffect, useState } from 'react';

type Project = {
  description: string;
};

type FontSizeCalculatorProps = {
  projects: Project[];
  maxLength: number;
  minFontSize: number;
  maxFontSize: number;
};

const calculateFontSize = (text: string, maxLength: number, minFontSize: number, maxFontSize: number) => {
  const length = text.length;
  if (length > maxLength) {
    return minFontSize;
  }
  return maxFontSize - ((maxFontSize - minFontSize) * (length / maxLength));
};

export const FontSizeCalculator: React.FC<FontSizeCalculatorProps> = ({
  projects,
  maxLength,
  minFontSize,
  maxFontSize,
}) => {
  const [fontSizes, setFontSizes] = useState<number[]>([]);

  useEffect(() => {
    const sizes = projects.map(project => calculateFontSize(project.description, maxLength, minFontSize, maxFontSize));
    setFontSizes(sizes);
  }, [projects, maxLength, minFontSize, maxFontSize]);

  return (
    <>
      {fontSizes.map((size, index) => (
        <style key={index}>{`.project-desc-${index} { font-size: ${size}px; }`}</style>
      ))}
    </>
  );
};
