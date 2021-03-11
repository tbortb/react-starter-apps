import React,{Component} from 'react';

class VotingItem extends Component{

    state = {voteCount : 0};
    

    
    /* Does not work, becuase the this keyword's context changes to wherever the funciotn is called
    That behaviour is prevented by using the fat arrow syntax
    So don`t use 
    vote = function(){
        this.setState(state => ({voteCount : state.voteCount + 1}))
    }
    Instead use:
    vote = () => this.setState(state => ({voteCount : state.voteCount + 1}));
    */
    vote = () => this.setState(state => ({voteCount : state.voteCount + 1}));
    
    render(){
        return (<div>
            <span>{this.state.voteCount}</span>
            <span>{this.props.itemName}</span>
            <span><button onClick={this.vote}>Vote</button></span>
        </div>);
    }
} 

export default VotingItem;