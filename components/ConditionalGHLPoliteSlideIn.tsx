'use client';

// GHL POPUP WIDGET - DISABLED AS OF 2026-04-24
// The GoHighLevel popup widget has been disabled site-wide.
// Code preserved below for future reactivation if needed.
// To re-enable: Uncomment the code below and remove the "return null;"

// import { usePathname } from 'next/navigation';
// import GHLPoliteSlideIn from './GHLPoliteSlideIn';

export default function ConditionalGHLPoliteSlideIn() {
  // Widget disabled - always returns null
  return null;
  
  /* ORIGINAL CODE - PRESERVED FOR FUTURE USE:
  const pathname = usePathname();
  
  // Only show on non-home pages
  if (pathname === '/') {
    return null;
  }
  
  return <GHLPoliteSlideIn />;
  */
}
