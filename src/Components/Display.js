import React from 'react';
import Modal from 'react-modal';

class Display extends React.Component {
    constructor(){
        super()
          this.state = {
            modalIsOpen: false,
            selectedItem: null
          }
          this.openModal = this.openModal.bind(this);
          this.closeModal = this.closeModal.bind(this);
          
      }


    openModal(id) {
        this.setState({modalIsOpen: true, selectedItem: id});
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
    
      

    render() {
      {dessertArray.map((dessert, id) => {
        return (
         
          <div className='container' key={id}>
           
            <img height='500px' width='500px' src={dessert.image}/> 
            <button height='200px' onClick={this.openModal}>{dessert.name}</button>
            <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
            
            
            <button onClick={this.closeModal}>close</button>
            </Modal>
          </div> 
          
        ) 
       })                        
      }
    }
  }

export default Display;  