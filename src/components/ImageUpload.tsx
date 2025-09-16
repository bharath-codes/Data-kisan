import { useState, useRef } from 'react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  language: 'english' | 'malayalam';
}

function ImageUpload({ onImageUpload, language }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageUpload(file);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          dragActive
            ? 'border-green-500 bg-green-50'
            : uploadedImage
            ? 'border-green-400 bg-green-50'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
        />
        
        {uploadedImage ? (
          <div className="space-y-4">
            <img
              src={uploadedImage}
              alt="Uploaded crop"
              className="w-32 h-32 object-cover rounded-lg mx-auto border-2 border-green-200"
            />
            <p className="text-green-600 font-medium">
              {language === 'english' ? 'Image uploaded successfully!' : 'ചിത്രം വിജയകരമായി അപ്‌ലോഡ് ചെയ്തു!'}
            </p>
            <button
              onClick={onButtonClick}
              className="text-green-600 hover:text-green-700 underline text-sm"
            >
              {language === 'english' ? 'Upload different image' : 'മറ്റൊരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക'}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto text-gray-400">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 mb-2">
                {language === 'english' 
                  ? 'Upload a photo of your crop or plant'
                  : 'നിങ്ങളുടെ വിളയുടെയോ ചെടിയുടെയോ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക'
                }
              </p>
              <button
                onClick={onButtonClick}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                {language === 'english' ? 'Choose File' : 'ഫയൽ തിരഞ്ഞെടുക്കുക'}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              {language === 'english' 
                ? 'Or drag and drop an image here'
                : 'അല്ലെങ്കിൽ ഇവിടെ ഒരു ചിത്രം വലിച്ചിട്ടുക'
              }
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;