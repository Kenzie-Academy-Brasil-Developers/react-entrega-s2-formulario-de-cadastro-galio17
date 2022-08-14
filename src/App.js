import Providers from "./providers";
import Routes from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <Providers>
      <Global />
      <Routes />
    </Providers>
  );
}

export default App;
