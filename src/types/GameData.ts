
export interface GameData {
  title: string;
  tagline: string;
  introduction: string;
  headerImage: string;

  info: {
    genre: string;
    role: string;
    builtWith: string;
  };

  steamAppId?: string;
  abstract: string;
  youtubeId?: string;
  screenshots: string[];
  pressKit?: string;
}
