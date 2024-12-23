import Header from "./components/navbar/Header"
import About from "./sections/About"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Service from "./sections/Service"

const App = () => {
  return (
    <main className="overflow-hidden tracking-wide">
      <Header />
      <Hero />
      <Service />
      <About />
      <Footer />
    </main>
  )
}
export default App