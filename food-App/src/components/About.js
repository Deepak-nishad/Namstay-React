// import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <>
//       <h1>
//         Our mission is to elevate the quality of life for the urban consumer
//         with unparalleled convenience. Convenience is what makes us tick. It's
//         what makes us get out of bed and say, "Let's do this."
//       </h1>
//       {/* <User name="Deepak" email="deepak123" address="chander lok colony" /> */}
//       <UserClass
//         name="Deepak"
//         email="deepak123"
//         address="chander lok (class base) "
//       />
//     </>
//   );
// };

// export default About;

import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent About Constructor is called");
  }

  async componentDidMount() {
    // console.log("Parent About didmount is called");
  }
  render() {
    // console.log("Parent About render is called");

    return (
      <div className="user-card">
        <UserClass />
      </div>
    );
  }
}

export default AboutClass;
