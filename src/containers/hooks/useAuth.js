import { useContext} from "react";

import { AuthContext } from "container/context/Auth";

export default function useAuth() {
	return useContext(AuthContext);
}