import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Techstacks from "./components/Techstacks";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="bg-white h-full">
      <main className="flex flex-col min-h-screen container bg-white-100">
        <div className="w-full h-full flex justify-center">
          <Navbar></Navbar>
        </div>
        <section className="h-full bg-white-700 p-2">
          <Landing></Landing>
        </section>
        <section className="h-full bg-white-500 p-2">
          <Techstacks></Techstacks>
        </section>
        <section className="h-full bg-red-300 p-2">
          c Projects
          <Projects></Projects>
        </section>
         <section className="h-full bg-red-200 p-2">
          <Footer></Footer>
         </section>
      </main>
    </div>
  );
}
