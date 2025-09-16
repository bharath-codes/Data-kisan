import { useState } from 'react';

interface VoiceInputProps {
  onVoiceInput: (transcript: string) => void;
  language: 'english' | 'malayalam';
}

function VoiceInput({ onVoiceInput, language }: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);

  const handleVoiceInput = () => {
    if (isRecording) {
      setIsRecording(false);
      // Simulate voice input completion
      const sampleText = language === 'english' 
        ? "My banana plants have brown spots on the leaves. What should I do?"
        : "എന്റെ വാഴയിലെ ഇലകളിൽ തവിട്ട് പാടുകൾ ഉണ്ട്. എന്ത് ചെയ്യണം?";
      onVoiceInput(sampleText);
    } else {
      setIsRecording(true);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleVoiceInput}
        className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isRecording
            ? 'bg-red-500 hover:bg-red-600 animate-pulse'
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {isRecording ? (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <rect x="6" y="6" width="8" height="8" rx="1" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
        )}
        
        {isRecording && (
          <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
        )}
      </button>
      
      <p className="text-sm text-gray-600 text-center max-w-xs">
        {isRecording 
          ? (language === 'english' ? 'Recording... Tap to stop' : 'റെക്കോർഡിംഗ്... നിർത്താൻ ടാപ്പ് ചെയ്യുക')
          : (language === 'english' ? 'Tap to speak' : 'സംസാരിക്കാൻ ടാപ്പ് ചെയ്യുക')
        }
      </p>
    </div>
  );
}

export default VoiceInput;