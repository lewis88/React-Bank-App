var React = require('react');
var Account = require('./Account.jsx');

var AccountBox = React.createClass({

	render: function(){

		var allAccounts = this.props.accounts.map( function( account ){
			return (
				<Account account={ account } />
			)
		});

		var newId = Date.now();

		return (
			<div key={ newId }>
				<h3>{ this.props.accounts[0].type } - Total Value: { this.props.total }</h3>
				{ allAccounts }
			</div>
		);
	}

});

module.exports = AccountBox;
