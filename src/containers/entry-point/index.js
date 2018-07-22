import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loadHeroes } from '../../modules/actions/heroes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


class EntryPoint extends Component {

	componentDidMount(){
		this.props.loadHeroes();
	}

	render() {
		return (
			<div>
				<nav>
					<Link to="/">Dashboard</Link>
					<Link to="/heroes">Heroes</Link>
				</nav>


				{
					this.props.children
				}
			</div>
		)
	}
}

const mapStateToProps = ({heroes}) => ({list: heroes.list});
const mapDispatchToProps = dispatch => bindActionCreators({ loadHeroes }, dispatch);

export default connect(	mapStateToProps, mapDispatchToProps ) (EntryPoint)
