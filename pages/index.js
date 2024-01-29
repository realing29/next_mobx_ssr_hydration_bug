import Router from "next/router";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    Router?.push("/ssg/1");
  });
  return null;
};
