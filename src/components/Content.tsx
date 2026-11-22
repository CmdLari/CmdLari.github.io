
import type { Section, Subsection } from '../App';
import GamePage from './GamePage';
import TokyoPage from './TokyoPage';
import PhotographyPage from './PhotographyPage';
import DesignPage from './DesignPage';
import IllustrationPage from './IllustrationPage';
import AboutmePage from './AboutMe';
import ImprintPage from './Imprint';
import { games } from '../data/games';
import './Content.css';

interface ContentProps {
  activePage: Section;
  activeSubpage: Subsection;
}

function Content({ activePage, activeSubpage }: ContentProps) {
  const game =
    activePage === 'Games' && activeSubpage in games
      ? games[activeSubpage as keyof typeof games]
      : undefined;

	return (
	<section className="content-scroll">
			<div className="content">
			<div className="content-inner">
					{game && <GamePage game={game} />}

					{activePage === 'Galleries' && activeSubpage === 'tokyo' && (
					<TokyoPage />
					)}

					{activePage === 'Galleries' && activeSubpage === 'photography' && (
					<PhotographyPage />
					)}

					{activePage === 'Galleries' && activeSubpage === 'design' && (
					<DesignPage />
					)}

					{activePage === 'Galleries' && activeSubpage === 'illustration' && (
					<IllustrationPage />
					)}	


					{activePage === 'About' && activeSubpage === 'about_me' && (
					<AboutmePage/>
					)}		

					{activePage === 'About' && activeSubpage === 'imprint' && (
					<ImprintPage />
					)}		
																			
			</div>
			</div>
	</section>
	);
}

export default Content;
