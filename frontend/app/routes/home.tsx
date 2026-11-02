import { Welcome } from "../welcome/welcome";

export const meta = () => [
  { title: "New React Router App" },
  { content: "Welcome to React Router!", name: "description" },
];

const Home = () => <Welcome />;

export default Home;
