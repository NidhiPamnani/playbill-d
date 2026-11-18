import type { FormEvent } from "react";
import type { Show } from "../types";
import "./LogDialog.css"

type LogDialogProps = {
  onClose: () => void;
  onAdd: (show: Show) => void;
};

export default function LogDialog({ onClose, onAdd }: LogDialogProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    onAdd({
      title: String(form.get("title")),
      venue: String(form.get("venue")),
      date: new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date(String(form.get("date")) + "T12:00:00")),
      rating: Number(form.get("rating")),
    });
    onClose();
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="close-button" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
        <p className="eyebrow">New diary entry</p>
        <h2 id="dialog-title">Log a show</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Show title
            <input name="title" required placeholder="e.g. The Importance of Being Earnest" />
          </label>
          <label>
            Venue
            <input name="venue" required placeholder="e.g. National Theatre" />
          </label>
          <div className="form-row">
            <label>
              Date watched
              <input name="date" type="date" required />
            </label>
            <label>
              Rating
              <select name="rating" defaultValue="4.5">
                <option value="5">5.0</option>
                <option value="4.5">4.5</option>
                <option value="4">4.0</option>
                <option value="3.5">3.5</option>
                <option value="3">3.0</option>
              </select>
            </label>
          </div>
          <button className="primary-button submit-button" type="submit">
            Add to diary
          </button>
        </form>
      </div>
    </div>
  );
}