/* eslint-disable */

import React from "react"; //ne e zadolzitelno

const data = [
  "Martin Petroski",
  "26",
  " Dynavox Electronics SA",
  "Working like service_support at",
];

const LectureApp = () => {
  const name = data[0];
  const age = data[1];
  const company = data[2];
  let x = data[3];

  return (
    <div>
      <h4>{name}</h4>
      <h5>Age:{age}</h5>
      <h5>
        {x}
        {company}
      </h5>
    </div>
  );
};

export default LectureApp;
