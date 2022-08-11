import React from "react";
import Range from "./Range";
import config from "../Config";

export default function SettingsModal({ id }) {
  return (
    <>
      <input type="checkbox" id={id} class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for={id}
            class="btn btn-md btn-square btn-ghost absolute right-2 top-2 hidden sm:inline-flex"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold text-center sm:text-left">
            Search Settings
          </h3>
          <div class="flex flex-col sm:flex-row gap-2 my-2 sm:gap-6">
            <div class="basis-1/2">
              <label class="label">
                <span class="label-text">Results Count</span>
              </label>
              <div class="btn-group w-full">
                {config.results_count.map((n) => (
                  <input
                    type="radio"
                    name="options"
                    data-title={n}
                    class="btn w-1/4"
                  />
                ))}
              </div>
            </div>
            <div class="basis-1/2">
              <Range
                name="Min Match ratio"
                placeholder="Ratio"
                step={5}
                min={50}
              />
            </div>
          </div>
          <label class="label">
            <span class="label-text">Search Engine settings</span>
          </label>
          <div class="btn-group">
            <input
              type="radio"
              name="options-2"
              data-title="Fuzzy search"
              class="btn w-1/2 normal-case"
            />
            <input
              type="radio"
              name="options-2"
              data-title="Keyword search"
              class="btn w-1/2 normal-case"
            />
          </div>
          <div class="modal-action sm:hidden">
            <label for={id} class="btn w-full">
              apply
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
