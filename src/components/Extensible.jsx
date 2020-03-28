import React from 'react';

const Extensible = (props) => {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  );
};

export default Extensible;
