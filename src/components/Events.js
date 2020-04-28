import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
class Events extends React.Component {
  constructor(props) {
    super(props);
    this.alertClicked=this.alertClicked.bind(this);
    this.state = {
       selectedImage : "",
       events:[
        {type:"Competition",name:'Sample1',imageUrl:require('..//assets//Images//1.jpg')},
        {type:"Competition",name:'Sample2',imageUrl:require('..//assets//Images//2.jpg')},
        {type:"Workshops",name:'Sample3',imageUrl:require('..//assets//Images//3.jpg')},
        {type:"Workshops",name:'Sample4',imageUrl:require('..//assets//Images//4.jpg')},
        {type:"Fdps",name:'Sample5',imageUrl:require('..//assets//Images//5.jpg')},
        {type:"Fdps",name:'Sample6',imageUrl:require('..//assets//Images//6.jpg')},
        {type:"Trainings",name:'Sample7',imageUrl:require('..//assets//Images//7.jpg')},
        {type:"Trainings",name:'Sample8',imageUrl:require('..//assets//Images//8.jpg')},
        {type:"Conference",name:'Sample9',imageUrl:require('..//assets//Images//9.jpg')},
        {type:"Conference",name:'Sample10',imageUrl:require('..//assets//Images//10.jpg')}
    ],
       selectedSubEvents : [],
       parameterType:this.props.match.params.type
    };
  }

  componentDidMount(){
    
  this.setState({
    selectedSubEvents:this.state.events.filter(item=>item.type.toLowerCase()===this.state.parameterType)
  });
  }
  
  alertClicked(name) {
    let imageUrl=this.state.selectedSubEvents.filter(item=>item.name===name)[0].imageUrl;
    this.setState({
      selectedImage : imageUrl
    });
  }
    render() {
    return(
      <div>
        <ReactBootstrap.ListGroup horizontal>
          {this.state.selectedSubEvents.map(item=>(
            <ReactBootstrap.ListGroup.Item key={item.name} action variant="secondary" onClick={(name)=>this.alertClicked(item.name)}>
              {item.name}
            </ReactBootstrap.ListGroup.Item>    
          ))}
        </ReactBootstrap.ListGroup>
        {this.state.selectedImage!=="" &&
          <ReactBootstrap.Image width={800} height={400} src={this.state.selectedImage} />
        }
      </div>
    )
  }
}
export default Events;