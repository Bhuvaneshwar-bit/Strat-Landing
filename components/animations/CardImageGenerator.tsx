'use client';

import { useRef, useEffect, useState } from 'react';
import { BookOpen, Rocket, Building2, Radio, LucideIcon } from 'lucide-react';

interface CardData {
  title: string;
  description: string;
  icon: LucideIcon;
  tbd?: boolean;
}

function createCardImage(card: CardData): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 700;
    canvas.height = 400;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 700, 400);
    gradient.addColorStop(0, '#18181b');
    gradient.addColorStop(1, '#09090b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 700, 400);

    // Red accent overlay
    const accentGradient = ctx.createLinearGradient(0, 0, 700, 200);
    accentGradient.addColorStop(0, 'rgba(220, 38, 38, 0.12)');
    accentGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = accentGradient;
    ctx.fillRect(0, 0, 700, 400);

    // Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(12, 12, 676, 376, 24);
    ctx.stroke();

    // Icon background
    ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
    ctx.beginPath();
    ctx.roundRect(40, 40, 80, 80, 16);
    ctx.fill();

    // Icon border
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(40, 40, 80, 80, 16);
    ctx.stroke();

    // Icon (simplified representation)
    ctx.fillStyle = '#f87171';
    ctx.font = 'bold 40px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('●', 80, 80);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(card.title, 140, 50);
    // TBD Badge
    if (card.tbd) {
      ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
      ctx.beginPath();
      ctx.roundRect(140, 110, 65, 30, 15);
      ctx.fill();

      ctx.strokeStyle = 'rgba(220, 38, 38, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(140, 110, 65, 30, 15);
      ctx.stroke();

      ctx.fillStyle = '#f87171';
      ctx.font = '600 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TBD', 172, 127);
    }

    // Description
    ctx.fillStyle = '#d1d5db';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'left';
    
    const words = card.description.split(' ');
    let line = '';
    let y = card.tbd ? 170 : 110;
    const maxWidth = 520;
    const lineHeight = 32;

    words.forEach((word) => {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line, 140, y);
        line = word + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    });
    ctx.fillText(line, 140, y);

    // Bottom accent line
    const bottomGradient = ctx.createLinearGradient(0, 388, 700, 388);
    bottomGradient.addColorStop(0, 'rgba(239, 68, 68, 0)');
    bottomGradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.3)');
    bottomGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, 388, 700, 2);

    resolve(canvas.toDataURL('image/png'));
  });
}

export default function CardImageGenerator() {
  const [cardImages, setCardImages] = useState<string[]>([]);

  useEffect(() => {
    const cards: CardData[] = [
      {
        title: 'Foundations',
        description: 'Cutting-edge curriculum designed by industry experts to give you the most relevant and practical knowledge',
        icon: BookOpen,
      },
      {
        title: 'Ignite',
        description: 'Hands-on guidance from seasoned entrepreneurs who have been there and done that',
        icon: Rocket,
      },
      {
        title: 'Venture Studio',
        description: 'Access to a thriving network and endless collaboration opportunities',
        icon: Building2,
      },
      {
        title: 'Stratschool Media',
        description: 'Pathways to funding and global market access to scale your venture',
        icon: Radio,
        tbd: true,
      },
    ];

    Promise.all(cards.map(card => createCardImage(card)))
      .then(images => setCardImages(images));
  }, []);

  return cardImages;
}
