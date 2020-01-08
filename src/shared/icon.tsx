import React from "react";

const styles = {
  spanTag: {
    cursor: "pointer"
  }
};

function Icon() {
  const { spanTag } = styles;
  return (
    <span className='p-2' style={spanTag}>
      <i className='fa fa-home' />
    </span>
  );
}

export default Icon;
