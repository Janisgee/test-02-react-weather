import React from "react";

export default function SearchForm() {
  return (
    <div>
      <form className="row form">
        <div className="col-9">
          <input
            type="search"
            placeholder="Please type a city name ..."
            className="form-control"
            autoFocus="on"
            autoComplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>{" "}
      </form>
    </div>
  );
}
