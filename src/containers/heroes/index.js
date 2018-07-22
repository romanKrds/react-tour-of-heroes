import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { loadHeroes } from '../../modules/actions/heroes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './heroes.css'
import { DeleteButton } from './style'

class Heroes extends Component {
	state = {
		deleteBtnColor: 'white',
	}

	addHero = () => {
		console.log(`Add hero function. Not implemented yet`);
		this.setState({ deleteBtnColor: 'red' });
	}

	deleteHero = () => {
		console.log(`Delete hero function. Not implemented yet`);
		this.setState({ deleteBtnColor: 'white' });
	}

	render() {
		const heroesList = this.props.list;

		return (
			<div>
				<h2>My Heroes</h2>
				<div>
					<label>
						Hero name:
						<input/>
					</label>
				<button onClick={() => {this.addHero()}}>
					add
				</button>
				</div>

				<ul className={`heroes`}>
					{
						heroesList.map( hero => {
							return (
								<li key={hero.id}>
									<Link to={{ pathname: `/details/${hero.id}` }}>
										<span className={`badge`}>{hero.id}</span> {hero.name}
									</Link>
									<DeleteButton color={this.state.deleteBtnColor} title="delete hero"
											onClick={ () => {this.deleteHero(hero)}}> x
									</DeleteButton>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({heroes}) => ({list: heroes.list});

export default connect(	mapStateToProps ) (Heroes)