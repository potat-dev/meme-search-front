import React from "react";
import Icon from "./Icon";

export default function Loading({ isLoading, error }) {
  return (
    <>
      {isLoading && (
        <div class="flex flex-col justify-center items-center mt-12">
          <Icon name="loading" className="h-8 w-8 animate-spin" />
          <p class="mt-2">Loading</p>
        </div>
      )}

      {error && (
        <div class="flex flex-col justify-center items-center mt-12">
          <Icon name="warning" className="h-8 w-8" />
          <p class="mt-2">There is a problem fetching the data:</p>
          <p>{error.toString()}</p>
        </div>
      )}
    </>
  );
}
