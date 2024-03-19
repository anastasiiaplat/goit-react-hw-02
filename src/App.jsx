
import './App.css'
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import  { useState } from 'react';


function App() {
  

  const [counter, setCounter] = useState(0);
  const [stock, setStock] = useState({ good: 0, neutral: 0, bad: 0 });
  
  

  const handleLogCoffee = (coffeeRating) => {
    console.log("coffeeRating", coffeeRating);
    setStock({ ...stock, [coffeeRating]: stock[coffeeRating] + 1 });
    // setStock({ good: 1, neutral: 4, bad: 8 });
  }; 

const updateFeedback = feedbackType => {
   setCounter(counter +1)
  };


  return (
 <div>
      
      <Description/>
      <Options handleLogCoffee={handleLogCoffee} />
      <Feedback rating={stock} />
      <button onClick={updateFeedback}>Total: {counter}</button>
 </div>
)}

 
export default App
 