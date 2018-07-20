import * as HERO from '../constants/heroes';

export const loadHeroes = () => dispatch => {

	return fetch('http://localhost:3004/heroes')
		.then( response => response.json() )
		.then( data => {
			console.log('loadHeroes action')
			try {
				dispatch ({
					type: HERO.LOAD_HEROES,
					payload: data
				});
			} catch (e) {
				console.error(e)
			}
		});
}

export const updateHero = (hero) => dispatch => {

	const parameters = {
		method: 'PUT',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(hero)
	}

	return fetch(`http://localhost:3004/heroes/${hero.id}`, parameters)
		.then( response => response.json() )
		.then(data => {
			console.log('updateHero action')
			try {
				dispatch ({
					type: HERO.UPDATE_HERO,
					payload: data
				});
			} catch (e) {
				console.error(e)
			}
		})
}