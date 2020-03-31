import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      user: "",
      repo: "",
      title: "",
      state: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }
  handleSubmit(event) {
    console.log(this.state);
    fetch(
      `https://api.github.com/repos/${this.state.user}/${this.state.repo}/issues?state=${this.state.state}&title=${this.state.title}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      });
  }
  render() {
    return (
      <div className="App">
        <div className="inputContainer">
          user
          <input
            type="text"
            name="user"
            value={this.state.value}
            onChange={this.handleChange}
          />
          repo
          <input
            type="text"
            name="repo"
            value={this.state.value}
            onChange={this.handleChange}
          />
          state change to select
          <input
            type="text"
            name="state"
            value={this.state.value}
            onChange={this.handleChange}
          />
          title
          <input
            type="text"
            name="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          submit
          <input
            type="submit"
            name="submit"
            value="submit"
            onClick={this.handleSubmit}
          />
        </div>

        <div className="resultsContainer">
        {this.state.data.map((item, index) => (
          <div key={index}>
              <p>{item.title}</p>
              <p>{item.state}</p>
             <p>{item.user.login}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
