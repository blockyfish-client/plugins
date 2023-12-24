const name = "AutoShake";
const id = "plugins.thej.autoshake";
const author = "TheJ";
const version = "1.0.0";
const versionNumber = 1000;
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
	blockyfish.addEventListener("first-game-load", () => {
		let KEYBIND = "KeyV";
		let TOGGLE = false;
		let FORWARD = false;
		window.addEventListener("keydown", (e) => {
			try {
				if (e.code == KEYBIND) {
					TOGGLE = !TOGGLE;
					game.currentScene.showMessagePopup(`Autoshake has been ${TOGGLE ? "enabled" : "disabled"}`, 3000, false);
				}
			} catch {}
		});
		setInterval(() => {
			try {
				if (window["game"] == null) return;
				if (!TOGGLE) return;
				if (game.currentScene == null || game.currentScene.myAnimal == null || game.inputManager == null || game.inputManager.getMouseWorldPosition == null) return;
				let mpos = game.inputManager.getMouseWorldPosition();
				let ppos = game.currentScene.myAnimal.position;
				let angleRadians = Math.atan2(mpos.y - ppos._y, mpos.x - ppos._x);
				let incr = FORWARD ? 1000 : 750;
				let bpos = [ppos._x + Math.cos(angleRadians) * incr, ppos._y + Math.sin(angleRadians) * incr];
				game.socketManager.sendBytePacket(blockyfish.formMovePacket(bpos[0], bpos[1], 100));
				FORWARD = !FORWARD;
			} catch {}
		}, 10);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
