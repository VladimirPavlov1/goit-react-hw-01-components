import {Recipe} from './Recipe';
import { PropTypes } from 'prop-types';

export const RecipeList =({recipes})=>{
    return (<div>
        {recipes.map(recipe=>(
        <Recipe key={recipe.id} recipe={recipe}/>))}
    </div>)
}

RecipeList.propsTypes={
  recipes: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number.isRequired,}))  
}

