const name = "Boost hacks";
const id = "plugins.pi.boosthacks";
const author = "Pi";
const version = "1.0.2";
const versionNumber = 1020;
const description = "Ctrl+click to do a charged boost. Alt+click to do a weak charged boost. Ctrl+shift+click to do a special boost combo (only for some animals)";
const script = () => {
	function showCtrlOverlay(e) {
		if (e.ctrlKey || e.altKey) {
			try {
				if (game.currentScene != null) {
					if (game.currentScene.myAnimal != null) {
						if (game.currentScene.myAnimal._visibleFishLevel != 101) {
							document.getElementById("ctrl-overlay").style.pointerEvents = "all";
						} else if (!e.shiftKey) {
							if (game.currentScene.myAnimal._visibleFishLevel == 101) document.getElementById("ctrl-overlay").style.pointerEvents = "all";
						} else {
							document.getElementById("ctrl-overlay").style.pointerEvents = "none";
						}
					}
				}
			} catch {}
		}
	}

	function superShot() {
		try {
			game.inputManager.handleLongPress(1);
			setTimeout(() => {
				game.inputManager.handleLongPress(5000);
			}, 50);
			setTimeout(() => {
				game.inputManager.handleLongPress(5000);
			}, 100);
			setTimeout(() => {
				game.inputManager.handleLongPress(5000);
			}, 150);
		} catch {}
	}
	function createCtrlOverlay() {
		try {
			document.getElementById("ctrl-overlay").remove();
		} catch {}
		var ctrl_overlay = document.createElement("div");
		document.querySelector("div.game").insertBefore(ctrl_overlay, document.querySelector("div.game").children[0]);
		ctrl_overlay.outerHTML = '<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>';
	}
	blockyfish.addEventListener("first-game-load", () => {
		createCtrlOverlay();
		window.addEventListener(
			"keydown",
			function (e) {
				try {
					showCtrlOverlay(e);
				} catch {}
			},
			false
		);
		window.addEventListener(
			"click",
			function (e) {
				try {
					if (e.ctrlKey) {
						if (e.shiftKey && (game.currentScene.myAnimal._visibleFishLevel == 109 || game.currentScene.myAnimal._visibleFishLevel == 107)) {
							superShot();
						} else if (e.shiftKey && game.currentScene.myAnimal._visibleFishLevel != 101) {
							game.inputManager.handleLongPress(-5);
						} else {
							game.inputManager.handleLongPress(5000);
						}
					}
					if (e.altKey) {
						game.inputManager.handleLongPress(1200);
					}
				} catch {}
			},
			false
		);
		window.addEventListener(
			"keyup",
			function (e) {
				try {
					if (!e.ctrlKey && !e.altKey) {
						document.getElementById("ctrl-overlay").style.pointerEvents = "none";
					}
				} catch {}
			},
			false
		);
		window.addEventListener("focus", () => {
			try {
				document.getElementById("ctrl-overlay").style.pointerEvents = "none";
			} catch {}
		});
	});

	blockyfish.addEventListener("game-load", () => {
		createCtrlOverlay();
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
