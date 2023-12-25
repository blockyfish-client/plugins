const name = "No camera clamp";
const id = "plugins.pi.nocameraclamp";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Camera position clamp is removed. Your animal will always be centered on the screen.";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		setInterval(function () {
			try {
				game.viewport.plugins.plugins.clamp = null;
				game.viewport.plugins.plugins["clamp-zoom"] = null;
			} catch {}
		}, 200);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
