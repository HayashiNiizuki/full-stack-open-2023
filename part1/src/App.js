const Header = (prop) => {
  return (
    <div>
      <p>{prop.name}</p>
    </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <Part name="part0" times={0}></Part>
      <Part name="part1" times={1}></Part>
      <Part name="part2" times={2}></Part>
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
  const course_name = "Full Stack Open 2023";
  return (
    <div>
      <Header name={course_name}></Header>
      <Content></Content>
      <Total></Total>
    </div>
  )
}

export default App