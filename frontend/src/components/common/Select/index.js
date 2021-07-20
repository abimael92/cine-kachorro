import React from 'react';
import './style.css';

const Select = ({ name, label, value, options, error, iconClass }) => {

  // if (!options) return <> </>;

  return (
    <div className="input-container">
      {label && <label htmlFor={name}> {label} </label>}
      <div className={`input-icon ${iconClass}`} />
      <select name={name}>
        <option disabled value="" selected="true" >Select</option>
        {options.map(element => (
          <option key={element._id} value={element.genre} >
            {element.genre}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger"> {error} </div>}
    </div>
  );
}

export default Select;