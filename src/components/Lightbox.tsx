
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

type LightboxProps = {
  images: string[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: LightboxProps) {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowRight') {
        onChange((index + 1) % images.length);
      }

      if (event.key === 'ArrowLeft') {
        onChange((index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [index, images.length, onClose, onChange]);

  if (!images.length) return null;

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Screenshot viewer"
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      <button
        className="lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous screenshot"
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`Screenshot ${index + 1}`}
        onClick={(event) => event.stopPropagation()}
      />

      <button
        className="lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index + 1) % images.length);
        }}
        aria-label="Next screenshot"
      >
        ›
      </button>

      <div className="lightbox-counter">
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
}

export default Lightbox;
