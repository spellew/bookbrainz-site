var React = require('react');
var Select = require('../../input/select.jsx');
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;


var PublicationData = React.createClass({
	getValue: function() {
		return {
			publicationType: this.refs.publicationType.getValue(),
			disambiguation: this.refs.disambiguation.getValue(),
			annotation: this.refs.annotation.getValue()
		};
	},
	valid: function() {
		return true;
	},
	render: function() {
		if (this.props.publication) {
			var initialPublicationType = this.props.publication.publication_type ? this.props.publication.publication_type.publication_type_id : null;
			var initialDisambiguation = this.props.publication.disambiguation ? this.props.publication.disambiguation.comment : null;
			var initialAnnotation = this.props.publication.annotation ? this.props.publication.annotation.content : null;
		}

		var select2Options = {
			width: '100%'
		};

		return (
			<div className={(this.props.visible === false) ? 'hidden': '' }>
				<h2>Add Data</h2>
				<p className='lead'>Fill out any data you know about the entity.</p>

				<div className='form-horizontal'>
					<Select
						label='Type'
						labelAttribute='label'
						idAttribute='id'
						defaultValue={initialPublicationType}
						ref='publicationType'
						placeholder='Select publication type…'
						noDefault
						options={this.props.publicationTypes}
						select2Options={select2Options}
						labelClassName='col-md-4'
						wrapperClassName='col-md-4' />
					<hr/>
					<Input
						type='text'
						label='Disambiguation'
						ref='disambiguation'
						defaultValue={initialDisambiguation}
						labelClassName='col-md-3'
						wrapperClassName='col-md-6' />
					<Input
						type='textarea'
						label='Annotation'
						ref='annotation'
						defaultValue={initialAnnotation}
						labelClassName='col-md-3'
						wrapperClassName='col-md-6'
						rows='6' />
					<div className='form-group margin-top-1'>
						<div className='col-md-1'>
							<Button bsStyle='primary' block onClick={this.props.backClick}>
								<span className='fa fa-angle-double-left' /> Back
							</Button>
						</div>
						<div className='col-md-1 col-md-offset-10'>
							<Button bsStyle='success' block onClick={this.props.nextClick}>
								Next <span className='fa fa-angle-double-right' />
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = PublicationData;
