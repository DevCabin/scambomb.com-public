'use client';

import { usePathname } from 'next/navigation';
import GHLPoliteSlideIn from './GHLPoliteSlideIn';

export default function ConditionalGHLPoliteSlideIn() {
  const pathname = usePathname();
  
  // Only show on non-home pages
  if (pathname === '/') {
    return null;
  }
  
  return <GHLPoliteSlideIn />;
}