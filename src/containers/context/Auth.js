import React, { createContext} from "react";

import useProvideAuth from "hooks/useProvideAuth";

const AuthContext = createContext();

export function ProvideAuth({ children }) {
	const auth = useProvideAuth();

	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	);
}