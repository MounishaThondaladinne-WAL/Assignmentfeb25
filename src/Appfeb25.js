import './App.css';
import RegistrationFormik from './RegistrationUsingFormik';
import TodoApplication from './TodoApplication';
import ExampleUsingRef from './ExamUseRef';
import ProductFormik from './ProductUsingFormik';
import Profile from './Profile25feb';
import { useEffect,useState } from "react";
import axios from 'axios';
import ShowUserName from './ShowUsernamefeb25';
import Hoc from './Hocfeb25';
function App() {
  const ModifiedProfile = Hoc(Profile)
  const ModifiedGetUserName = Hoc(ShowUserName)
  return (
    
    <div className="App">
      <ModifiedProfile/>
      <ModifiedGetUserName/>
    </div>
  
  );
}

export default App;
