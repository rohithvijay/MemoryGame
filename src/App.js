import "./App.css";
import Body from "./components/Body";
import { MusicProvider } from "./utils/MusicContext";

function App() {
  return (
    <MusicProvider>
      <div className="App">
        <Body />
      </div>
    </MusicProvider>
  );
}

export default App;
