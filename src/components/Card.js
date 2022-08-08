import React from "react";
import Modal from "./Modal";
import Icon from "./Icon";

export default function Card({ id, images, text, score }) {
  var modal_name = `modal-${id}`;
  var badge_class = `badge ${
    score === 100
      ? "badge-primary"
      : score >= 80
      ? "badge-secondary"
      : "badge-accent"
  }`;

  return (
    <div key={text} class="card card-compact bg-base-300">
      <figure>
        <div class="rounded">
          <img src={images[0]} alt="meme" />
        </div>
      </figure>
      <div class="card-body flex-row justify-between items-center">
        <div>
          Score: <div class={badge_class}>{score}%</div>
        </div>
        <label for={modal_name} class="btn btn-sm btn-ghost normal-case gap-2">
          Text
          <Icon name="text" size="4" />
        </label>
      </div>
      <Modal name={modal_name} head="Keywords:" text={text} btnText="Close" />
    </div>
  );
}
