const name = "Evolution tree wheel";
const id = "plugins.pi.evotree";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Hold down the Y key to see an evolution tree for tiers 8 - 10";
const script = () => {
	var evo_wheel_rot = 0;

	function createEvoWheel() {
		try {
			var evo_wheel = document.createElement("div");
			document.querySelector("div.game").insertBefore(evo_wheel, document.querySelector("div.game").children[0]);
			evo_wheel.outerHTML =
				'<div style="width: 100%;height: 100%;position: absolute;pointer-events: none;display: flex;"><img id="evo-wheel" draggable="false" src="https://raw.githubusercontent.com/blockyfish-client/Assets/main/evo_circle.png" style="z-index: 9999;max-width: 80vw;max-height: 80vh;align-self: center;margin: auto;transition: 0.2s all linear;transform: scale(0);opacity: 0;"></div>';
			evo_wheel = document.getElementById("evo-wheel");

			evo_wheel.style.transform = "scale(0) rotate(-90deg)";
		} catch {}
	}

	blockyfish.addEventListener("first-game-load", () => {
		createEvoWheel();
		var inter = "none";
		document.body.addEventListener("keypress", function (e) {
			try {
				if (e.isComposing || e.keyCode === 229) {
					return;
				}
				if (
					e.key.toLowerCase() == "y" &&
					document.querySelector("#app > div.modals-container > div") == null &&
					document.querySelector("#app > div.ui > div").style.display == "none" &&
					document.activeElement.localName != "input"
				) {
					if (inter == "none") {
						inter = setInterval(function () {
							evo_wheel_rot += 1;
						}, 150);
					}
					const evo_wheel = document.getElementById("evo-wheel");
					rot = evo_wheel_rot;
					evo_wheel.style.transform = "scale(1) rotate(" + rot + "deg)";
					evo_wheel.style.opacity = 1;
				}
			} catch {}
		});
		document.body.addEventListener("keyup", function (e) {
			try {
				if (e.key.toLowerCase() == "y") {
					clearInterval(inter);
					inter = "none";
					const evo_wheel = document.getElementById("evo-wheel");
					rot = evo_wheel_rot - 90;
					evo_wheel.style.transform = "scale(0) rotate(" + rot + "deg)";
					evo_wheel.style.opacity = 0;
				}
			} catch {}
		});
	});

	blockyfish.addEventListener("game-load", () => {
		createEvoWheel();
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
