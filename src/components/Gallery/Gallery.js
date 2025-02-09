import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gallery } from '../../portfolio';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = useCallback((index) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setActiveIndex(prev => (prev >= gallery.length - 1 ? 0 : prev + 1));
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    setActiveIndex(prev => (prev <= 0 ? gallery.length - 1 : prev - 1));
  }, [gallery.length]);


  return (
    <>
    <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                <span className="block w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                    Heres to the crazy ones
                </span>
            </h1>
        </div>
    </section>
    
    <section className="w-full h-full select-none">
      {gallery.length === 0 ? (
        <div className="text-center p-8 text-red-500">
          No images to display
        </div>
      ) : (
        <div className="max-w-6xl mx-auto animate-fade-in-view">
          <ul id="gallery" className="grid grid-cols-2 gap-5 lg:grid-cols-5">
            {gallery.map((img) => (
              <li key={img}>
                <div 
                  role="button"
                  tabIndex="0"
                  onClick={() => openGallery(gallery.indexOf(img))}
                  onKeyDown={(e) => e.key === 'Enter' && openGallery(gallery.indexOf(img))}
                  className="cursor-zoom-in"
                >
                  <img
                    src={img}
                    className="object-cover w-full h-auto bg-gray-200 rounded aspect-[5/6] lg:aspect-[2/3] xl:aspect-[3/4]"
                    alt="Gallery item"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && createPortal(
        <div
          role="button"
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              closeGallery();
            }
          }}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50 cursor-zoom-out"
          onClick={closeGallery}
        >
          <div className="relative flex items-center justify-center w-11/12 xl:w-4/5 h-11/12">
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-0 flex items-center justify-center text-white translate-x-10 rounded-full cursor-pointer xl:-translate-x-24 2xl:-translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <img
              className="object-contain object-center w-full h-full select-none cursor-zoom-out"
              src={gallery[activeIndex]}
              alt=""
            />
            
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-0 flex items-center justify-center text-white -translate-x-10 rounded-full cursor-pointer xl:translate-x-24 2xl:translate-x-32 bg-white/10 w-14 h-14 hover:bg-white/20"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
    </>
  );
};

export default Gallery;