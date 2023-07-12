import React from 'react';
import './SearchInput.css';

class SearchInput extends React.Component{

  constructor(props){
    super(props)
    this.state={entry:''}
  }

  // onInputChange(event){
  //   console.log(event.target.value)                   //event handler
  //
  // }

  render(){
    return(
      <div className='ui segment'>
      <form action="" className='ui form'>
      <h1 className='color'><center>AI <span className='color2'>Search</span>
      <span className='color3'>Engine</span></center></h1>
      <div className='field'>
      <div className='ui massive icon input'>
      <input type="text" placeholder='search here'
       onChange={(event)=>this.setState({entry:event.target.value})}
       value={this.state.entry}/>
      <i className=' search icon'></i>
      </div>
      </div>
      </form>
      </div>

    )
  }
}

export default SearchInput;
