/**
 * Utility functions for handling images in Next.js projects
 */

/**
 * Checks if an image URL is valid by attempting to load it
 * @param url The image URL to check
 * @returns Promise that resolves to boolean indicating if image is valid
 */
export const isImageValid = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
};

/**
 * Gets a fallback image URL if the original fails
 * @param originalUrl The original image URL
 * @param width Width for placeholder
 * @param height Height for placeholder
 * @param text Text to display on placeholder
 * @returns A fallback image URL
 */
export const getFallbackImageUrl = (
  originalUrl: string,
  width = 600,
  height = 400,
  text = 'Image Not Available'
): string => {
  // Try to extract a meaningful name from the original URL
  const urlParts = originalUrl.split('/');
  const fileName = urlParts[urlParts.length - 1].split('?')[0];
  const imageName = fileName.replace(/[^a-zA-Z0-9]/g, ' ').trim() || text;
  
  return `https://placehold.co/${width}x${height}?text=${encodeURIComponent(imageName)}`;
};

/**
 * Converts a local image path to an absolute URL
 * @param path Relative path to the image
 * @returns Absolute URL to the image
 */
export const getImageUrl = (path: string): string => {
  // Handle already absolute URLs
  if (path.startsWith('http')) {
    return path;
  }
  
  // Handle relative paths
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
};

/**
 * Determines if an image should be loaded with priority
 * @param index Position of the image in a list
 * @param isHero Whether the image is a hero/banner image
 * @returns Boolean indicating if image should be prioritized
 */
export const shouldPrioritizeImage = (index = 0, isHero = false): boolean => {
  // Prioritize hero images and first few images in a list
  return isHero || index < 3;
};

/**
 * Creates a responsive image srcSet for regular img tags
 * @param baseUrl Base URL of the image
 * @param widths Array of widths to include in srcSet
 * @returns srcSet string
 */
export const createSrcSet = (baseUrl: string, widths = [640, 750, 828, 1080, 1200, 1920]): string => {
  // For URLs that support width parameters (like Unsplash, Pexels)
  if (baseUrl.includes('unsplash.com')) {
    return widths.map(w => `${baseUrl}&w=${w} ${w}w`).join(', ');
  }
  
  if (baseUrl.includes('pexels.com')) {
    return widths.map(w => `${baseUrl}&w=${w} ${w}w`).join(', ');
  }
  
  // Default return original URL
  return baseUrl;
};