import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";

import { useStores } from "../use-stores";
import Layout from "../components/Layout";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Home = observer(() => {
  const { sampleStore } = useStores();
  const clickEvent = () => {
    sampleStore.addSample();
  };
  return (
    <Layout>
      <h1>Items ({sampleStore.countTotal})</h1>
      <Button
        variant="primary"
        // className="secondary-btn"
        onClick={() => {
          clickEvent();
        }}
      >
        Load Items
      </Button>
      {/* <div className="row">
        <Table className="primary-table" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
       */}
      <Form>
        {/* <label className="form-label">Testing</label>
        <InputGroup hasValidation>
          <Form.Control type="text" placeholder="test" />
          <InputGroup.Append>
            <InputGroup.Text>Unit</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup> */}

        {/* <label className="form-label">Testing</label>
        <InputGroup hasValidation>
          <Form.Control as="textarea" rows={3} placeholder="test" />
        </InputGroup> */}
      </Form>

      <ul>
        {sampleStore.samples.map((temp) => {
          return <li key={temp.id}>{temp.title}</li>;
        })}
      </ul>
    </Layout>
  );
});

export default Home;
