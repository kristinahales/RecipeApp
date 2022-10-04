import React from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './AllCss.css';

Modal.setAppElement('#root');

class MainCourse extends React.Component {
  constructor(){
    super()
      this.state = {
        mainCourseArray: [],
        modalIsOpen: false,
        selectedItem: null
      }
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    axios.get('https://kristinahales.github.io/Data/maincourses.json')
    .then(res => {
      console.log(res.data)
      this.setState({mainCourseArray: res.data})
    })
    .catch(err => {
      console.log('Error retrieving main course data', err)
    })
  }

  openModal(id) {
    this.setState({modalIsOpen: true, selectedItem: id})
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderModal() {
    const {mainCourseArray, selectedItem} = this.state;
    if(this.state.selectedItem != null) {
      return (
        <div className='recipe-details-container'>
          <p className='recipe-details-name-section'>{mainCourseArray[selectedItem].name}</p>
          <img height='250px' width='300px' src={mainCourseArray[selectedItem].image}/>
          <p className='recipe-details-section'>Ingredients:</p>
          {mainCourseArray[selectedItem].ingredients.map((ingredient,id) => {
            return (<li key={id}>{ingredient}</li>)
          })} 

          <p className='recipe-details-section'>Directions:</p>
          {mainCourseArray[selectedItem].directions.map((direction,id) => {
            return (<li className='recipe-direction-list' key={id}>{direction}</li>)
          })}
        </div>
      )
    }
      
  }

    render() {
      let {modalIsOpen, mainCourseArray} = this.state;
        return  <div>
                  <div className="main-header">Main Courses</div>
                  <div className='main-container'>
                  {mainCourseArray.map((mc, id) => {
                    return (
                      <div className='recipe-container' key={id}>
                        <p className='recipe-name'>{mc.name}</p>
                        <img height='250px' width='280px' src={mc.image}/> 
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

export default MainCourse;  