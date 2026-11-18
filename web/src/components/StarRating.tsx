import "./ShowCard.css"

type StarRatingProps = {
  rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(Math.max(rating - index, 0), 1);
        return (
          <span className="star" key={index} aria-hidden="true">
            <span className="star-empty">★</span>
            <span className="star-fill" style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        );
      })}
      <span className="rating-number">{rating.toFixed(1)}</span>
    </div>
  );
}