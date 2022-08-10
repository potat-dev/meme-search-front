import React from "react";
import Modal from "./Modal";
import Icon from "./Icon";

export default function Card({ id, images, text, score }) {
  var modal_name = `modal-${id}`;
  var badge_class = `badge badge-lg ${
    score === 100
      ? "badge-primary"
      : score >= 80
      ? "badge-secondary"
      : "badge-accent"
  }`;

  return (
    <div key={text} className="card card-compact bg-base-300">
      <figure>
        <div className="rounded">
          <img src={images[0]} alt="meme" />
        </div>
      </figure>
      <div className="card-body flex-row justify-between items-center">
        <div>
          <div className={badge_class}>{score}% match</div>
        </div>
        <label
          htmlFor={modal_name}
          className="btn btn-sm btn-ghost normal-case gap-1.5"
        >
          Tags
          <Icon name="tag" className="h-5 w-5" />
        </label>
      </div>
      <Modal
        name={modal_name}
        head="Keywords & Tags:"
        text={text}
        btnText="Close"
      />
    </div>
  );
}
