import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Content from "./components/shared/Content";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
