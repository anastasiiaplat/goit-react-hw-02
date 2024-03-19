
const Feedback = ({rating}) => {
  return (
      <div>
          
	<p>good: {rating.good}</p>
	<p>neutral: {rating.neutral}</p>
	<p>bad: {rating.bad}</p>


    </div>
  )
}

export default Feedback;