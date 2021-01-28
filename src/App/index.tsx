import React  from 'react'
import ReactDOM from 'react-dom'
import Http from './services/Http'

declare global {
  type RFC = React.FunctionComponent
}

const App:RFC = () => {
  return (
    <div className="users">
    <div className="tile">
      <div className="user">
      <i className="fa fa-lg fa-edit"></i>
      </div>
    </div>
    <h1>Привет мир</h1>
  </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
