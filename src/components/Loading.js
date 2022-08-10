import React from "react";
import Icon from "./Icon";

export default function Loading({ isLoading, error }) {
  return (
    <>
      {isLoading && (
        <div className="flex flex-col justify-center items-center mt-12">
          <Icon name="loading" className="h-8 w-8 animate-spin" />
          <p className="mt-2">Loading</p>
        </div>
      )}

      {error && (
        <div className="flex flex-col justify-center items-center mt-12">
          <Icon name="warning" className="h-8 w-8" />
          <p className="mt-2">There is a problem fetching the data:</p>
          <p>{error.toString()}</p>
        </div>
      )}
    </>
  );
}
