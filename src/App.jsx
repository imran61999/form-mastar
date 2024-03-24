
import './App.css'
// import Hookform from './Components/Hookform';
// import Hookform from './Components/Hookform'
import Reuseableform from './Components/Reuseableform/Reuseableform';
// import RecapOnchange from './Components/RecapOnchange/RecapOnchange'
// import Simpleform from './Components/Simpleform/Simpleform'
// import StateFulform from './Components/StatefulForm/StateFulform'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <Simpleform></Simpleform> */}
      {/* <StateFulform></StateFulform> */}
      {/* <Hookform></Hookform> */}
      <Reuseableform formtitle={'sign up'}></Reuseableform>
      <Reuseableform formtitle={'Profile Update'}></Reuseableform>
    </>
  )
}

export default App;
