const INITIAL_STATE = {
	isLoggedIn: localStorage.getItem("jwt") || false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
