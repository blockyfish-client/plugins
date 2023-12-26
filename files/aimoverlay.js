const name = "Aim overlay";
const id = "plugins.pi.aimoverlay";
const author = "Pi";
const version = "1.0.1";
const versionNumber = 1010;
const description = "Hold down the Ctrl key to see a red line that helps you aim";
const script = () => {
	const listForAnimalsWithAimOverlay = [61, 93, 94, 113];
	function createAimOverlay() {
		try {
			document.getElementById("aim-overlay").remove();
		} catch {}
		var aim_overlay = document.createElement("hr");
		document.querySelector("div.game").insertBefore(aim_overlay, document.querySelector("div.game").children[0]);
		aim_overlay.outerHTML =
			'<hr id="aim-overlay" style="border: 1px #f32d dotted;border-image: linear-gradient(to right, #f32d, #f320) 1;transform-origin: left;position: absolute;top: 50%;left: 50%;width: 40vw;display:none;pointer-events:none;">';
	}
	blockyfish.addEventListener("first-game-load", () => {
		createAimOverlay();
		document.addEventListener("mousemove", () => {
			try {
				if (game.currentScene != null) {
					if (game.currentScene.myAnimal != null) {
						document.getElementById("aim-overlay").style.transform =
							"rotate(" + ((game.currentScene.myAnimal.inner.rotation * 180) / Math.PI + (game.currentScene.myAnimal._visibleFishLevel == 101 ? 90 : -90)) + "deg)";
					}
				}
			} catch {}
		});
		window.addEventListener(
			"keydown",
			function (e) {
				try {
					if (e.ctrlKey && listForAnimalsWithAimOverlay.includes(game.currentScene.myAnimal._visibleFishLevel)) {
						document.getElementById("aim-overlay").style.display = "block";
					}
				} catch {}
			},
			false
		);
		window.addEventListener(
			"keyup",
			function (e) {
				try {
					if (!e.ctrlKey) {
						document.getElementById("aim-overlay").style.display = "none";
					}
				} catch {}
			},
			false
		);
		window.addEventListener("focus", () => {
			try {
				document.getElementById("aim-overlay").style.display = "none";
			} catch {}
		});
	});

	blockyfish.addEventListener("game-load", () => {
		createAimOverlay();
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
