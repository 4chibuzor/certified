import React, { Fragment } from "react";
import Introduction from "./Introduction";
import TrainingCategories from "./TrainingCategories";
import OurCustomers from "./OurCustomers";
import Reference from "./Reference";
import Conclusion from "./Conclusion";
export default function Main() {
  return (
    <Fragment>
      <Introduction />
      <TrainingCategories />
      <OurCustomers />
      <Reference />
      <Conclusion />
    </Fragment>
  );
}
