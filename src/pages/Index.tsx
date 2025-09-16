import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'malayalam' | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    // Navigate to query interface with selected language
    navigate('/query', { state: { language: selectedLanguage } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/12883428/pexels-photo-12883428.jpeg?auto=compress&cs=tinysrgb&h=350')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-green-800 mb-4 tracking-tight">
            Haritha Sahayak
          </h1>
          
          {/* Malayalam Subtitle */}
          <p className="text-3xl md:text-4xl text-green-600 opacity-70 mb-2 font-light">
            ഹരിത സഹായി
          </p>
          
          {/* English Translation */}
          <p className="text-xl md:text-2xl text-green-700 mb-12 font-medium">
            Green Assistant
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed">
            Your AI-powered farming companion. Get instant expert advice on crops, pests, weather, and more in your preferred language.
          </p>
          
          {/* Language Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-green-800 mb-8">
              Choose Your Language / ഭാഷ തിരഞ്ഞെടുക്കുക
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* English Button */}
              <button
                onClick={() => setSelectedLanguage('english')}
                className={`group relative px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedLanguage === 'english'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-700 border-2 border-green-200 hover:border-green-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇬🇧</span>
                  <span>English</span>
                </div>
                {selectedLanguage === 'english' && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    ✓
                  </div>
                )}
              </button>
              
              {/* Malayalam Button */}
              <button
                onClick={() => setSelectedLanguage('malayalam')}
                className={`group relative px-12 py-6 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedLanguage === 'malayalam'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-700 border-2 border-green-200 hover:border-green-400'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span>മലയാളം</span>
                </div>
                {selectedLanguage === 'malayalam' && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    ✓
                  </div>
                )}
              </button>
            </div>
            
            {/* Continue Button */}
            {selectedLanguage && (
              <div className="mt-12 animate-fade-in">
                <button 
                  onClick={handleContinue}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-16 py-4 rounded-full text-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {selectedLanguage === 'english' ? 'Continue' : 'തുടരുക'}
                  <span className="ml-2">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-green-200 opacity-50">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-10 text-green-200 opacity-50">
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-green-600 opacity-75">
          Government of Kerala • Department of Agriculture
        </p>
      </div>
    </div>
  );
}

export default Index;