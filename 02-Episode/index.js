import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "hellooo" }, "namstay React");

const heading = (
  <h1 id="heding"> hello everone how are you i am jsx element </h1>
);

// Two types of components
//class base components - old
// functional components- new

const TitleComponent = () => (
  <div id="conatiner">
    <h1 className="heading">Namstay react Title unctional compnent</h1>
  </div>
);

// const HeadingComponent = () => (
//   <div id="conatiner">
//     <h1 className="heading">Namstay react functional compnent</h1>
//   </div>
// );

//component composition
// const HeadingComponent = () => (
//   <div id="conatiner">
//     <TitleComponent />
//     <h1 className="heading">Namstay react functional compnent</h1>
//   </div>
// );

// to paas react element in component
const HeadingComponent = () => (
  <div id="conatiner">
    {heading}
    <h1 className="heading">Namstay react functional compnent</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
