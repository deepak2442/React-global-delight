import "./App.css"
import MainPage from "./Pages/mainPage"
import Header from "./components/Header/Header"
import Footer from "./components/footer/footer"
import {Routes, Route} from 'react-router-dom';
import JobGuidlines from './Pages/JobGuidlines/jobGuidlines';

function App() {


  return (
   <div>
   
   <Header />
   <Routes>
   <Route path="/" element={<MainPage />}></Route>
   <Route path="/roles" element= {<JobGuidlines />}></Route>
   
   </Routes>
   <Footer />
   
   </div>
  )
}

export default App
