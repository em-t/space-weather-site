import React, { Component } from "react";

const CMEDataRow = props => {
  return (
    <li>
      {props.data.activityID}, {props.data.note}
    </li>
  );
};

export default CMEDataRow;
