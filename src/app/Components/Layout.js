import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router";

export default class Layout extends React.Component
{
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
            <Link to="p2" >Page 2</Link>
          </div>
          <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
          {this.props.children}
          <Footer />
        </div>
      );
  }
}
