const name = "I see dead fish";
const id = "plugins.pi.iseedeadfish";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = 'Show all ghosts. This is the only way to see ghosts without becoming a ghost because saying "I see dead fish" no longer works.';
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		game.currentScene.viewingGhosts = true;
	});
	blockyfish.addEventListener("game-load", () => {
		game.currentScene.viewingGhosts = true;
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
