import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react";

import { useStores } from "../../use-stores";

const Home = observer(() => {
  const { sampleStore } = useStores();
  const clickEvent = () => {
    sampleStore.addSample();
  };
  return (
    <Button
      variant="primary"
      onClick={() => {
        clickEvent();
      }}
    >
      Load Items
    </Button>
  );
});

export default Home;
