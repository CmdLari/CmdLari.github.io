import { useEffect, useState } from "react";

type Star = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    opacity: number;
    symbol: string;
};

function FallingStars() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const symbols = ["★", "✦", "✧", "◆", "●"];

        const generatedStars: Star[] = Array.from(
            { length: 80 },
            (_, index) => ({
                id: index,
                left: Math.random() * 100,
                size: 8 + Math.random() * 80,
                duration: 8 + Math.random() * 15,
                delay: -(Math.random() * 20),
                opacity:100,
                symbol:
                    symbols[Math.floor(Math.random() * symbols.length)],
            })
        );

        setStars(generatedStars);
    }, []);

    return (
        <div className="falling-stars" aria-hidden="true">
            {stars.map((star) => (
                <span
                    key={star.id}
                    className="falling-star"
                    style={{
                        left: `${star.left}%`,
                        fontSize: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                        opacity: star.opacity,
                    }}
                >
                    {star.symbol}
                </span>
            ))}
        </div>
    );
}

export default FallingStars;