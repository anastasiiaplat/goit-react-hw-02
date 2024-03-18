
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {

  const handleLogCoffee = (coffeeType) => {
    console.log("coffeeType", coffeeType);
  };

  <div>
    
    <Options />
    <Feedback />
    <Description/>

  </div>
}

export default App
