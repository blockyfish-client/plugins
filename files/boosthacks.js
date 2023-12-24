const name = "Boost hacks";
const id = "plugins.pi.boosthacks";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Ctrl+click to do a charged boost. Alt+click to do a weak charged boost. Ctrl+shift+click to do a special boost combo (only for some animals)";
const script = () => {
	const listForAnimalsWithAimOverlay = [61, 93, 94, 113];
	const listForGamemodesWithAimOverlay = [1, 2, 6];
	blockyfish.addEventListener("first-game-load", () => {
		var ctrl_overlay = document.createElement("div");
		document.querySelector("div.game").insertBefore(ctrl_overlay, document.querySelector("div.game").children[0]);
		ctrl_overlay.outerHTML = '<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>';
		var aim_overlay = document.createElement("hr");
		document.querySelector("div.game").insertBefore(aim_overlay, document.querySelector("div.game").children[1]);
		aim_overlay.outerHTML =
			'<hr id="aim-overlay" style="border: 1px #fff dotted;border-image: linear-gradient(to right, #f32d, #f320) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">';

		setInterval(function () {
			try {
				if (game.currentScene != null) {
					if (game.currentScene.myAnimal != null) {
						if (game.currentScene.myAnimal._visibleFishLevel == 101) {
							document.getElementById("aim-overlay").style.transform = "rotate(" + ((game.currentScene.myAnimal.inner.rotation * 180) / Math.PI + 90) + "deg)";
						} else {
							document.getElementById("aim-overlay").style.transform = "rotate(" + ((game.currentScene.myAnimal.inner.rotation * 180) / Math.PI - 90) + "deg)";
						}
					}
				}
			} catch {}
		}, 10);
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
		async function superShot() {
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
				setTimeout(() => {
					game.inputManager.handleLongPress(5000);
				}, 200);
			} catch {}
		}
		window.addEventListener(
			"keydown",
			function (e) {
				try {
					showCtrlOverlay(e);
					if (e.ctrlKey && listForAnimalsWithAimOverlay.includes(game.currentScene.myAnimal._visibleFishLevel) && listForGamemodesWithAimOverlay.includes(game.gameMode) && aim_helper_on) {
						document.getElementById("aim-overlay").style.display = "block";
					}
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
							console.log("hi");
							superShot();
						} else if (e.shiftKey && game.currentScene.myAnimal._visibleFishLevel != 101) {
							game.inputManager.handleLongPress(-5);
						} else {
							game.inputManager.handleLongPress(5000);
						}
					}
					if (e.altKey) {
						game.inputManager.handleLongPress(350);
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
					if (!e.ctrlKey) {
						document.getElementById("aim-overlay").style.display = "none";
					}
				} catch {}
			},
			false
		);
		window.addEventListener("focus", () => {
			try {
				document.getElementById("ctrl-overlay").style.pointerEvents = "none";
				document.getElementById("aim-overlay").style.display = "none";
			} catch {}
		});
	});

	blockyfish.addEventListener("game-load", () => {
		var ctrl_overlay = document.createElement("div");
		document.querySelector("div.game").insertBefore(ctrl_overlay, document.querySelector("div.game").children[0]);
		ctrl_overlay.outerHTML = '<div id="ctrl-overlay" style="width: 100%;height: 100%;position: absolute;display: block;z-index:10000;pointer-events:none;"></div>';
		var aim_overlay = document.createElement("hr");
		document.querySelector("div.game").insertBefore(aim_overlay, document.querySelector("div.game").children[1]);
		aim_overlay.outerHTML =
			'<hr id="aim-overlay" style="border: 1px #fff dotted;border-image: linear-gradient(to right, #f32d, #f320) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">';
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
