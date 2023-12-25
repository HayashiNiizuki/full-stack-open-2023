const Header = (prop) => {
  return (
    <div>
      <p>{prop.name}</p>
    </div>
  )
}

const Content = (prop) => {
  console.log(prop)
  const part = prop.parts;
  return (
    <div>
      <Part name={part[0].name} times={part[0].exercises}></Part>
      <Part name={part[1].name} times={part[1].exercises}></Part>
      <Part name={part[2].name} times={part[2].exercises}></Part>
    </div>
  )
}

const Part = (prop) => {
  return (
    <div>
      <p>{prop.name} is practiced {prop.times} times.</p>
    </div>
  )
}

const Total = (prop) => {
  return (
    <div>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}></Header>
      <Content parts={parts}></Content>
      <Total></Total>
    </div>
  )
}

export default App