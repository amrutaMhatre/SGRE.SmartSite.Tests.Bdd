import React, { FC } from "react";
import { observer } from "mobx-react";
import { useStores } from "../../use-stores";
import { Card } from "react-bootstrap";

const Home = observer(() => {
  const { sampleStore } = useStores();
  return (
    <div className="row m-3">
      {sampleStore.samples.map((temp) => {
        return (
          <Card key={temp.id} className="col-sm-3 p-3">
            <Card.Body>{temp.title}</Card.Body>
          </Card>
        );
      })}
    </div>
  );
});

export default Home;
