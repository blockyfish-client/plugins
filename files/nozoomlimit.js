const name = "No zoom limit";
const id = "plugins.pi.nozoomlimit";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Zoom clamp is removed. You can zoom in or out as far as you want.";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		setInterval(function () {
			try {
				game.viewport.clampZoom({
					minWidth: 0,
					maxWidth: 1e7
				});
			} catch {}
		}, 200);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
