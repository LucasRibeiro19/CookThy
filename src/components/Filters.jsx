import React from 'react';
import { useContext } from 'react'; 
import { FilterContext } from '../contexts/FilterContext.jsx';
import MultipleSelectChip from './MultipleSelectChip.jsx';
import Button from '@mui/material/Button';
import { mealType, dishType, diet, health, cuisineType } from "../FilterSelectorLists"


export default function Filters ({handleFilters}) {

    const { MealType,
        handleChangeMealType,
        CuisineType,
        handleChangeCuisineType,
        DishType,
        handleChangeDishType,
        Diet,
        handleChangeDiet,
        Health,
        handleChangeHealth,
        countFilters
    } = useContext(FilterContext)


    return(
        <div className= "Filters">
            <MultipleSelectChip selectorCategorie="Meal Type" choices={mealType} filter={MealType} handleChangeFilter={handleChangeMealType} />
            <MultipleSelectChip selectorCategorie="Cuisine Type" choices={cuisineType} filter={CuisineType} handleChangeFilter={handleChangeCuisineType} />
            <MultipleSelectChip selectorCategorie="Dish Type" choices={dishType} filter={DishType} handleChangeFilter={handleChangeDishType} />
            <MultipleSelectChip selectorCategorie="Diet" choices={diet} filter={Diet} handleChangeFilter={handleChangeDiet} />
            <MultipleSelectChip selectorCategorie="Health and allergies" choices={health} filter={Health} handleChangeFilter={handleChangeHealth} />
            <Button
                    sx={{width: '300px', height:'56px', margin: '8px'}}
                    onClick={handleFilters}
                    variant='outlined'
                    color='success'
                > Apply {countFilters()} filters </Button>
            
        </div>
    );
}
