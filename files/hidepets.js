const name = "Hide pets";
const id = "plugins.pi.hidepets";
const author = "Pi";
const version = "1.1.1";
const versionNumber = 1110;
const description = "Hides all pets in the game";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		setInterval(() => {
			try {
				game.currentScene.justAboveAnimalsContainer.children.forEach((p) => {
					if (!p.foodData) p.visible = false;
				});
			} catch {}
		}, 50);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
