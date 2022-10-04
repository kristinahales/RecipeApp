import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './AllCss.css';

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
        <div className='recipe-details-container'>
          <p className='recipe-details-name-section'>{dessertArray[selectedItem].name}</p>
          <img height='250px' width='300px' src={dessertArray[selectedItem].image}/>
          <p className='recipe-details-section'>Ingredients:</p>
          {dessertArray[selectedItem].ingredients.map((ingredient,id) => {
            return (<li key={id}>{ingredient}</li>)
          })} 

          <p className='recipe-details-section'>Directions:</p>
          {dessertArray[selectedItem].directions.map((direction,id) => {
            return (<li className='recipe-direction-list' key={id}>{direction}</li>)
          })}
        </div>
      )
    }
      
  }

    render() {
      let {modalIsOpen, dessertArray} = this.state;
        return  <div>
                  <div className="main-header">Desserts</div>
                  <div className='main-container'>
                  {dessertArray.map((dessert, id) => {
                    return (
                      <div className='recipe-container' key={id}>
                        <p className='recipe-name'>{dessert.name}</p>
                        <img height='250px' width='300px' src={dessert.image}/> 
                        <button className='recipe-button' onClick={() => {this.openModal(id)} }>Recipe</button> 
                      </div> 
                    ) 
                   })                        
                  }
                  </div>
                  <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
                    <div>
                      {this.renderModal()}
                      <button className='modal-close-button' onClick={this.closeModal}>Close</button>
                    </div>
                  </Modal>   
                </div>         
    }
  }

export default Dessert;  