import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Hero image - using an external placeholder image */}
      <div 
        className="absolute inset-0 z-0"
      >
        {/* Truck image */}
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1571987502227-9231b837d92a?q=80&w=2070&auto=format&fit=crop"
            alt="Pickup Truck"
            fill
            priority
            className="object-cover"
            unoptimized={true}
          />
          
          {/* Overlay to ensure text is readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Understanding GM Buybacks
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 text-gray-200">
          Learn everything you need to know about GM vehicle buyback programs and how they might benefit you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#what-is" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
          >
            Learn More
          </Link>
          <Link 
            href="#contact" 
            className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-8 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}