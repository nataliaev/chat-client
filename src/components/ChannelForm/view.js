import React from "react";

export default function View(props) {
  const { 
    onSubmit, 
    onChange, 
    value, 
    user } = props;

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <h3>User name</h3>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="user"
          placeholder={user}
          className="input-form"
        />
        <button type="submit" className="input-button">
          Send
        </button>
      </form>
    </div>
  );
}
