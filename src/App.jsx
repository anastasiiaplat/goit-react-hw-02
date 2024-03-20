
import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import { useState, useEffect } from 'react';

function App() {
  const [stock, setStock] = useState(() => {
    const savedStock = JSON.parse(localStorage.getItem('stock'));
    return savedStock || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('stock', JSON.stringify(stock));
  }, [stock]);

  const handleLogCoffee = (coffeeRating) => {
    setStock((prevStock) => ({ ...prevStock, [coffeeRating]: prevStock[coffeeRating] + 1 }));
  };

  const resetFeedback = () => {
    setStock({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = stock.good + stock.neutral + stock.bad;

  const positiveFeedback = totalFeedback > 0
    ? Math.round((stock.good / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options handleLogCoffee={handleLogCoffee} resetFeedback={resetFeedback} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback rating={stock} total={totalFeedback} positive={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
