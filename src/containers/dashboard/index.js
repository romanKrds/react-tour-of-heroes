import React, { Component } from 'react';
import './dashboard.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {

	render() {

		const heroesList = this.props.list.slice(1, 5);

		return (
			<div>
				<h3>Top Heroes</h3>
				<div className={`grid grid-pad`}>
					{
						heroesList.map( hero => {
							return (
								<Link to={{ pathname: `/details/${hero.id}` }}
									  className={`col-1-4`}
									  key={hero.id}>
									<div className={`module hero`}>
									<h4>{hero.name}</h4>
									</div>
								</Link>
							)
						})
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({heroes}) => ({list: heroes.list});

export default connect(	mapStateToProps ) (Dashboard)