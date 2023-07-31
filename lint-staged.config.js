module.exports = {
	"*.{js,jsx,ts,tsx}": ["prettier --write"],
	"**/*.ts?(x)": () => "npm run check-types",
	"*.{json,yaml}": ["prettier --write"],
};
