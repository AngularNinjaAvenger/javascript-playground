 import react,{component} from 'react';
 import {provider} from 'react-redux';
import {createStore} from redux;
import reducer from './redux'
const store  = createStore(reducer);

 reactDOM.render(<provider store={store}><app /></provider>,document.getElementById('geek'))}
