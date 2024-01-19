import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us page</h1>
      <form>
        <input placeholder="name" className="m-2 p-2 border border-black" />
        <input placeholder="password" className="m-2 p-2 border border-black" />
        <div>
          <button
            type="submit"
            value="Submit"
            className="m-2 p-2 bg-blue-700"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
