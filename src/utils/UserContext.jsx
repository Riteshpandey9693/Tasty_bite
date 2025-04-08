import { createContext } from "react";

const UserContext = createContext({
	loggedInuser: { name: "Pandey", email: "Pandey@example.com" },
});
export default UserContext;
UserContext.displayName = "UserContext";