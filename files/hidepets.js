const name = "Hide pets";
const id = "plugins.pi.hidepets";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Hides all pets in the game";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		game.currentScene.justAboveAnimalsContainer.visible = false;
	});
	blockyfish.addEventListener("game-load", () => {
		game.currentScene.justAboveAnimalsContainer.visible = false;
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
