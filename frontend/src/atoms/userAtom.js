import { atom } from "recoil";

const userAtom = atom({
	key: "userAtom",
	default: JSON.parse(localStorage.getItem("user-threads")) || null,
});

console.log("Initial user state:", JSON.parse(localStorage.getItem("user-threads")));

export default userAtom;
