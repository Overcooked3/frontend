import React from 'react';
import '../Recipe.css';

function Recipe({ id }) {
  let rating = 12.5;
  let recipeTitle = `Recette ${id}`;

  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <p>
          {recipeTitle}
        </p>
      </header>
      <div className='RecipeSection'>
        <div className='StepSide'>
          <h2> TITRE RECETTE </h2>
          <div className={`star-widget star-ratings-css active`}>
            <span style={{ width: `${rating}%` }}>
              <i></i>
            </span>
          </div>
          <div className='Step'>
            <p>1ère étape : non en fait</p>
          </div>
          <div className='Step'>
            <p>
              2ème étape : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Alias, rem amet, harum ratione ab magnam praesentium ad placeat, error
              sequi eos repellat. Non dolorem qui quod ad perspiciatis suscipit
              possimus?
            </p>
          </div>
        </div>
        <div className='RecapSide'>
          <p>ingrédient oui c'est bien</p>
        </div>
      </div>
      <div className='CommentSection'>
        <p>Commentaires oui</p>
      </div>
    </div>
  );
}

export default Recipe;
