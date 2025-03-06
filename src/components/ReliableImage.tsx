"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ReliableImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
}

export default function ReliableImage({
  src,
  alt,
  width = 500,
  height = 300,
  className = "",
  fallbackSrc = "https://placehold.co/600x400?text=Image+Not+Available",
  priority = false
}: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Reset states when src changes
    setImgSrc(src);
    setIsLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {/* Regular img tag as most reliable fallback */}
      {error && (
        <img
          src={fallbackSrc}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
        />
      )}
      
      {/* Next.js Image with error handling */}
      {!error && (
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            // Try fallback if main image fails
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc);
            } else {
              setError(true);
            }
          }}
          priority={priority}
          unoptimized={imgSrc.startsWith('http')}
        />
      )}
      
      {/* Loading state */}
      {isLoading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}