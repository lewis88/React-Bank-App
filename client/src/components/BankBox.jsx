var React = require('react');
var Sample = require('../sample_accounts.js');
var AccountBox = require('./AccountBox.jsx');

var BankBox = React.createClass({

	getInitialState: function(){
		return { accounts: Sample }
	},

	separateAccounts: function( type ){
		var accounts = this.state.accounts.filter( function(account){
			return ( account.type === type )
		})
		return accounts
	},

	getTotal: function( accounts ){
		var accountValues = accounts.map( function( account ){ return account.amount } )
		return accountValues.reduce( (a, b) => a + parseInt(b) );
	},

	addInterest: function(){
		var accountValue = this.state.accounts.map( function( account ){
			account.amount = ( account.amount * ( 1 + 10 / 100 ) ).toFixed(2);
			return ( account )
		})
		this.setState( { accounts: accountValue } );
	},

	render: function(){

		var personalAccounts = this.separateAccounts( 'Personal' );
		var personalTotal = this.getTotal( personalAccounts );

		var businessAccounts = this.separateAccounts( 'Business' );
		var businessTotal = this.getTotal( businessAccounts );

		return (
			<div>
				<h2> Mossack Fonseca </h2>
				<AccountBox accounts={ personalAccounts }
										total={ personalTotal } />
				<AccountBox accounts={ businessAccounts }
										total={ businessTotal } />
				<h2> Total Bank Value: { this.getTotal( this.state.accounts ) }</h2>
				<button onClick={ this.addInterest } >
					10% Interest
				</button>
   		</div> );
	}

});

module.exports = BankBox;
