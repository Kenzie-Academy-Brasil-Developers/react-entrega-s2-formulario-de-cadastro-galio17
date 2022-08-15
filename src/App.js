import Providers from "./providers";
import Routes from "./routes";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Providers>
      <ToastContainer
        theme="dark"
        toastStyle={{ backgroundColor: "var(--grey-2)" }}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Global />
      <Routes />
    </Providers>
  );
}

export default App;
