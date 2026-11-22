
import './TokyoPage.css';

const TOKYO_URL = 'https://lapys-studio.com/TokyoMap/';

function TokyoPage() {
  return (
    <section className="tokyo-page">
      <h1>Tokyo Photo Map</h1>

      <p className="tokyo-intro">
        A personal collection of photographs taken across Tokyo,
        spanning different years, neighbourhoods and journeys.
        Explore the city through an interactive railway map,
        with photographs and ambient sounds attached to its stations.
      </p>

      <a
        className="tokyo-preview"
        href={TOKYO_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore Tokyo Photo Map in a new tab"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/galleries/tokyo-map.png`}
          alt="Preview of the interactive Tokyo Photo Map"
        />
        <span className="tokyo-preview-label">
          EXPLORE TOKYO +
        </span>
      </a>
    </section>
  );
}

export default TokyoPage;
