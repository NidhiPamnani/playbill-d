import type { Show } from "../types";
import StarRating from "./StarRating";
import "./ShowCard.css"

type ShowCardProps = {
  show: Show;
};

export default function ShowCard({ show }: ShowCardProps) {
  return (
    <article className="show-card">
      <div className="show-image-wrap">
        {show.image ? (
          <img
            className="show-image"
            src={show.image}
            alt={show.imageAlt ?? ""}
            style={{ objectPosition: show.position }}
          />
        ) : (
          <div className="image-placeholder" role="img" aria-label="No photo added">
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M6 9h4l1.5-2h9L22 9h4a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2Z" />
              <circle cx="16" cy="17" r="5" />
            </svg>
            <span>No photo from this night</span>
          </div>
        )}
      </div>
      <div className="show-copy">
        <div>
          <h3>{show.title}</h3>
          <p className="venue">{show.venue}</p>
        </div>
        <div className="card-meta">
          <time>{show.date}</time>
          <StarRating rating={show.rating} />
        </div>
      </div>
    </article>
  );
}