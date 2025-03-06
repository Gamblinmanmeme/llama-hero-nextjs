import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full">
      {/* Hero background with multiple fallback approaches */}
      <div 
        className="absolute inset-0 z-0 bg-blue-800"
      >
        {/* Method 1: CSS background image as a direct element */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3693967/pexels-photo-3693967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        
        {/* Method 2: Regular img tag as fallback */}
        <img 
          src="https://images.pexels.com/photos/3693967/pexels-photo-3693967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Blue pickup truck"
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.opacity = '1';
          }}
        />
        
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
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