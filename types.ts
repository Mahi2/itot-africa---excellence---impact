// Fix: Added React import to resolve "Cannot find namespace 'React'" errors when using React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PersonaCardProps {
  type: string;
  title: string;
  description: string;
  cta: string;
  icon: React.ReactNode;
}

export interface ProblemItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
