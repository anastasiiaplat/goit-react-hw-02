

const Options = ({handleLogCoffee}) => {
  return (
      <div>
          <button onClick={() => handleLogCoffee("Good")}>Good</button>
          <button onClick={() => handleLogCoffee("Neutral")}>Neutral</button>
          <button onClick={() => handleLogCoffee("Bad")}>Bad</button>
          <button onClick={() => handleLogCoffee("Reset")}>Reset</button>
    </div>
  )
}

export default Options;