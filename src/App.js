import React, {Component} from 'react'
import './App.scss'
import AppHeader from './components/AppHeader/AppHeader'
import RolesAdmin from './components/RolesAdmin/RolesAdmin'

class App extends Component {
  render() {
    return (
      <div className="app-layout">
        <header className="app-header">
          <AppHeader />
        </header>
        <section className="app-main">
          <RolesAdmin />
        </section>
      </div>
    )
  }
}

export default App;
