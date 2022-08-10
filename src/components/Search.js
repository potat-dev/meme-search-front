import React from "react";
import Icon from "./Icon";

export default function Search() {
  return (
    // full width container with search bar and search button
    <div className="py-4 flex w-full justify-center items-center gap-3">
      <input
        type="text"
        placeholder="Search for memes..."
        className="input input-bordered w-full max-w-lg focus:outline-none"
      />
      <button className="btn gap-2 normal-case">
        <Icon name="settings" className="h-5 w-5" />
      </button>
      <button className="btn btn-primary gap-2 normal-case">
        Search
        <Icon name="search" className="h-5 w-5" />
      </button>
    </div>
  );
}
