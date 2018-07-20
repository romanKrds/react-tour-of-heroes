import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateHero } from '../../modules/actions/heroes'
import { bindActionCreators } from 'redux'

class HeroDetails extends Component{

	state = {
		name: this.props.hero.name
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.hero.name !== this.state.name) {
			this.setState({ name: nextProps.hero.name});
		}
	}

	onUpdate = () => {
		this.props.updateHero({
			id: this.props.hero.id,
			name: this.state.name
		})
	}

	onNameChanges = (event) => {
		this.setState({
			name: event.target.value
		});
	}


	render() {
		const hero = this.props.hero;
		return (
			<div>
				It's Detail's view
				<h2>{this.state.name === '' ? '<no_name>' : this.state.name } Details</h2>
				<div><span>id: </span>{hero.id}</div>
				<div>
					<label>name:
						<input placeholder="name" onChange={(e) => this.onNameChanges(e)}/>
					</label>
					<button onClick={() => {this.onUpdate()}}>
						Update
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({heroes}) => ({list: heroes.list});
const mapDispatchToProps = dispatch => bindActionCreators({updateHero}, dispatch);

export default connect(	mapStateToProps, mapDispatchToProps )(HeroDetails);