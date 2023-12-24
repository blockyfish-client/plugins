const name = "Better vision";
const id = "plugins.pi.bettervision";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Removes flashbangs, ink, and darkness.";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		game.currentScene.toggleFlash = function () {};
		game.currentScene.terrainManager.shadow.setShadowSize(1000000);
		game.currentScene.terrainManager.shadow.setShadowSize = function () {};
	});
	blockyfish.addEventListener("game-load", () => {
		game.currentScene.toggleFlash = function () {};
		game.currentScene.terrainManager.shadow.setShadowSize(1000000);
		game.currentScene.terrainManager.shadow.setShadowSize = function () {};
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
