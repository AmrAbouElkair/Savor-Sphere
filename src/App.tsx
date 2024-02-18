import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";

const App = () => (
  <main className="relative dark:bg-black duration-300">
    <NavBar />
    <section className="xl:padding-l xl:padding-r padding-y max-xl:px-2 max-sm:dark:pt-16">
      <Hero />
    </section>
    <Footer />
  </main>
);

export default App;
