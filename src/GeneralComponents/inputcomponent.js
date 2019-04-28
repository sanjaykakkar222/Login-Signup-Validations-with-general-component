import React from 'react';
class inputcomponent extends React.Component {


  constructor(props) {

    super(props)

    this.state = {
      //intializestate

    }

  }
  render() {
    return (
    <div className="form-group">
     
     
      <input className="form-control" type={this.props.inputtype} name={this.props.inputname} value={this.props.inputvalue} placeholder={this.props.inputplaceholder} onChange={this.props.inputchange}></input>
    </div>
    );
  }

}
export default inputcomponent;