import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import {  MainContainer, CreateContainer, Header } from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();
 
  // create a fnc
   const fetchData = async () => {
     await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      });
     });
   };
   
   useEffect(() => {
     fetchData();

   }, []);
   
  return (
    // all the animation will be inside this entire component
   <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
    <Header />
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <Routes>
      {/* if anything comes from root this will load the directory*/}
       <Route path="/*" element={<MainContainer />} /> 
        {/* if anything comes from url this will load the directory*/}
       <Route path="/createItem" element={<CreateContainer />} />

      </Routes>
    </main>
  </div>
   </AnimatePresence>
  );
};

export default App; 