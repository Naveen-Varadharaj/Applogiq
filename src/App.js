
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Footer from './components/Footer';
import About from './components/About';
import Team from './components/Team';
import Frequentqueries from './components/Frequentqueries';
import Query from './components/Query';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="mx-3 px-2 py-2 font-sans">
      <Navbar />
      <Introduction />
      <About />
      <Team />
      <Frequentqueries />
      <Query />
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default App;
