import logo from '../logo.svg';
import '../App.css';

import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import { useState, useEffect } from 'react'


/* Code par default
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>
          Edit <code>src/components/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

// formulaire non-controlee
function handleSubmit(e) {
  e.preventDefault() // sinon, le submit rafraichirait la page
  alert(e.target['my_input'].value)
}

function App() {
  // useEffect(() => {
  //   alert('Bienvenue dans La maison jungle')
  // }, [])
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  const [isFooterShown, updateIsFooterShown] = useState()

  // pasant un objet en localStorage en utilisant JSON.stringify() et localStorage.setItem()
  // de localStorage en objet en utilisant JSON.parse() et localStorage.getItem()
  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // pas de soucis pour utiliser plusieurs useEffect dans un même
  
  // passe du updateCart et cart en props
  return (
    <div>
      <Banner />
      <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>
          Cacher !
      </button>
      { isFooterShown && (
        <div>
          <div>formulaire non-controlee</div>
          <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
          </form>
          <div>formulaire controlee</div>
          <QuestionForm />
          <Footer />
        </div> 
      )}
    </div>
  )
}
export default App;
