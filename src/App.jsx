
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'

function App() {

  const handleLogCoffee = (coffeeRating) => {
    console.log("coffeeRating", coffeeRating);
  };

  <div>
    
    <Options handleLogCoffee={handleLogCoffee} />
    <Feedback />
    <Description/>

  </div>
}

export default App
