
const Feedback = ({rating, total, positive}) => {
  return (
      <div>
          
      <p>Good: {rating.good}</p>
      <p>Neutral: {rating.neutral}</p>
      <p>Bad: {rating.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>


    </div>
  )
}

export default Feedback;