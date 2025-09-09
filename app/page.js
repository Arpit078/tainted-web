import Image from 'next/image';
import logo from './logo.png';
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="flex items-center gap-3">
          {/* HabitKit Logo */}
<div className="w-10 h-10 rounded-lg overflow-hidden">
  <Image
    src={logo}
    alt="HabitKit Logo"
    width={40}
    height={40}
    className="object-cover w-full h-full"
  />
</div>

          <span className="text-2xl font-bold">
            Tainted
          </span>
        </div>
        
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="mailto:microdev078@gmail.com" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent inline-block px-6 py-2 rounded-2xl bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
              Become the Man You Admire
            </span>
            <br />
            <span className="text-white">6<span className="text-purple-400"> Habits</span> 30 <span className="text-purple-400"> Days</span> </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Track your habits with ease and view your daily progress. Watch your Radar chart grow and 
            Heatmaps filled everyday.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://play.google.com/store/apps/details?id=com.microdev.tainted" 
              className="group flex items-center gap-3 bg-black border border-gray-700 rounded-2xl px-6 py-4 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-400">GET IT ON</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </main>


      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}