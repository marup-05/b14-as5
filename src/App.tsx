import { Suspense } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Technologies from "./components/technologies/Technologies"
import type { Itechnology } from "./types/technology";
import Footer from "./components/Footer";


const technologiesFetch = async (): Promise<Itechnology[]> =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}

function App() {

const technologiesPromise = technologiesFetch();
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App
