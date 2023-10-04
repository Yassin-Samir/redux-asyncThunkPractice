import React from "react";

function Todo({ title, id, skeleton }) {
  return (
    <div className={"todo"}>
      <div className={"header"}>
        <p className={`${skeleton ? "skeleton" : ""}  skeleton-text`}>
          {title}
        </p>
      </div>
      <p className={` ${skeleton ? "skeleton" : ""} skeleton-text`}>{id}</p>
    </div>
  );
}

export default Todo;
