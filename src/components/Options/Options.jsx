

const Options = ({handleLogCoffee}) => {
  return (
      <div>
          <button onClick={() => handleLogCoffee("good")}>Good</button>
          <button onClick={() => handleLogCoffee("neutral")}>Neutral</button>
          <button onClick={() => handleLogCoffee("bad")}>Bad</button>
          <button onClick={() => handleLogCoffee("reset")}>Reset</button>
    </div>
  )
}

export default Options;