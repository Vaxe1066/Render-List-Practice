import React, {Component} from 'react';



function ListItem(props){
    return <li>{props.value}  {props.img} {props.edit} </li>;
}


function Overview(props) {
    const items = props.items;
    const listItems = items.map((item) =>
      <ListItem key={item.id} value={item.val} img={item.img} edit={item.edit}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }







/*
class Overview extends Component {
    constructor(props) {
        super(props);
        this.listItems = this.listItems.bind(this);
    }

    listItems(items){
        items.map((item) =>
            <li >
                {item}
            </li>
        );
        console.log(items)
    }


    

    render() {
        return (
            <div>
                <h1>{this.props.items}</h1>
                <ul>{this.listItems(this.props.items)}</ul>
            </div>
        );
    }
}*/

export default Overview;