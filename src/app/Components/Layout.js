import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router";

export default class Layout extends React.Component
{
  navigate(args)
  {
    this.props.history.replaceState(null, args);
  }
  constructor ()
  {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title)
  {
    this.setState({title});
  }


  render()
  {
    const title = "Welcome";

    const name = "Prabh"
      return (
        <div>
          <div>

            <a onClick={this.navigate.bind(this, "/")}>Page 1 </a>
            <a onClick={this.navigate.bind(this, "/p2")}>Page 2</a>

          </div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          {this.props.children}
          <Footer />
        </div>
      );
  }
}
