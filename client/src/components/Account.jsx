var React = require('react');

var Account = React.createClass({

	// handleDelete: function(){
	// 	// log out the name of the deleted comment author
	// 	console.log( 'delete pressed', this.props.account.owner );
	// 	this.props.onAccountDelete( this.props.id );
	// },

	render: function(){

		return (
			<div key={ this.props.account.owner }>
				<p> Owner: { this.props.account.owner } </p>
				<p> Amount: { this.props.account.amount } </p>
				{/*<button onClick={ this.handleDelete }> X </button>*/}
			</div>
		)
	}

});

module.exports = Account;
