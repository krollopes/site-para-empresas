import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Site from './Site'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import Inicio from './components/Inicio'
import Servicos from './components/Servicos'
import Portfolio from './components/Portfolio'
import Precos from './components/Precos'
import Contato from './components/Contato'

// Area Administrativa
import Admin from './admin/Admin'
import Login from './admin/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path='/' exact component={Inicio}/>
          <Route path='/servicos' component={Servicos}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/precos' component={Precos}/>
          <Route path='/contato' component={Contato}/>

          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
