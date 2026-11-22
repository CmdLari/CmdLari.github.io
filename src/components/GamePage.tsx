
import type { GameData } from '../types/GameData';
import { useState } from 'react';
import Lightbox from './Lightbox';
import './GamePage.css';

interface GamePageProps {
  game: GameData;
}

function GamePage({ game }: GamePageProps) {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
	
  return (
    <article className="game-page">

      {/* HEADER IMAGE */}
      <img
        className="game-header"
        src={game.headerImage}
        alt={game.title}
      />

      {/* TITLE & INTRODUCTION */}
      <header className="game-heading">
        <h1>{game.title}</h1>
        <h2>{game.tagline}</h2>
        <p>{game.introduction}</p>
      </header>

      {/* INFORMATION PANEL */}
			<div className="game-info">
				<p><strong>Genre:</strong> {game.info.genre}</p>
				<p><strong>Role:</strong> {game.info.role}</p>
				<p><strong>Built with:</strong> {game.info.builtWith}</p>

				{game.pressKit && (
					<a
						className="game-presskit-button"
						href={game.pressKit}
						target="_blank"
						rel="noopener noreferrer"
					>
						PRESS KIT ↗
					</a>
				)}
			</div>

      {/* STEAM EMBED */}
      {game.steamAppId && (
        <section className="game-steam">
          <iframe
            title={`${game.title} on Steam`}
            src={`https://store.steampowered.com/widget/${game.steamAppId}/`}
            width="100%"
            height="190"
            loading="lazy"
          />
        </section>
      )}

      {/* ABSTRACT */}
      <section className="game-abstract">
        {game.abstract}
      </section>

      {/* YOUTUBE EMBED */}
      {game.youtubeId && (
        <section className="game-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${game.youtubeId}`}
            title={`${game.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </section>
      )}


		{/* SCREENSHOT GALLERY */}
		{game.screenshots.length > 0 && (
			<>
				<div className="game-gallery">
					{game.screenshots.map((src, index) => (
						<img
							key={src}
							src={src}
							alt={`${game.title} screenshot ${index + 1}`}
							loading="lazy"
							onClick={() => setLightboxIndex(index)}
						/>
					))}
				</div>

				{lightboxIndex !== null && (
					<Lightbox
						images={game.screenshots}
						index={lightboxIndex}
						onClose={() => setLightboxIndex(null)}
						onChange={setLightboxIndex}
					/>
				)}
			</>
		)}

    </article>
  );
}

export default GamePage;
