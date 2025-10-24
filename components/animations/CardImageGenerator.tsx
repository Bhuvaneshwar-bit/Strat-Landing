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
    canvas.width = 500;
    canvas.height = 650;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 500, 650);
    gradient.addColorStop(0, '#18181b');
    gradient.addColorStop(1, '#09090b');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 650);

    // Red accent overlay
    const accentGradient = ctx.createLinearGradient(0, 0, 500, 350);
    accentGradient.addColorStop(0, 'rgba(220, 38, 38, 0.15)');
    accentGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = accentGradient;
    ctx.fillRect(0, 0, 500, 650);

    // Border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(10, 10, 480, 630, 30);
    ctx.stroke();

    // Icon background
    ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
    ctx.beginPath();
    ctx.roundRect(50, 70, 90, 90, 18);
    ctx.fill();

    // Icon border
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(50, 70, 90, 90, 18);
    ctx.stroke();

    // Icon (simplified representation)
    ctx.fillStyle = '#f87171';
    ctx.font = 'bold 44px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('●', 95, 115);

    // Title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(card.title, 50, 190);

    // TBD Badge
    if (card.tbd) {
      ctx.fillStyle = 'rgba(220, 38, 38, 0.2)';
      ctx.beginPath();
      ctx.roundRect(50, 260, 70, 35, 18);
      ctx.fill();

      ctx.strokeStyle = 'rgba(220, 38, 38, 0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(50, 260, 70, 35, 18);
      ctx.stroke();

      ctx.fillStyle = '#f87171';
      ctx.font = '600 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('TBD', 85, 280);
    }

    // Description
    ctx.fillStyle = '#d1d5db';
    ctx.font = '24px sans-serif';
    ctx.textAlign = 'left';
    
    const words = card.description.split(' ');
    let line = '';
    let y = card.tbd ? 330 : 280;
    const maxWidth = 400;
    const lineHeight = 38;

    words.forEach((word) => {
      const testLine = line + word + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== '') {
        ctx.fillText(line, 50, y);
        line = word + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    });
    ctx.fillText(line, 50, y);

    // Bottom accent line
    const bottomGradient = ctx.createLinearGradient(0, 638, 500, 638);
    bottomGradient.addColorStop(0, 'rgba(239, 68, 68, 0)');
    bottomGradient.addColorStop(0.5, 'rgba(239, 68, 68, 0.4)');
    bottomGradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = bottomGradient;
    ctx.fillRect(0, 638, 500, 2);

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
