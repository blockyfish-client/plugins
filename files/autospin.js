const name = "Auto spin";
const id = "plugins.pi.autospin";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Spin really fast without breaking your arms. Hold Z to activate.";
const script = () => {
	var mapeditor;
	blockyfish.addEventListener("first-game-load", () => {
		mapeditor = document.querySelector("#canvas-container > canvas");
		var spin_direction = 0;
		const spin_angle = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
		const spin_radius = 300;
		var isSpinning = false;
		document.body.addEventListener("keydown", function (e) {
			if (e.key.toLowerCase() == "z") {
				if (
					document.querySelector("#app > div.modals-container > div") == null &&
					document.querySelector("#app > div.ui > div").style.display == "none" &&
					document.activeElement.localName != "input"
				) {
					e.preventDefault();
					isSpinning = true;
				}
			}
		});
		document.body.addEventListener("keyup", function (e) {
			if (e.key.toLowerCase() == "z") {
				if (
					document.querySelector("#app > div.modals-container > div") == null &&
					document.querySelector("#app > div.ui > div").style.display == "none" &&
					document.activeElement.localName != "input"
				) {
					e.preventDefault();
					isSpinning = false;
				}
			}
		});
		setInterval(() => {
			if (isSpinning) {
				let spin_coords_x = Math.round(spin_radius * Math.sin((Math.PI * 2 * spin_angle[spin_direction]) / 360));
				let spin_coords_y = Math.round(spin_radius * Math.cos((Math.PI * 2 * spin_angle[spin_direction]) / 360));
				try {
					mapeditor.dispatchEvent(new MouseEvent("pointermove", { clientX: innerWidth / 2 + spin_coords_x, clientY: innerHeight / 2 + spin_coords_y }));
					spin_direction = (spin_direction + 1) % 11;
				} catch {}
			}
		}, 15);
	});
	blockyfish.addEventListener("game-load", () => {
		mapeditor = document.querySelector("#canvas-container > canvas");
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
