import type { Component } from "solid-js";

const LoginPage: Component<{ children: Element }> = (props) => (
  <button onClick={() => navigator.credentials.create()}>PASSKEY TEST</button>
);

export default LoginPage;
