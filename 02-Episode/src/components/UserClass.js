import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        {/* <h1>Count user class : {this.state.count}</h1> */}
        <h1>Count varibale using another way to destrutor : {count}</h1>
        <h1>Count2 varibale using another way to destrutor : {count2}</h1>

        {/* -------------------------------------------------------- */}
        {/* <h1>Deepak</h1>
        <h1>deepakkumar62559@gmail.com</h1>
        <h1>chander lok colony jind</h1> */}
        {/* ------------------------------------------------------------------------------------ */}
        {/* <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.address}</h1> */}
      </div>
    );
  }
}

export default UserClass;
