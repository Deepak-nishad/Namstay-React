import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constrour called");
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
      },
    };
  }

  async componentDidMount() {
    console.log("component did monut");
    const data = await fetch("https://api.github.com/users/Deepak-nishad");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Compm=nonet did updaete");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    console.log("render callled");
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name :- {name}</h1>
        <h1>github Bio :- {bio}</h1>
        <h1>location :- {location}</h1>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
