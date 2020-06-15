import React from "react";

const Toolbar = (props) => {
  return (
    <div className="toolbar">
      {props.filters.map((filter, i) => {
        const buttonClass =
          filter === props.selected ? "filter-selected" : "filter";

        return (
          <button
            className={buttonClass}
            onClick={() => props.onSelectFilter(filter)}
            key={`filter-${i}`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
