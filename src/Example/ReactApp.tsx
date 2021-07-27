import React from "react";
import { render } from "react-dom";

const ReactApp = ({ id }: { id: string }) => <div>App {id ?? 'idk'} is rendering here</div>;

export default (id: string) => render(<ReactApp id={id} />, document.getElementById(id));