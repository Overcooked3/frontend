import './Recipe.css';
import logo from './logo.svg';

function Recipe() {
  let rating = 12.5;
  return (
    <div className="Recipe">
      <header className="Recipe-header">
        <p>
          Recette blabla
        </p>
      </header>
      <div className='RecipeSection'>
        <div className='StepSide'>
          <div className='Image'>
            <img src={logo} alt="Logo" />
          </div>
          <h2> TITRE RECETTE </h2>
          <div className="star-widget">
            <span class="star-ratings-css"><i style={{width: rating+'%'}}></i></span>
          </div>
          <div className='Step'>
            <p>1ère étape : non enfaite</p>
          </div>
          <div className='Step'>
            <p>2ème étape : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, rem amet, harum ratione ab magnam praesentium ad placeat, error sequi eos repellat. Non dolorem qui quod ad perspiciatis suscipit possimus?</p>
          </div>
        </div>
        <div className='RecapSide'>
          <p>ingredient oui c'est bien</p>
        </div>
      </div>
      <div className='CommentSection'>
        <p>Comments oui</p>
      </div>
    </div>
  );
}

export default Recipe;
