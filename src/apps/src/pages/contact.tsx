import React, { Component, MouseEvent } from "react";
import Layout from "../components/Layout";
import List from "../components/Task/List";
import Load from "../components/Task/Load";

export default class Contact extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Layout>
        <h1>Contact page</h1>
        <Load></Load>
        <List></List>
      </Layout>
    );
  }
}
