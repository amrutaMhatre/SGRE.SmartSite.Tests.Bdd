import { createContext } from "react";
import { SampleStore } from "./SampleStore";

export const RootStoreContext = createContext({
  sampleStore: new SampleStore(),
});
