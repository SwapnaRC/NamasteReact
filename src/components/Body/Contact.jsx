import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("use effect mounting");
    }, 1000);
    return () => {
        // clear the interval so all resource will closed 
      console.log("UseEffect Contact us unmounted");

      clearInterval(timer);
    };
  }, []);
  return <div>Contact us page</div>;
};

export default Contact;
