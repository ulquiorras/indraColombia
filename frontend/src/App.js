import React from 'react';
import './styles/App.scss'


class App extends React.Component {
 
 constructor(){
    super()
    this.text = React.createRef()
    this.changeColor = this.changeColor.bind(this)
    this.changeColor2 = this.changeColor2.bind(this)

 }

 changeColor(){
   this.text.current.style.color = 'red'
 }

 changeColor2(){
  this.text.current.style.color = 'blue'
}
 render() {
  return (
    <main>
      <div className="container">
        <p className="text" ref={this.text}>Prueba Basica React</p>
        <div className="buttons">
          <button onClick={this.changeColor2} className="blue">Azul</button>
          <button onClick={this.changeColor} className="red">Rojo</button>
        </div>
      </div>
    </main>
  );
 }
  
}

export default App;
