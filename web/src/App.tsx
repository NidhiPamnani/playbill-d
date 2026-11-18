import { useMemo, useState } from "react";
import type { NavName, Show } from "./types";
import { sampleShows } from "./data/sampleShows";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import ShowCard from "./components/ShowCard";
import LogDialog from "./components/LogDialog";
import "./App.css"

export default function App() {
  const [shows, setShows] = useState<Show[]>(sampleShows);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<NavName>("home");

  // Placeholder logic from the mock. Replace once shows have real dates.
  const showsThisYear = useMemo(
    () => shows.filter((show) => show.date.includes("2025")).length + 8,
    [shows],
  );

  function addShow(show: Show) {
    setShows((current) => [show, ...current]);
  }

  return (
    <div className="app-shell">
      <Header onProfileClick={() => setActiveNav("profile")} />

      <main>
        {shows.length > 0 ? (
          <>
            <section className="welcome" aria-labelledby="welcome-title">
              <p className="eyebrow">Your theatre diary</p>
              <div className="welcome-row">
                <h1 id="welcome-title">
                  Every show,
                  <br />
                  <em>remembered.</em>
                </h1>
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => setIsDialogOpen(true)}
                >
                  <span>Log a show</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
              </div>
            </section>

            <section className="stats" aria-label="Your theatre statistics">
              <div className="stat">
                <strong>{showsThisYear}</strong>
                <span>Shows seen this year</span>
              </div>
              <div className="stat-divider" />
              <div className="stat recent-stat">
                <span>Most recently logged</span>
                <strong>{shows[0].title}</strong>
                <small>{shows[0].date}</small>
              </div>
            </section>

            <section className="recent-section" aria-labelledby="recent-heading">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">From your diary</p>
                  <h2 id="recent-heading">Recently logged</h2>
                </div>
                <button type="button" className="text-button" onClick={() => setActiveNav("diary")}>
                  View diary <span aria-hidden="true">↗</span>
                </button>
              </div>
              <div className="shows-grid">
                {shows.slice(0, 4).map((show, index) => (
                  <ShowCard show={show} key={`${show.title}-${index}`} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="empty-state">
            <div className="empty-ticket" aria-hidden="true">
              PB
            </div>
            <p className="eyebrow">Your theatre diary</p>
            <h1>Your next great night out belongs here.</h1>
            <p>Start your diary with a show you’ve seen.</p>
            <button className="primary-button" type="button" onClick={() => setIsDialogOpen(true)}>
              <span>Log a show</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </section>
        )}
      </main>

      <BottomNav active={activeNav} onChange={setActiveNav} />

      {isDialogOpen && (
        <LogDialog onClose={() => setIsDialogOpen(false)} onAdd={addShow} />
      )}
    </div>
  );
}