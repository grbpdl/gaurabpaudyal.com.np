import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-full">
      <img
        src={images[index]}
        alt={`Award image ${index + 1}`}
        className="object-cover w-full h-full transition-all duration-500"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-1 rounded-full text-white"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}
export default ImageCarousel;
