
import { useState } from 'react';
import Lightbox from './Lightbox';
import './GalleryPage.css';

const IMAGE_PATH = '/images/galleries/design';

const createGallery = (prefix: string) =>
  Array.from(
    { length: 12 },
    (_, index) =>
      `${IMAGE_PATH}/${prefix}${String(index + 1).padStart(2, '0')}.jpg`
  );

const designSections = [
  {
    title: 'Design',
    images: createGallery('Design'),
    prices:
      '1 h: 250€ || 2 h: 375€ || 3 h: 500€ || 1 d: 850€',
    references: 'Bad Blood Exhaust || Schwech und Pefel || Asuka || Words of Farewell || Heartbound || CCO || Melody of my Heartbeat',
  },
];

function DesignPage() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setActiveGallery(images);
    setActiveIndex(index);
  };

  return (
    <main className="image-page">
      {designSections.map((section) => (
        <section
          className="image-section"
          key={section.title}
        >
          <h2>{section.title}</h2>

          <div className="image-gallery">
            {section.images.map((image, index) => (
              <img
                key={image}
                src={image}
                alt={`${section.title} images ${index + 1}`}
                loading="lazy"
                onClick={() =>
                  openLightbox(section.images, index)
                }
              />
            ))}
          </div>

          <div className="image-info">
            <p>
              <strong>PRICES:</strong>
              <span>{section.prices}</span>
            </p>

            {section.references && (
              <p>
                <strong>REFERENCES:</strong>
                <span>{section.references}</span>
              </p>
            )}
          </div>
        </section>
      ))}

      <div className="image-contact">
        <strong>CONTACT:</strong>

        <a href="mailto:larissapychlau@gmail.com">
          larissapychlau@gmail.com
        </a>

        <span>||</span>

        <a href="tel:+4917680767678">
          +49 176 80 76 76 78
        </a>
      </div>

      {activeGallery && (
        <Lightbox
          images={activeGallery}
          index={activeIndex}
          onClose={() => setActiveGallery(null)}
          onChange={setActiveIndex}
        />
      )}
    </main>
  );
}

export default DesignPage;
