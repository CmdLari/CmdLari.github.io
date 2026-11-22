
import { useState } from 'react';
import Lightbox from './Lightbox';
import './GalleryPage.css';

const IMAGE_PATH = '/images/galleries/illustration';

const createGallery = (prefix: string) =>
  Array.from(
    { length: 12 },
    (_, index) =>
      `${IMAGE_PATH}/${prefix}${String(index + 1).padStart(2, '0')}.jpg`
  );

const illustrationSections = [
  {
    title: 'Illustration',
    images: createGallery('Illustration'),
    vector:
      '(S) ab / from 60€ || (M) ab / from 120€ || (L) ab / from 250€',
    illustation:
			'ab / from 100€ || (B/W) ab / from 150€ || (Coloured) ab / from 300€\n',
		scribble:
			'(S) ab / from 30€ ||(M) ab / from 60€ || (L) ab / from 100€',
    references: 'dm || you || GEERS || Fuchs trifft Hund || Wiferion || Jung Fruchtsäfte || Zsuzsannas || Superfood Sauces || Bartsch || Enno Lenze || Wefugees || QueerGeist e.V',
  },
];

function IllustrationPage() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (images: string[], index: number) => {
    setActiveGallery(images);
    setActiveIndex(index);
  };

  return (
    <main className="image-page">
      {illustrationSections.map((section) => (
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
              <strong>VECTOR / PICTOGRAM:</strong>
              <span>{section.vector}</span>
              <strong>ILLUSTRATION / CHARACTER DESIGN:</strong>
              <span>{section.illustation}</span>
              <strong>SCRIBBLE:</strong>
              <span>{section.scribble}</span>													
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

export default IllustrationPage;
