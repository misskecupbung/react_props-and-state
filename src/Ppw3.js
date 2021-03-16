import React, { Component } from 'react';
import './App.css';

class Ppw3 extends Component {
	constructor(props){
		super(props);
		this.state = { join: 'Silakan Join '};
	}

	joined = () => {
		this.setState({ join: 'Terima kasih sudah Join '});
	}

	render(){
		return (
			<div className="warna">
			{this.state.join}
			{this.props.jenis} {this.props.nama}
			<br/>
			<button onClick={this.joined}>Join</button>
			</div>
		);
	}
}

export default Ppw3;
