import { useEffect, useState } from "react";

interface GalleryProps {
    images: string[];
}

function Gallery({ images }: GalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const closeGallery = () => {
        setSelectedIndex(null);
    };

    const previousImage = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === 0
                ? images.length - 1
                : selectedIndex - 1
        );
    };

    const nextImage = () => {
        if (selectedIndex === null) return;

        setSelectedIndex(
            selectedIndex === images.length - 1
                ? 0
                : selectedIndex + 1
        );
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (selectedIndex === null) return;

            if (event.key === "Escape") closeGallery();
            if (event.key === "ArrowLeft") previousImage();
            if (event.key === "ArrowRight") nextImage();
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <>
            <div className="gallery">
                {images.map((image, index) => (
                    <button
                        className="gallery__item"
                        key={image}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <img src={image} alt="" />
                    </button>
                ))}
            </div>

            {selectedIndex !== null && (
                <div
                    className="lightbox"
                    onClick={closeGallery}
                >
                    <button
                        className="lightbox__close"
                        onClick={closeGallery}
                    >
                        ×
                    </button>

                    <button
                        className="lightbox__arrow lightbox__arrow--left"
                        onClick={(event) => {
                            event.stopPropagation();
                            previousImage();
                        }}
                    >
                        ‹
                    </button>

                    <img
                        className="lightbox__image"
                        src={images[selectedIndex]}
                        alt=""
                        onClick={(event) => event.stopPropagation()}
                    />

                    <button
                        className="lightbox__arrow lightbox__arrow--right"
                        onClick={(event) => {
                            event.stopPropagation();
                            nextImage();
                        }}
                    >
                        ›
                    </button>

                    <div className="lightbox__counter">
                        {selectedIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}

export default Gallery;