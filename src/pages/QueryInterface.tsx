import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import VoiceInput from '../components/VoiceInput';
import ImageUpload from '../components/ImageUpload';

function QueryInterface() {
  const location = useLocation();
  const [language, setLanguage] = useState<'english' | 'malayalam'>('english');
  const [query, setQuery] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    if (location.state?.language) {
      setLanguage(location.state.language);
    }
  }, [location.state]);

  const handleVoiceInput = (transcript: string) => {
    setQuery(transcript);
  };

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
  };

  const handleSubmit = async () => {
    if (!query.trim() && !uploadedImage) return;
    
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const sampleResponse = language === 'english' 
        ? "Based on the symptoms you described, your banana plants likely have leaf spot disease. Here's what you should do:\n\n1. Remove affected leaves immediately\n2. Apply copper-based fungicide spray\n3. Ensure proper drainage around plants\n4. Avoid overhead watering\n5. Apply organic compost to boost plant immunity\n\nFor severe cases, contact your local Krishi Bhavan officer."
        : "നിങ്ങൾ വിവരിച്ച ലക്ഷണങ്ങളുടെ അടിസ്ഥാനത്തിൽ, നിങ്ങളുടെ വാഴച്ചെടികൾക്ക് ഇല പാട് രോഗം ഉണ്ടാകാം. ചെയ്യേണ്ടത്:\n\n1. ബാധിച്ച ഇലകൾ ഉടനെ നീക്കം ചെയ്യുക\n2. കോപ്പർ അടിസ്ഥാനമാക്കിയ കുമിൾനാശിനി സ്പ്രേ ചെയ്യുക\n3. ചെടികൾക്ക് ചുറ്റും നല്ല ഡ്രെയിനേജ് ഉറപ്പാക്കുക\n4. മുകളിൽ നിന്ന് വെള്ളം ഒഴിക്കുന്നത് ഒഴിവാക്കുക\n5. ചെടിയുടെ പ്രതിരോധശേഷി വർദ്ധിപ്പിക്കാൻ ജൈവ കമ്പോസ്റ്റ് പ്രയോഗിക്കുക\n\nഗുരുതരമായ കേസുകളിൽ, നിങ്ങളുടെ പ്രാദേശിക കൃഷിഭവൻ ഓഫീസറെ ബന്ധപ്പെടുക.";
      
      setResponse(sampleResponse);
      setIsLoading(false);
    }, 2000);
  };

  const handleNewQuery = () => {
    setQuery('');
    setUploadedImage(null);
    setResponse(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 text-green-700 hover:text-green-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">
              {language === 'english' ? 'Back to Home' : 'ഹോമിലേക്ക് മടങ്ങുക'}
            </span>
          </Link>
          
          <div className="text-center">
            <h1 className="text-2xl font-bold text-green-800">Haritha Sahayak</h1>
            <p className="text-sm text-green-600">ഹരിത സഹായി</p>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-green-700">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            <span>{language === 'english' ? 'English' : 'മലയാളം'}</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!response ? (
          /* Query Input Section */
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                {language === 'english' 
                  ? 'How can I help you today?' 
                  : 'ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കാം?'
                }
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {language === 'english'
                  ? 'Ask questions about crops, pests, weather, fertilizers, or upload a photo of your plant for diagnosis.'
                  : 'വിളകൾ, കീടങ്ങൾ, കാലാവസ്ഥ, വളങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദ്യങ്ങൾ ചോദിക്കുക അല്ലെങ്കിൽ രോഗനിർണയത്തിനായി നിങ്ങളുടെ ചെടിയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക.'
                }
              </p>
            </div>

            {/* Input Methods */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Text Input */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">
                  {language === 'english' ? 'Type Your Question' : 'നിങ്ങളുടെ ചോദ്യം ടൈപ്പ് ചെയ്യുക'}
                </h3>
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={language === 'english' 
                    ? 'e.g., My tomato plants have yellow leaves. What should I do?'
                    : 'ഉദാ: എന്റെ തക്കാളി ചെടികളുടെ ഇലകൾ മഞ്ഞയാണ്. എന്ത് ചെയ്യണം?'
                  }
                  className="w-full h-32 p-4 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                />
                
                <div className="mt-4 flex justify-center">
                  <VoiceInput onVoiceInput={handleVoiceInput} language={language} />
                </div>
              </div>

              {/* Image Upload */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4 text-center">
                  {language === 'english' ? 'Upload Plant Photo' : 'ചെടിയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക'}
                </h3>
                <ImageUpload onImageUpload={handleImageUpload} language={language} />
              </div>
            </div>

            {/* Submit Button */}
            {(query.trim() || uploadedImage) && (
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading 
                    ? (language === 'english' ? 'Analyzing...' : 'വിശകലനം ചെയ്യുന്നു...')
                    : (language === 'english' ? 'Get Expert Advice' : 'വിദഗ്ധ ഉപദേശം നേടുക')
                  }
                  {isLoading && <span className="ml-2 animate-spin">⏳</span>}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Response Section */
          <div className="space-y-6">
            {/* Query Summary */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                {language === 'english' ? 'Your Query:' : 'നിങ്ങളുടെ ചോദ്യം:'}
              </h3>
              <p className="text-green-700">{query}</p>
              {uploadedImage && (
                <p className="text-sm text-green-600 mt-2">
                  {language === 'english' ? '+ Image uploaded' : '+ ചിത്രം അപ്‌ലോഡ് ചെയ്തു'}
                </p>
              )}
            </div>

            {/* AI Response */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800">
                    {language === 'english' ? 'Expert Advice' : 'വിദഗ്ധ ഉപദേശം'}
                  </h3>
                  <p className="text-sm text-green-600">
                    {language === 'english' ? 'AI-powered recommendation' : 'AI-പവർഡ് ശുപാർശ'}
                  </p>
                </div>
              </div>
              
              <div className="prose prose-green max-w-none">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {response}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleNewQuery}
                className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                {language === 'english' ? 'Ask Another Question' : 'മറ്റൊരു ചോദ്യം ചോദിക്കുക'}
              </button>
              
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors duration-200">
                {language === 'english' ? 'Contact Local Officer' : 'പ്രാദേശിക ഓഫീസറെ ബന്ധപ്പെടുക'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryInterface;