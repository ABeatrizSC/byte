import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroBanner } from "./components/HeroBanner";
import byteBurguer from "./assets/images/byteBurguer.jpg";

export function App() {
  return (
    <>
      <Header />
      <HeroBanner
        image={byteBurguer}
        text={"SABORES QUE VÃO ALÉM DOS BYTES!"}
      />
      <Footer />
    </>
  );
}
