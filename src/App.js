import React, { Component } from 'react';
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  idx: 0,
                  array: []
                  };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArray = this.handleArray.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.createStruct = this.createStruct.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);

  }


  changeCount(){
    this.setState({idx: this.state.idx+1});
  }

  createStruct() {
    let struct = {id:this.state.idx, val:this.state.value, img:<i className="fa fa-trash" id={this.state.idx} onClick={this.delete}></i>, 
                  edit:<i className="fa fa-edit" id={this.state.idx} onClick={this.edit}></i> }
    return struct;
  }

  handleChange(event){
    this.setState({value: event.target.value
                  });
  }

  handleArray(valueNew){
    this.setState({
                    array: [...this.state.array, valueNew]
                  });
  }

  resetForm(){
    this.setState({value:""});
  }


  handleSubmit(event){
    let struct = this.createStruct();
    this.handleArray(struct);
    this.changeCount();
    this.resetForm();
    event.preventDefault();
  
  }  
    /*this.handleArray(event);*/

    delete(event){
      let idxRemove = event.target.id;
      //let removed = this.state.array.filter(item => item.id!==idxRemove);
      let removed = this.state.array.filter(item => item.id!==Number(idxRemove));
      this.setState({
        array: removed
      })
    }

    edit(event){
      console.log("i am edit button");
      let idxEdit = event.target.id;
      console.log(idxEdit);
      let task = this.state.array.filter(item => item.id===Number(idxEdit));
      let newText = prompt("edit the task",task[0].val);
      const isTask = (item) => item.id===Number(idxEdit);
      let idxObj = this.state.array.findIndex(isTask);
      task[0].val = newText;
      let newObj = this.state.array.slice(idxObj,1, task[0]);
      this.setState({
        array: newObj,
      })
    }
    
  
  render(){
    return (
      <div>
        <form  onSubmit={this.handleSubmit}>
          <label>
            Task:
            <input id="form-input" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />

        </form>

        <Overview items={this.state.array}/>
      
      </div>
      

    );
  }

}

export default App;
