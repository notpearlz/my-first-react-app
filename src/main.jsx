import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './components/Greeting.jsx'
import {FoodList} from './components/FoodList.jsx'

const foodsList = ["Spaghetti", "Chicken", "Steak", "Coffee"];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting/>
    <FoodList foodsList = {foodsList}/>
  </StrictMode>,
)
