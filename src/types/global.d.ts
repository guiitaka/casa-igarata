import { ReactNode } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export interface BaseProps {
  className?: string;
  children?: ReactNode;
} 