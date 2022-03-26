import { useState } from "react";

import { fakeAuth } from "services/fakeAuth";

export default function useAuth() {
	const [auth, setAuth] = useState(false);

	const signin = cb => {
		return fakeAuth.signin(() => {
			setAuth(true);
			cb();
		});
	};

	const signout = cb => {
		return fakeAuth.signout(() => {
			setAuth(null);
			cb();
		});
	};

	return {
		auth,
		signin,
		signout
	};
}