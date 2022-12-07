import AllTasks from "./components/AllTasks"

const App = () => {
  /*/ čistý javascript začátek

  // zkouška funkce map
  //první příklad
  const defaultArray = [5, 6, 7, 8, 9]

  const resultArray = defaultArray.map( (oneNumber) => {
    return oneNumber + 10;
  } )

  console.log(resultArray)

  //druhý příklad
  const data = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
  ]

  const result = data.map( (oneTask) => {
    return oneTask.name
  } )

  console.log(result)

  // zkouška funkce filter
  const dataFilter = [
    { id: 1, name: 'Vynést koš' },
    { id: 2, name: 'Uklidit kuchyň' },
    { id: 3, name: 'Zajít do fitka' },
    { id: 4, name: 'Nakoupit' },
    { id: 5, name: 'Nakrmit kočku' },
  ]

  const deletedId = 4

  const resultFilter = dataFilter.filter( (oneTask2) => {
    return oneTask2.id !== deletedId
  })

  console.log(resultFilter)

  //čistý javascript konec */


  return (
    <div>
      <AllTasks />
    </div>
  )
}

export default App