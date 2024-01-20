const name = "AutoShake";
const id = "plugins.thej.autoshake";
const author = "TheJ";
const version = "1.0.3";
const versionNumber = 1030;
const description = "Press V to toggle autoshake (sends packets to server to imitate mouse shaking forward backward doesnt alter rotation) (can be used to walk around invisible as GPO)";
const script = () => {
	/*
	
	AUTOSHAKE SCRIPT
	HOLD V TO SHAKE
	
	Made by TheJ
	
	** NOTE **
	This doesn't shake your character
	It only emulates your mouse shaking
	**********
    
    */
	var inter;
	blockyfish.addEventListener("first-game-load", () => {
		let KEYBIND = "KeyV";
		let TOGGLE = false;
		let FORWARD = false;
		window.addEventListener("keypress", (e) => {
			try {
				if (
					e.code == KEYBIND &&
					document.querySelector("#app > div.modals-container > div") == null &&
					document.querySelector("#app > div.ui > div").style.display == "none" &&
					document.activeElement.localName != "input"
				) {
					TOGGLE = !TOGGLE;
					game.currentScene.showMessagePopup(`Autoshake has been ${TOGGLE ? "enabled" : "disabled"}`, 3000, false);
					if (TOGGLE) {
						inter = setInterval(() => {
							try {
								if (window["game"] == null) return;
								if (game.currentScene == null || game.currentScene.myAnimal == null || game.inputManager == null || game.inputManager.getMouseWorldPosition == null) return;
								let mpos = game.inputManager.getMouseWorldPosition();
								let ppos = game.currentScene.myAnimal.position;
								let angleRadians = Math.atan2(mpos.y - ppos._y, mpos.x - ppos._x);
								let incr = FORWARD ? 1000 : 750;
								let bpos = [ppos._x + Math.cos(angleRadians) * incr, ppos._y + Math.sin(angleRadians) * incr];
								game.socketManager.sendBytePacket(blockyfish.formMovePacket(bpos[0], bpos[1], 100));
								FORWARD = !FORWARD;
							} catch {}
						}, 40);
					} else {
						clearInterval(inter);
					}
				}
			} catch {}
		});
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
