import React,{Component} from 'react';
import './App.css';
import VotingItem from './VotingItem';

class Voting extends Component{
	constructor(props){
		super(props);
		 
	}

	state = {items : ["JavaScript", "Java", "Python"]};

	createVotingItem = name => <VotingItem itemName={name} />;

	render(){
		return(
			<div>
				<div> Go vote, the power is all yours</div>
				{this.state.items.map(item => this.createVotingItem(item))}
			</div>
		);
	}
}
export default Voting;