import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class Dessert extends React.Component {
  constructor(){
    super()
      this.state = {
        dessertArray: [],
        modalIsOpen: false,
        selectedItem: null
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    axios.get('https://kristinahales.github.io/Data/dessert.json')
    .then(res => {
      console.log(res.data)
      this.setState({dessertArray: res.data})
    })
    .catch(err => {
      console.log('Error retrieving dessert data', err)
    })
  }

  openModal(id) {
    this.setState({modalIsOpen: true, selectedItem: id})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderModal() {
    const {dessertArray, selectedItem} = this.state;
    if(this.state.selectedItem != null) {
      return (
        <div>
          <h1>{dessertArray[selectedItem].name}</h1>
          <img height='500px' width='500px' src={dessertArray[selectedItem].image}/>
          <h3>Ingredients:</h3>
          {dessertArray[selectedItem].ingredients.map((ingredient,id) => {
            return (<p key={id}>{ingredient}</p>)
          })} 
          
          <h3>Directions:</h3>
          {dessertArray[selectedItem].directions.map((direction,id) => {
            return (<p key={id}>{direction}</p>)
          })}
        </div>
      )
    }
      
  }

    render() {
      let {modalIsOpen, dessertArray} = this.state;
        return  <div id="page-wrap">
                  <h1>Desserts</h1>
                  {dessertArray.map((dessert, id) => {
                    return (
                      <div className='container' key={id}>
                        <img height='500px' width='500px' src={dessert.image}/> 
                        <button height='200px' onClick={() => {this.openModal(id)} }>{dessert.name}</button> 
                      </div> 
                    ) 
                   })                        
                  }
                  <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
                    <div>
                      {this.renderModal()}
                      <button onClick={this.closeModal}>close</button>
                    </div>
                  </Modal>   
                </div>         
    }
  }

export default Dessert;  