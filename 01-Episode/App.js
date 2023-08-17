// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World using react ji"
// );
// console.log(heading); // it is obeject

// nested structure how to create in

{
  /* <div id="" parent>
  <div id="child">
    <h1></h1>
  </div>
</div>; */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("H1", {}, "I am an h1 tag")
//   )
// );

// if you want to add more sibling

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("H1", {}, "I am an h1 tag"),
//     React.createElement("H2", {}, "I am an h2 tag"),
//   ])
// );

// you can make complex structure also

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("H1", {}, "I am an h1 tag"),
    React.createElement("H2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("H3", {}, "I am an h3 tag"),
    React.createElement("H4", {}, "I am an h4 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
