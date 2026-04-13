import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Activities from './components/Activities';
import Skills from './components/Skills';
import ContactInfo from './components/ContactInfo';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Welcome />
        <AboutMe />
        <WorkExperience />
        <Activities />
        <Skills />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;
