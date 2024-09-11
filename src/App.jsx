import Header from './components/header/Header'
import Navbar from './components/nav/Nav';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import ContactMe from './components/contactme/ContactMe';

function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </>
  );
}

export default App;
