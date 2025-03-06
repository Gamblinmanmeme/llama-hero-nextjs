"use client";

import { useState } from 'react';
import ReliableImage from './ReliableImage';
import { createSrcSet } from '../lib/imageUtils';

export default function ImageExample() {
  const [imageUrl, setImageUrl] = useState('https://images.pexels.com/photos/3693967/pexels-photo-3693967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  
  // Example image URLs - mix of working and non-working
  const exampleUrls = [
    'https://images.pexels.com/photos/3693967/pexels-photo-3693967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.unsplash.com/photo-1571987502227-9231b837d92a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://picsum.photos/800/600',
    'https://non-existent-image-url.com/image.jpg', // This will fail and show fallback
    '/silverado.jpg', // Local image that might be missing
  ];
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Image Loading Examples</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Current Image</h3>
        <ReliableImage 
          src={imageUrl}
          alt="Example image"
          width={800}
          height={500}
          className="w-full h-64 rounded-lg"
          priority={true}
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Try Different Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {exampleUrls.map((url, index) => (
            <button
              key={index}
              onClick={() => setImageUrl(url)}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100 text-sm"
            >
              Image {index + 1}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Regular HTML Image with SrcSet</h3>
        <div className="relative h-40">
          <img
            src={imageUrl}
            alt="Example with srcset"
            srcSet={createSrcSet(imageUrl)}
            sizes="(max-width: 640px) 100vw, 800px"
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://placehold.co/800x400?text=Fallback+Image';
            }}
          />
        </div>
      </div>
      
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Debugging Tips</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Check browser console for image loading errors</li>
          <li>Verify image URLs are accessible</li>
          <li>Ensure domains are added to next.config.mjs</li>
          <li>Try using unoptimized images in development</li>
          <li>Use relative paths for local images</li>
        </ul>
      </div>
    </div>
  );
}