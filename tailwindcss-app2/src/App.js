import './App.css';
import '../src/index.css';
// import 'tailwindcss-animated/src/theme';
// import 'tailwindcss-animated/package.json'
import Header from './Components/Header';
import Content from './Components/Content';
import Aboutme from './Components/Aboutme';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <Header/>
    <Content/>
    <Aboutme/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
    
  );
}

export default App;
