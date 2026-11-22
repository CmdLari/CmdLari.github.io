
import type { GameData } from '../types/GameData';

export const games: Partial<Record<string, GameData>> = {
  out_of_water: {
    title: 'Out of Water',
    tagline: 'when autumn days begin to darken.',
    introduction:
      'Out of Water is a mythic visual novel about love, survival, and choice - set in Watarholt, a northern Germanic village in the year 1 CE.',

    headerImage: '/images/games/out_of_water/OOW_LibraryHeader.png',

    info: {
      genre: 'Visual Novel, Dark Fantasy, Romance',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Renpy, Python',
    },

		pressKit: 'https://www.dropbox.com/scl/fo/tk8rkkhq6734erywgbx92/ABL4mhFFBk0xnu4AEM9i1t0?rlkey=yt3kquyfsomvotozvajncbk3t&st=jeu27nz8&dl=0',

    steamAppId: '3907840',
    youtubeId: 'O1YKkwF-cnA',

    abstract:
      'The harvest is done. The lake runs still. But something in Watarholt is wrong.\n' +
      'Watarholt is a quiet settlement of twelve longhouses, nestled among heaths, rivers, and birch forests. As summer fades you - like everyone in Watarholt - prepare for shorter days and colder nights: bringing in the harvest, gathering around fires, telling stories, and singing songs.\n' +
      'But the nights grow colder still when villagers begin to vanish... or wash up dead. The woods turn hostile. The waters, deadly. As tension rises, you’ll form bonds, face ancient horrors, and uncover something wicked beneath the surface.',

    screenshots: [
      '/images/games/out_of_water/Screenshot01.png',
      '/images/games/out_of_water/Screenshot02.png',
      '/images/games/out_of_water/Screenshot03.png',
      '/images/games/out_of_water/Screenshot04.png',
      '/images/games/out_of_water/Screenshot05.png',
      '/images/games/out_of_water/Screenshot07.png',
      '/images/games/out_of_water/Screenshot08.jpg',
      '/images/games/out_of_water/Screenshot10.jpg',
    ],
  },

	read_3am: {
    title: 'READ: 3AM',
    tagline: 'are you there?',
    introduction:
      'READ: 3AM tells the story of two lonely souls, the need to be seen, and something that should not be able to message you. Told through a mix of visual novel storytelling and chat-sim interactions, you\'ll navigate friendships, make choices, and get to know someone who shouldn\'t exist.',

    headerImage: '/images/games/read_3am/r3am_LibraryHeader.png',

    info: {
      genre: 'Visual Novel, Dark Fantasy, Romance',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Renpy, Python',
    },

		pressKit: '',

    steamAppId: '5243990',
    youtubeId: 'mPF9IRWkCw0',

    abstract:
      'Days spent in front of your screens, prepping instant noodles, staring out the window. Days spent without noticing that you might not be quite as solitary as you thought you were.\n' +
			'What if something - or someone - were desperately trying to get your attention?\n' +
			'What if you finally paid attention?\n' + 
			'READ: 3AM tells the story of two lonely souls, the need to be seen, and something that should not be able to message you.\n' +
			'Told through a mix of visual novel storytelling and chat-sim interactions, you\'ll spend much of the game talking through messages, choosing how to respond, and slowly shaping your relationship with whoever' +
			'- or whatever - is on the other side of the screen.',

    screenshots: [
      '/images/games/read_3am/screenshot_01.png',
      '/images/games/read_3am/screenshot_02.png',
      '/images/games/read_3am/screenshot_03.png',
      '/images/games/read_3am/screenshot_04.png',
      '/images/games/read_3am/screenshot_05.png',
      '/images/games/read_3am/screenshot_06.png',			
      '/images/games/read_3am/screenshot_07.png',
      '/images/games/read_3am/screenshot_08.png',
      '/images/games/read_3am/screenshot_09.png',			
      '/images/games/read_3am/screenshot_10.png',
      '/images/games/read_3am/screenshot_11.png',			
      '/images/games/read_3am/screenshot_12.png',			
    ],
  },

  banishing_you: {
    title: 'Banishing You',
    tagline: 'when your dreams manifest, don’t trust them!',
    introduction: 'Step into the world of Banishing You, a visual novel where choices shape your journey. Accept a mysterious invitation to a dream realm full of enigmatic characters and challenges. Navigate passive-aggressive comments, flirtatious strangers, and unravel a quest that could save or doom both worlds.',

    headerImage: '/images/games/banishing_you/BanishingYou_LibraryHeader.png',

    info: {
      genre: 'Visual Novel, Dark Fantasy, Romance',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Renpy, Python',
    },

		pressKit: 'https://www.dropbox.com/scl/fo/dcc77zmmj54nyazz95x17/AAlBniMIBrCbNB2e661IEWA?rlkey=8qibwdaqa8k67vyto4q3zdxgl&st=api3kdty&dl=0',

    abstract: 'You wake up in a mysterious forest with no idea how you got there - just a surreal invitation to a masquerade ball and a bad feeling.\n' + 
			'Navigating manipulative meetings and potential romance, you’ll find yourself in a realm where fears take form and emotions have teeth.\n' +
			'Every choice deepens a bond - or drives the world toward its undoing.\n' +
			'In this story you can choose to love, to trust, to save the world - or watch it all burn!',
    steamAppId: '2926910',
    youtubeId: 'IH2odr8Cch8',

    screenshots: [
      '/images/games/banishing_you/BanishingYou_Screenshot1.png',
      '/images/games/banishing_you/BanishingYou_Screenshot2.png',
      '/images/games/banishing_you/BanishingYou_Screenshot3.png',
      '/images/games/banishing_you/BanishingYou_Screenshot4.png',
      '/images/games/banishing_you/BanishingYou_Screenshot5.png',
      '/images/games/banishing_you/BanishingYou_Screenshot6.png',
    ],
  },

  ccc: {
    title: 'Crow\'s Curated Closet',
    tagline: 'build your boutique - style your space - herd your cats',
    introduction: 'In Crow’s Curated Closet, you step into the role of the owner of a small gothic boutique, tasked with growing it into a thriving fashion empire. Starting with limited space, bare floors, and a handful of items, you’ll gradually build, expand, and refine your shop into a carefully curated experience that keeps customers coming back.',

    headerImage: '/images/games/ccc/ccc_LibraryHeader.png',

    info: {
      genre: 'Shop Simulator, Pixel Game, Dress-Up, Cozy',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Pygame, Python',
    },

		pressKit: 'https://www.dropbox.com/scl/fo/0h0fdo0t0q5yj1m8gcxgh/AC-v6TwZF6sptaYm4nLmf78?rlkey=sw1drwm854gqo1w72l4lq8v3f&st=djrfrbkf&dl=0',

    abstract: 'At its core, this game is about creative freedom.\n' +
		'Design and decorate your boutique exactly the way you want - from soft, cozy arrangements to bold gothic aesthetics. Place furniture, organize shelves, and shape your layout to create an inviting and efficient shopping space.\n' +
		'As your store grows, you’ll unlock new styles, items, and decorative options, allowing your boutique to evolve alongside your strategy.\n' +
		'Cater to different customer preferences, refine your product selection, and optimise your setup to maximise profit.' +
		'To keep up with demand, you’ll build a growing team of cats who take over tasks around the shop. While they handle the day-to-day work, you can focus on expansion, design, and turning your boutique into a profitable, ever-expanding business.',
    steamAppId: '4565100',
    youtubeId: 'OGtfGnmYaBw',

    screenshots: [
      '/images/games/ccc/CCC_screenshot_1.png',
      '/images/games/ccc/CCC_screenshot_2.png',
      '/images/games/ccc/CCC_screenshot_3.png',
      '/images/games/ccc/CCC_screenshot_4.png',
      '/images/games/ccc/CCC_screenshot_5.png',
      '/images/games/ccc/CCC_screenshot_6.png',
			'/images/games/ccc/CCC_screenshot_7.png',
    ],
  },

  orpheus_revenge: {
    title: 'Orpheus\'s Revenge',
    tagline: 'he came back for love. he stayed for vengeance',
    introduction: 'death isn’t the end - and you’re armed with grief, wrath, and hopefully good aim.',

    headerImage: '/images/games/orpheus_revenge/orpheus_revenge_LibraryHeader.png',

    info: {
      genre: 'Arcade, Clicker, Pixel Graphics',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Pygame, Python',
    },

		pressKit: 'https://www.dropbox.com/scl/fo/7sxe4ispzxoeacem4iyaj/AGkxBgvM39XVEp5KfBTx1Og?rlkey=sftz86tzx94hjol3fuo7xf9xx&st=2cjv0unv&dl=0',

    abstract: 'In this fast-paced, 80s-infused pixel shooter, you descend once more into the underworld to challenge its lords, beasts, and demons.\n' +
		'Fight your way through vibrant hellscapes, accompanied by retro synths, biting dialogue, and enemies that hit harder than your grief. Click to shoot. Hope to survive.',
    steamAppId: '3344190',
    youtubeId: 'n4P__Zi6YwE',

    screenshots: [
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_1.png',
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_2.png',
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_3.png',
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_4.png',
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_5.png',
      '/images/games/orpheus_revenge/OrpheusRevenge_screenshot_6.png',
    ],
  },	

  tenfold_tales: {
    title: 'Tenfold Tales',
    tagline: 'a hundred tiles. a dozen choices. one little bunny’s fate',
    introduction: 'Make some tea, dim the lights, and get lost in a patchwork world where every tile hides a tale.',

    headerImage: '/images/games/tenfold_tales/tenfold_tales_LibraryHeader.png',

    info: {
      genre: 'Cozy, Choose Your Own Adventure, Pixel Graphics',
      role: 'Programming, Art, Game Design, UX Design, Writing',
      builtWith: 'Pygame, Python',
    },

		pressKit: 'https://www.dropbox.com/scl/fo/oiie247b41or3sd02ueh4/AMUXQJwZ-JIt5pOBwHHmsso?rlkey=ucsu1e0mxi82z2txq5in2787v&st=mllo041f&dl=0',

    abstract: 'Guide Lapin, a curious bunny girl, across a magical patchwork world - one mysterious tile at a time.\n' +
		'Explore a 100-tile board filled with whimsical encounters, tough decisions, and stats-driven exploration. Each run reshuffles the map and its story.\n' +
		'Will you thrive on luck, logic, or sheer bunny stubbornness? Will you thrive on luck, logic, or sheer bunny stubbornness? Each game is a self-contained journey, full of colour, stats-based gambles, and little stories.\n' +
		'Play again and again to uncover new tiles, write new stories, and let your bunny girl explore more.',
    steamAppId: '3640130',
    youtubeId: 'Q-s14W1wtic',

    screenshots: [
      '/images/games/tenfold_tales/TenfoldTales_screenshot1.png',
      '/images/games/tenfold_tales/TenfoldTales_screenshot2.png',
      '/images/games/tenfold_tales/TenfoldTales_screenshot3.png',
      '/images/games/tenfold_tales/TenfoldTales_screenshot4.png',
      '/images/games/tenfold_tales/TenfoldTales_screenshot5.png',
      '/images/games/tenfold_tales/TenfoldTales_screenshot6.png',
    ],
  },	
};
