import * as HERO from '../constants/heroes';

const initialState = {
	list: [
		{
			id: 0,
			name: 'Stub'
		}
	]
	//	add property show details for toggling details view
}

export default (state = initialState, action) => {
	switch (action.type) {
		case HERO.LOAD_HEROES:
			return {
				...state,
				list: [...action.payload]
			};

		case HERO.UPDATE_HERO:
			return {
				...state,
				list: state.list.map(hero =>
					hero.id === action.payload.id ? {...hero, ...action.payload} : hero
				)
			};

		case HERO.ADD_HERO:
			break;

		case HERO.DELETE_HERO:
			break;

		default:
			return state;
	}
}

