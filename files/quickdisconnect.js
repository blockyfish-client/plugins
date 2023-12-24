const name = "Quick disconnect";
const id = "plugins.pi.quickdisconnect";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Press Ctrl + Shift + Q to disconnect from any server.";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		document.body.addEventListener("keydown", (e) => {
			if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() == "q") {
				try {
					game.inputManager.socketManager.disconnect();
				} catch {}
			}
		});
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
