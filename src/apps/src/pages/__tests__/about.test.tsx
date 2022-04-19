import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import toJSON  from 'enzyme-to-json';
import About from "../about";

let wrapper: ShallowWrapper;
beforeEach(() => {
    wrapper = shallow(<About />);
});

describe("unit test for About Page", () => {
    test("snapshot test for About page", () => {
        expect(toJSON(wrapper)).toMatchSnapshot();
    })

    test("test for header", () => {
        const title = wrapper.find("h1").text();
        expect(title).toContain("About page");
    })
});

