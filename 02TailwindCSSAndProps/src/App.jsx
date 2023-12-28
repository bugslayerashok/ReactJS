import './App.css'
import CardTwo from './CardTwo'

function App() {
  let obj = {
    username : "Hiii"
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline m-6">
      Hello world!
    </h1>
    <div className="cols-3 gap-3 justify-self-center">
    <CardTwo mainTitle="Ashok" btnText="Click Me!" objVal={obj}/>
    <CardTwo mainTitle="Rahul" btnText="Click Me!"/>
    <CardTwo mainTitle="OM" btnText="Click Me!"/>
    </div>
    
    </>
  )
}

export default App
