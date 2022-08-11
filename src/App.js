import UserProvider from "./providers/user";
import Routes from "./routes";
import Global from "./styles/global";

function App() {
  return (
    <UserProvider>
      <Global />
      <Routes />
    </UserProvider>
  );
}

export default App;
