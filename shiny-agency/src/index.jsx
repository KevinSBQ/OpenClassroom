/*
// index.jsx dans la racine du projet comme un routeur
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// dans react-router-dom v6 Switch is replaced by Routes
// import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/survey">
                    <Survey />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);
*/
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'
import Footer from './components/Footer'



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
      <SurveyProvider>
        {/* importer le style global */}
            <GlobalStyle />
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              :questionNumber est un parametre
              <Route path="/survey/:questionNumber">
                <Survey />
              </Route>
              <Route path="/results">
                <Results />
              </Route>
              <Route path="/freelances">
                <Freelances />
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
            <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// Il est possible de passer des param??tres dans une route et de les r??cup??rer avec useParams()

// https://ui.dev/react-router-v5-protected-routes-authentication

// PrivateRoute component which would render the component only if the user was authenticated.

/*

Route is composable
Compose Something Like:

<Route path="/public">
  <Public />
</Route>
<Route path="/login">
  <Login />
</Route>
<PrivateRoute path='/protected'>
  <Protected />
</PrivateRoute>

to prevent unauthentificated access

Here are the requirements for our PrivateRoute component.

It has the same API as <Route />.
It renders a <Route /> and passes all the props through to it.
It checks if the user is authenticated. If they are, it renders the "component" prop. If not, it redirects the user to /login.
*/

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return fakeAuth.isAuthenticated === true ? (
//           children
//         ) : (
//           <Redirect to="/login" />
//         );
//       }}
//     />
//   );
// }

/*First, let's add a login method which calls fakeAuth.authenticate.*/

// function Login() {
//   const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);

//   const login = () =>
//     fakeAuth.authenticate(() => {
//       setRedirectToReferrer(true);
//     });

//   if (redirectToReferrer === true) {
//     return <Redirect to="/" />;
//   }

//   return (
//     <div>
//     <p>You must log in to view the page</p>
//     <button onClick={login}>Log in</button>
//     </div>
//  );
//  }

// La biblioth??que PropTypes vous permet de d??clarer le type des props qui est attendu lorsque vous les r??cup??rez dans vos composants, 
// et de d??clencher un warning si ??a ne correspond pas.

// utiliser une prop variation pour avoir un bouton blue/red selon son valeur

// const Button = styled.button`
// background-color: ${(props) => props.variation === 'primary' ? 'blue' : 'red' };

// REVISION des hooks:
// useEffect, d'ex??cuter des actions apr??s le render de nos composants, en choisissant ?? quel moment et ?? quelle fr??quence cette action doit ??tre ex??cut??e, avec le tableau de d??pendances.
// useState, permet d'ajouter un state local dans un composant fonction
// useEffect nous permettra de d??clencher le fetch;
// useState permettra de stocker le retour de l'API dans le state

// API (Application Programming Interface) est nous permet de r??cup??rer des donn??es qui nous permet de r??cup??rer des donn??es