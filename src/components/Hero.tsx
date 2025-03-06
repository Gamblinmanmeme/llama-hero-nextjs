import Link from 'next/link';

export default function Hero() {
  // Using a light background color that matches the llama image
  const lightBackground = "#f8f9fa";
  
  return (
    <div className="relative h-[600px] w-full">
      {/* Hero image - using a solid color background with a stylized llama */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: lightBackground,
          position: 'relative'
        }}
      >
        {/* Stylized llama design */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Llama body */}
            <div className="absolute w-full h-full bg-white rounded-3xl border-4 border-black shadow-lg"></div>
            
            {/* Llama head and neck */}
            <div className="absolute top-[-80px] left-[80px] w-32 h-48 bg-white border-4 border-black rounded-t-full"></div>
            
            {/* Llama ears */}
            <div className="absolute top-[-100px] left-[70px] w-16 h-32 bg-white border-4 border-black rounded-t-full transform -rotate-12">
              <div className="absolute inset-0 m-2 bg-pink-300 rounded-t-full"></div>
            </div>
            <div className="absolute top-[-100px] left-[110px] w-16 h-32 bg-white border-4 border-black rounded-t-full transform rotate-12">
              <div className="absolute inset-0 m-2 bg-pink-300 rounded-t-full"></div>
            </div>
            
            {/* Llama face */}
            <div className="absolute top-[-30px] left-[95px] w-8 h-8 bg-black rounded-full"></div> {/* nose */}
            <div className="absolute top-[-15px] left-[85px] w-6 h-2 bg-black rounded-full"></div> {/* mouth */}
            <div className="absolute top-[-15px] left-[110px] w-6 h-2 bg-black rounded-full"></div> {/* mouth */}
            
            {/* Sunglasses */}
            <div className="absolute top-[-50px] left-[70px] w-52 h-16 bg-black rounded-lg"></div>
            <div className="absolute top-[-45px] left-[80px] w-16 h-10 bg-pink-500 rounded-lg opacity-70"></div> {/* lens */}
            <div className="absolute top-[-45px] left-[110px] w-16 h-10 bg-pink-500 rounded-lg opacity-70"></div> {/* lens */}
            
            {/* Colorful pattern on body */}
            <div className="absolute top-[40px] left-[30px] w-12 h-12 bg-pink-400 rounded-lg transform rotate-12"></div>
            <div className="absolute top-[80px] left-[60px] w-10 h-10 bg-blue-400 rounded-lg"></div>
            <div className="absolute top-[60px] left-[100px] w-8 h-8 bg-orange-300 rounded-lg transform -rotate-12"></div>
            <div className="absolute top-[100px] left-[130px] w-14 h-14 bg-blue-300 rounded-lg"></div>
            <div className="absolute top-[120px] left-[80px] w-10 h-10 bg-purple-300 rounded-lg"></div>
            <div className="absolute top-[30px] left-[150px] w-12 h-12 bg-yellow-300 rounded-lg transform rotate-45"></div>
            
            {/* Llama legs */}
            <div className="absolute bottom-[-40px] left-[40px] w-12 h-40 bg-white border-4 border-black rounded-b-lg"></div>
            <div className="absolute bottom-[-40px] left-[100px] w-12 h-40 bg-white border-4 border-black rounded-b-lg"></div>
            <div className="absolute bottom-[-40px] left-[160px] w-12 h-40 bg-white border-4 border-black rounded-b-lg"></div>
            <div className="absolute bottom-[-40px] left-[220px] w-12 h-40 bg-white border-4 border-black rounded-b-lg"></div>
            
            {/* Llama tail */}
            <div className="absolute top-[20px] left-[-20px] w-16 h-40 bg-pink-400 border-4 border-black rounded-full transform rotate-45">
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-pink-500 border-t-4 border-black rounded-b-full"></div>
            </div>
          </div>
        </div>
        
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90"></div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-black px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-gray-800">
          Understanding GM Buybacks
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 text-gray-700">
          Learn everything you need to know about GM vehicle buyback programs and how they might benefit you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#what-is" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md"
          >
            Learn More
          </Link>
          <Link 
            href="#contact" 
            className="bg-transparent hover:bg-gray-100 border-2 border-gray-800 text-gray-800 py-3 px-8 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}