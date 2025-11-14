'use client';

import { useSession } from 'next-auth/react';
import { createAppAccessUrl } from '../utils/access';

interface AppAccessLinkProps {
  children: React.ReactNode;
  className?: string;
  fallbackText?: string;
  href?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function AppAccessLink({
  children,
  className = '',
  fallbackText = 'Try it free',
  href,
  onClick,
  ...props
}: AppAccessLinkProps) {
  const { data: session, status } = useSession();

  // Generate authenticated app URL if user is signed in
  const authenticatedUrl = createAppAccessUrl('https://app.scambomb.com', session?.accessToken);

  // Use provided href or generate authenticated URL
  const finalHref = href || authenticatedUrl;

  // Show loading state while session is being checked
  if (status === 'loading') {
    return (
      <span className={`${className} opacity-75 cursor-not-allowed`} {...props}>
        {fallbackText}
      </span>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    // Track authenticated vs anonymous access (could be used for analytics)
    if (session) {
      console.log('Authenticated user accessing app');
    } else {
      console.log('Anonymous user accessing app');
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={finalHref}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
