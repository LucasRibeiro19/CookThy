import React, { createContext, useState } from 'react';



export const FilterContext = createContext();


export const FilterContextProvider = ({ children }) => {

const [MealType , setMealType] = useState([])
const handleChangeMealType = (event) => {
    const {
      target: { value },
    } = event;
    setMealType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const [Allergies , setAllergies] = useState([])
const handleChangeAllergies = (event) => {
    const {
      target: { value },
    } = event;
    setAllergies(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const [CuisineType , setCuisineType] = useState([])
const handleChangeCuisineType = (event) => {
    const {
      target: { value },
    } = event;
    setCuisineType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const [DishType , setDishType] = useState([])
const handleChangeDishType = (event) => {
    const {
      target: { value },
    } = event;
    setDishType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const [Diet , setDiet] = useState([])
const handleChangeDiet = (event) => {
    const {
      target: { value },
    } = event;
    setDiet(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

const [Health , setHealth] = useState([])
const handleChangeHealth = (event) => {
    const {
      target: { value },
    } = event;
    setHealth(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [filters, setFilters] = useState({
    diet : Diet,
    health : Health,
    dishType : DishType,
    cuisineType : CuisineType,
    mealType : MealType
})

const handleFilters = (event) =>{
    setFilters({
        diet : Diet,
        health : Health,
        dishType : DishType,
        cuisineType : CuisineType,
        mealType : MealType
    })
}


    return (
        <FilterContext.Provider value = {{
            MealType,
            handleChangeMealType,
            Allergies, 
            handleChangeAllergies,
            CuisineType,
            handleChangeCuisineType,
            DishType,
            handleChangeDishType,
            Diet,
            handleChangeDiet,
            Health,
            handleChangeHealth,
            filters,
            handleFilters
        }}>
            { children }
        </FilterContext.Provider>
    )

}




