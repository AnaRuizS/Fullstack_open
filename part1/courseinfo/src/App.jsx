
const Header = (props) =>{

  console.log (props)
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name = {props.name1} numExercises = {props.num1} />
      <Part name = {props.name2} numExercises = {props.num2} />
      <Part name = {props.name3} numExercises = {props.num3} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.numExercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2= "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content name1= {part1} name2 = {part2} name3= {part3} num1={exercises1} num2={exercises2} num3={exercises3}/>
      <Total num1={exercises1} num2={exercises2} num3={exercises3}/>
    </div>
  )
}

export default App
