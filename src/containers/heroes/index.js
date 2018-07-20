import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { loadHeroes } from '../../modules/actions/heroes'
import { connect } from 'react-redux'
import './heroes.css'


class Heroes extends Component {

	componentDidMount(){
		this.props.loadHeroes();
	}

	addHero = () => {
		console.log(`Add hero function. Not implemented yet`);
	}

	deleteHero = () => {
		console.log(`Delete hero function. Not implemented yet`);
	}

	onHeroSelected = (hero) => {
		console.log(hero);
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
									<a>
										<span className={`badge`}>{hero.id}</span> {hero.name}
									</a>
									<button className={`delete`} title="delete hero"
											onClick={ () => {this.delete(hero)}}> x
									</button>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({ heroes }) => ({
	list: heroes.list
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadHeroes }, dispatch);

export default connect(	mapStateToProps, mapDispatchToProps )(Heroes);