import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err, "error");
  return (<><h1>Oppsss !!! Something Went Wrong !!! </h1><h6>{err.status}: {err.statusText} 
  </h6>
  <div>{err.data}</div></>)
}

export default Error