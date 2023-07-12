import React from 'react'
import SearchInput from './SearchInput'
import ImageList from './ImageList'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar'

class Home extends React.Component {

  constructor(props){
    super(props)
    this.state= {images: []}
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
  }

async  onSearchSubmit(entry){
  const response = await  axios.get
  (`https://pixabay.com/api/?key=38160395-97a3bbf474a185f8d9c18884d&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)
    this.setState({images:response.data.hits})
  }



render(){

  return(



    <div className='ui container' style={{marginTop:'50px'}}>
    <SearchInput/> we currently have {this.state.images.length} images
    </div>

  )

}
}


export default Home;
