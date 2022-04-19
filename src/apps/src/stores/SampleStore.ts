import { makeObservable, observable, computed, action } from "mobx";
import api from "../middlewares/api";

export interface Test {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
export class SampleStore {
    constructor() {
        makeObservable(this, {
            samples: observable,
            countTotal: computed,
            addSample: action
        });
    }
    public samples: Test[] = [];

    public addSample = () => {
        api.get("todos").then((res: any): any => {
            this.samples = res;
        });
    };

    get countTotal() {
        return this.samples.length;
    }

}



