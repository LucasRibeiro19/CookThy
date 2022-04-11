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

//const allergies = [
//    'Celery-free',
//    'Crustacean-free',
//    'Dairy-free',
//    'Egg-free',
//    'Fish-free',
//    'Gluten-free',
//    'Lupine-free',
//    'Mustard-free',
//    'Peanut-free',
//    'Sesame-free',
//    'Shellfish-free',
//    'Soy-free',
//    'Tree-nut-free',
//    'Wheat-free'
//  ];

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
    'Balanced',
    'High-Fiber',
    'High-Protein',
    'Low-Carb',
    'Low-Fat',
    'Low-Sodium',
];


const health = [
    "Alcohol-Cocktail",
    "Alcohol-Free",
    "Celery-Free",
    "Crustcean-Free",
    "Dairy-Free",
    "DASH",
    "Egg-Free",
    "Fish-Free",
    "FODMAP-Free",
    "Gluten-Free",
    "Immuno-Supportive",
    "Keto-Friendly",
    "Kidney-Friendly",
    "Kosher",
    "Low Potassium",
    "Low Sugar",
    "Lupine-Free",
    "Mediterranean",
    "Mollusk-Free",
    "Mustard-Free",
    "No oil added",
    "Paleo",
    "Peanut-Free",
    "Pescatarian",
    "Pork-Free",
    "Red-Meat-Free",
    "Sesame-Free",
    "Shellfish-Free",
    "Soy-Free",
    "Sugar-Conscious",
    "Sulfite-Free",
    "Tree-Nut-Free",
    "Vegan",
    "Vegetarian",
    "Wheat-Free"
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

    const { MealType,
        handleChangeMealType,
        //Allergies, 
        //handleChangeAllergies,
        CuisineType,
        handleChangeCuisineType,
        DishType,
        handleChangeDishType,
        Diet,
        handleChangeDiet,
        Health,
        handleChangeHealth,
    } = useContext(FilterContext)


    return(
        <div className= "Filters">
            <MultipleSelectChip selectorCategorie="Meal Type" choices={mealType} filter={MealType} handleChangeFilter={handleChangeMealType} />
            {/*<MultipleSelectChip selectorCategorie="Allergies" choices={allergies} filter={Allergies} handleChangeFilter={handleChangeAllergies} />*/}
            <MultipleSelectChip selectorCategorie="Cuisine Type" choices={cuisineType} filter={CuisineType} handleChangeFilter={handleChangeCuisineType} />
            <MultipleSelectChip selectorCategorie="Dish Type" choices={dishType} filter={DishType} handleChangeFilter={handleChangeDishType} />
            <MultipleSelectChip selectorCategorie="Diet" choices={diet} filter={Diet} handleChangeFilter={handleChangeDiet} />
            <MultipleSelectChip selectorCategorie="Health and allergies" choices={health} filter={Health} handleChangeFilter={handleChangeHealth} />

            
        </div>
    );
}







