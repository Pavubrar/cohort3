import React from 'react';

class AccountCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: this.props.account,
            updateBalanceInput: "",
            currentBalance: this.props.initialbalance,
            result:"",
            result: "",
            resultDel: ""
        }
    }

    handleInputChange = event => {
        this.setState({
            updateBalanceInput: event.target.value
        });
    }
    handleDeposit = () => {
        this.state.account.deposit(this.state.updateBalanceInput);
        this.setState({
            updateBalanceInput: "",
            result: `Deposited: $ ${this.state.updateBalanceInput}`
        });
        this.props.calcReport();

    }
    handleWithdraw = () => {
        this.state.account.withdraw(this.state.updateBalanceInput);
        this.setState({
            updateBalanceInput: "",
            result: `Withdrawed: $ ${this.state.updateBalanceInput}`
        });
        this.props.calcReport();
    }
    handleDelete = () => {
        this.props.removeAccount(this.state.account.accountType)
        this.setState({
            resultDel: `${this.state.account.accountType} is deleted`
        })
        this.props.displayMessage(this.state.resultDel)
        console.log(this.state.resultDel);
        
    }
    // handleCurrentBalance = () => {
    //     this.props.balance(this.state.currentBalance)

    // }
    render() {
        console.log(this.state.account.currentBlance);
        return (
            <div className="card" id="idPrimaryCard">
                <h3>{this.state.account.accountType} Account</h3> <br />
                <label>Amount:
            <span className="input-symbol-dollar"><input className="amount-input-dollar"
                        type="number"
                        value={this.state.updateBalanceInput}
                        onChange={this.handleInputChange}
                        min="0"
                        step="0.01" />
                    </span>
            {/* <span> Balance: $</span> */}
            <span id="idBalance">Balance: $ {this.state.account.currentBlance}</span>
                </label><br/>
                <input type="button" value="Deposit" onClick={this.handleDeposit} />
                <input type="button" value="Withdraw" onClick={this.handleWithdraw} />
                <input type="button" value="x" className="delete-button" onClick={this.handleDelete} />
                <p>{this.state.result}</p>

            </div>
        );
    }
}
export default AccountCard;