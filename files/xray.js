const name = "X-ray";
const id = "plugins.pi.xray";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Allows you to see hiding and digging animals in the game";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		game.currentScene.foodGlowContainer.zOrder = 996;
		game.currentScene.foodContainer.zOrder = 997;
		game.currentScene.namesLayer.zOrder = 998;
		game.currentScene.animalsContainer.zOrder = 999;
		game.currentScene.barsLayer.zOrder = 1000;
		game.currentScene.chatContainer.zOrder = 1001;
		setInterval(function () {
			try {
				game.currentScene.ceilingsContainer.alpha = 0.3;
			} catch {}
		}, 200);
	});
	blockyfish.addEventListener("game-load", () => {
		game.currentScene.foodGlowContainer.zOrder = 996;
		game.currentScene.foodContainer.zOrder = 997;
		game.currentScene.namesLayer.zOrder = 998;
		game.currentScene.animalsContainer.zOrder = 999;
		game.currentScene.barsLayer.zOrder = 1000;
		game.currentScene.chatContainer.zOrder = 1001;
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
