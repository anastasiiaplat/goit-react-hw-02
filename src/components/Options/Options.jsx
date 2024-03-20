

const Options = ({handleLogCoffee, total, resetFeedback}) => {
  return (
      <div>
          <button onClick={() => handleLogCoffee("good")}>Good</button>
          <button onClick={() => handleLogCoffee("neutral")}>Neutral</button>
      <button onClick={() => handleLogCoffee("bad")}>Bad</button>
      {total > 0 && (
        <button onClick={resetFeedback}>Reset</button>)}
    </div>
  )
}

export default Options;


