import React from "react";

export default function View(props) {
  const { onSubmit, onChange, value } = props;

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <h3>New message</h3>
        <input
          type="text"
          onChange={onChange}
          value={value}
          name="message"
          placeholder="Type a message"
          className="input-form"
        />
        <button type="submit" className="input-button">
          Send
        </button>
      </form>
    </div>
  );
}
