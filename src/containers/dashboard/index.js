import React, { Component } from 'react';
import './dashboard.css';
import { connect } from 'react-redux'
import { loadHeroes } from '../../modules/actions/heroes'
import { bindActionCreators } from 'redux'
import HeroDetails from '../hero-details'

class Dashboard extends Component {

	state = {
		selectedHero: undefined
	}

	componentDidMount(){
		this.props.loadHeroes();
	}

	onHeroSelected = (hero) => {
		this.setState({
			selectedHero: hero
		})
	}

	render() {

		const heroesList = this.props.list.slice(1, 5);

		return (
			<div>
				<h3>Top Heroes</h3>
				<div className={`grid grid-pad`}>
					{
						heroesList.map( hero => {
							return (
								<a
									className={`col-1-4`}
									onClick={() => this.onHeroSelected(hero)}
							   		key={hero.id}>

									<div className={`module hero`}>
										<h4>{hero.name}</h4>
									</div>
								</a>
							)
						})
					}
				</div>
				{
					this.state.selectedHero && <HeroDetails hero={this.state.selectedHero}/>
				}
			</div>
		);
	}
}

const mapStateToProps = ({heroes}) => ({list: heroes.list});
const mapDispatchToProps = dispatch => bindActionCreators({ loadHeroes }, dispatch);

export default connect(	mapStateToProps, mapDispatchToProps )(Dashboard);