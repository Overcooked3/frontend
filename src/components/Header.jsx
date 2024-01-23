import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RecipeList = () => {
  return (
    <div>
      <h2>Liste des Recettes</h2>
      {/* Ajoutez le contenu de la liste des recettes ici */}
    </div>
  );
};

const Header = () => {
  const [currentPage, setCurrentPage] = React.useState('signin');

  const renderPage = () => {
    if (currentPage === 'signin') {
      return <SignIn />;
    } else if (currentPage === 'signup') {
      return <SignUp />;
    } else if (currentPage === 'recipes') {
      return <RecipeList />;
    }
    // Ajoutez d'autres conditions au besoin
  };

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#" onClick={() => setCurrentPage('recipes')}>Titre</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${currentPage === 'signin' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage('signin')}>Sign In</a>
            </li>
            <li className={`nav-item ${currentPage === 'signup' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => setCurrentPage('signup')}>Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>

      {renderPage()}
    </div>
  );
};

export default Header;
