import React, {Component} from 'react'

class Wallet extends Component{
    constructor(props){
        super(props)
        this.state = {money: null}
    }

    render(){
        return(
            <div>
            <form onSubmit={(e) => {e.preventDefault(); this.props.addMoney(this.state.money);}}>
                <label>Money Adder</label>
                <input type="number" value={this.state.money} onChange={event => {this.setState({money: event.target.value})}}/>
                <input type="submit" value="ADD MONEY"/>
            </form>
            </div>
        )
    }
}

export default Wallet