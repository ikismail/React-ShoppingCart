import React from "react";
import "../config/themes.scss";
import "./icon.scss";

function Icon({ type }: { type: string }) {
  return (
    <span className='p-2 primary icon'>
      <i className={`fa ${type}`} />
    </span>
  );
}

export default Icon;
