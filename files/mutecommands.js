const name = "Mute slash commands";
const id = "plugins.pi.mutecommands";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Brings back /mute and /unmute so you can mute annoying people. Works the same way as before.";
const script = () => {
	mutedList = [];
	chat_value = "";
	function matches(text, partial) {
		console.log(text);
		return text.toLowerCase().indexOf(partial.toLowerCase()) > -1;
	}
	blockyfish.addEventListener("first-game-load", () => {
		window.addEventListener("keyup", function (e) {
			if (e.keyCode == 13) {
				if (matches(chat_value, "/unmute ")) {
					muteID = chat_value.replace("/unmute ", "");
					if (mutedList.includes(muteID)) {
						mutedList = arrayRemove(mutedList, muteID);
					}
				} else if (matches(chat_value, "/mute ")) {
					muteID = chat_value.replace("/mute ", "");
					if (!mutedList.includes(muteID)) {
						mutedList.push(muteID);
					}
				}
			}
		});

		setInterval(() => {
			try {
				if (game.currentScene != null) {
					for (let i = 0; i < game.currentScene.chatMessages.length; i++) {
						if (mutedList.includes(String(game.currentScene.chatMessages[i].originalMessage.senderRoomId))) {
							game.currentScene.chatMessages[i].renderable = false;
						}
					}
				}
			} catch {}
		}, 200);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
