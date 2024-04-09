import React, { Component } from 'react'
import './App.css';
import ph1 from './images/ph1.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      Person: {
        fullNameJob: 'tasnimBenLaroussi',
        imgSrc: ph1,
        profession: 'csStudent'
      },
      show: false,
      mountedTime: null,
      time:0
    };
    

  }


  click=()=>{
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 5000);
  }
    
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    
    return (
      <div className='App'>
       {/* bootstrap button to display the card when 'show' variable is set to true  */}
      <Button variant="outline-light" onClick={this.click}>Click Here!</Button> 
       {/* bootstrap card  */}
      {this.state.show ===true && <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.state.Person.imgSrc} />
      <Card.Body>
        <Card.Title>{this.state.Person.fullNameJob}</Card.Title>
        <Card.Text>
          Profession:{this.state.Person.profession} 
        </Card.Text>
      </Card.Body>
    </Card>}
      </div>

    )
  }
}
export default  App