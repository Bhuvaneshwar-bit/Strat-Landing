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
    canvas.width = 600;
    canvas.height = 750;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 600, 750);
    gradient.addColorStop(0, '#18181b');
    gradient.addColorStop(1, '#09090b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 750);

    // Red accent overlay
    const accentGradient = ctx.createLinearGradient(0, 0, 600, 400);
    accentGradient.addColorStop(0, 'rgba(220, 38, 38, 0.15)');
    accentGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = accentGradient;
    ctx.fillRect(0, 0, 600, 750);

    // Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(10, 10, 580, 730, 30);
    ctx.stroke();

    // Icon background
    ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
    ctx.beginPath();
    ctx.roundRect(60, 80, 100, 100, 20);
    ctx.fill();

    // Icon border
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(60, 80, 100, 100, 20);
    ctx.stroke();

    // Icon (simplified representation)
    ctx.fillStyle = '#f87171';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('●', 110, 130);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(card.title, 60, 220);

    // TBD Badge
    if (card.tbd) {
      ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
      ctx.beginPath();
      ctx.roundRect(60, 300, 80, 40, 20);
      ctx.fill();

      ctx.strokeStyle = 'rgba(220, 38, 38, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(60, 300, 80, 40, 20);
      ctx.stroke();

      ctx.fillStyle = '#f87171';
      ctx.font = '600 18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TBD', 100, 318);
    }

    // Description
    ctx.fillStyle = '#d1d5db';
    ctx.font = '28px sans-serif';
    ctx.textAlign = 'left';
    
    const words = card.description.split(' ');
    let line = '';
    let y = card.tbd ? 380 : 320;
    const maxWidth = 480;
    const lineHeight = 42;

    words.forEach((word) => {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line, 60, y);
        line = word + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    });
    ctx.fillText(line, 60, y);

    // Bottom accent line
    const bottomGradient = ctx.createLinearGradient(0, 730, 600, 730);
    bottomGradient.addColorStop(0, 'rgba(239, 68, 68, 0)');
    bottomGradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.4)');
    bottomGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, 738, 600, 2);

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
