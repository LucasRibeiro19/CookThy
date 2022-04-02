import React from 'react';
import { useContext } from 'react'; 
import { FilterContext } from '../contexts/FilterContext.jsx';
import MultipleSelectChip from './MultipleSelectChip.jsx';


const mealType = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack',
    'Tea Time'
];
const allergies = [
    'Celery-free',
    'Crustacean-free',
    'Dairy-free',
    'Egg-free',
    'Fish-free',
    'Gluten-free',
    'Lupine-free',
    'Mustard-free',
    'Peanut-free',
    'Sesame-free',
    'Shellfish-free',
    'Soy-free',
    'Tree-nut-free',
    'Wheat-free'
  ];
const dishType = [
    'Biscuits and cookies',
    'Breab',
    'Cereals',
    'Condiments and Sauces',
    'Desserts',
    'Drinks',
    'Main Course',
    'Pancake',
    'Preps',
    'Preserve',
    'Salad',
    'Sandwiches',
    'Side dishes',
    'Soup',
    'Starter',
    'Sweets'
];
const diet = [
    'Alcohol-free',
    'Balanced',
    'High-Fiber',
    'High-Protein',
    'Keto',
    'Kidney friendly',
    'Kocher',
    'Low-Carb',
    'Low-Fat',
    'Low potassium',
    'Low-Sodium',
    'No oil added',
    'No-sugar',
    'Paleo',
    'Pescatarian',
    'Pork-free',
    'Red meat-free',
    'Sugar-conscious',
    'Vegan',
    'Vegetarian'
];
const cuisineType = [
    'American',
    'Asian',
    'British',
    'Caribbean',
    'Central Europe',
    'Chinese',
    'Eastern Europe',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Kocher',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Nordic',
    'South American',
    'South East Asia'
];



export default function Filters () {

<<<<<<< HEAD
    
=======
    const { MealType,
        handleChangeMealType,
        Allergies, 
        handleChangeAllergies,
        CuisineType,
        handleChangeCuisineType,
        DishType,
        handleChangeDishType,
        Diet,
        handleChangeDiet } = useContext(FilterContext)
>>>>>>> main


    return(
        <div className= "Filters">
<<<<<<< HEAD
            <MultipleSelectChip selectorCategorie="Meal Type" choices={mealType}/>
            <MultipleSelectChip selectorCategorie="Allergies" choices={allergies}/>
            <MultipleSelectChip selectorCategorie="Cuisine Type" choices={cuisineType}/>
            <MultipleSelectChip selectorCategorie="Dish Type" choices={dishType}/>
            <MultipleSelectChip selectorCategorie="Diet" choices={diet}/>
=======
            <MultipleSelectChip selectorCategorie="Meal Type" choices={mealType} filter={MealType} handleChangeFilter={handleChangeMealType} />
            <MultipleSelectChip selectorCategorie="Allergies" choices={allergies} filter={Allergies} handleChangeFilter={handleChangeAllergies} />
            <MultipleSelectChip selectorCategorie="Cuisine Type" choices={cuisineType} filter={CuisineType} handleChangeFilter={handleChangeCuisineType} />
            <MultipleSelectChip selectorCategorie="Dish Type" choices={dishType} filter={DishType} handleChangeFilter={handleChangeDishType} />
            <MultipleSelectChip selectorCategorie="Diet" choices={diet} filter={Diet} handleChangeFilter={handleChangeDiet} />
>>>>>>> main
            
        </div>
    );
}







