const name = "Humpback Auto Songs";
const id = "plugins.hitta.autosongs";
const author = "Hitta";
const version = "1.0.0";
const versionNumber = 1000;
const description = "Use set keybinds to automatically perform Humpback Whales songs.";
const script = () => {
	const songs = [
		[5, 5, 5],
		[5, 5000, 5],
		[5000, 5000, 5000],
		[5000, 5000, 5]
	];

	var humpbackUiStyle = document.createElement("style");
	humpbackUiStyle.innerHTML = `
@import url("https://fonts.googleapis.com/css?family=Quicksand");

#humpback-ui * {
  font-family: "Quicksand";
  color: #fff;
}
.hb-button p {
  margin: 5px 0 0 0;
  font-size: 12px;
}

#humpback-ui {
  display: flex;
  gap: 8px;
  width: 100%;
  justify-content: center;
  pointer-events: none;
  user-select: none;
}
  .hb-button {
  background: #0004;
  padding: 10px 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hb-song {
  display: flex;
  flex-direction: row;
  gap: 2px;
  width: 81px;
  justify-content: center;
}

.war {
  background: #ae3e41;
}
.heal {
  background: #1aff00;
}
.blast {
  background: #f6ff00;
}
.ruin {
  background: #db7c00;
}
.small {
  width: 10px;
  height: 10px;
  margin: 2.5px 0;
  border-radius: 999px;
}
.large {
  width: 15px;
  height: 15px;
  border-radius: 999px;
}
  `;
	document.head.appendChild(humpbackUiStyle);

	blockyfish.addEventListener("first-game-load", () => {
		setInterval(() => {
			try {
				if (game.currentScene.myAnimal.fishLevelData.fishLevel != 87) {
					if (document.querySelector("#humpback-ui")) {
						document.querySelector("#humpback-ui").remove();
					}
					return;
				} else if (document.querySelector("#humpback-ui")) {
					return;
				}
				var humpbackUI = document.createElement("div");
				var parent = document.querySelector(".stats .middle");

				humpbackUI.innerHTML = `
  <div id="humpback-ui">
    <div class="hb-button">
      <div class="hb-song">
        <div class="war small"></div>
        <div class="war small"></div>
        <div class="war small"></div>
      </div>
      <p>War | 1</p>
    </div>
  
    <div class="hb-button">
      <div class="hb-song">
        <div class="heal small"></div>
        <div class="heal large"></div>
        <div class="heal small"></div>
      </div>
      <p>Heal | 2</p>
    </div>
  
    <div class="hb-button">
      <div class="hb-song">
        <div class="blast large"></div>
        <div class="blast large"></div>
        <div class="blast large"></div>
      </div>
      <p>Blast | 3</p>
    </div>
  
    <div class="hb-button">
      <div class="hb-song">
        <div class="ruin large"></div>
        <div class="ruin large"></div>
        <div class="ruin small"></div>
      </div>
      <p>Ruin | 4</p>
    </div>
  </div>
    `;
				parent.prepend(humpbackUI);
			} catch {}
		}, 100);
		document.addEventListener("keyup", (e) => {
			try {
				if (!["1", "2", "3", "4"].includes(e.key)) return;
				if (game.currentScene.myAnimal.fishLevelData.fishLevel != 87) return;
				var boostSent = 0;
				var interval = setInterval(() => {
					boostSent += 1;
					if (boostSent == 3) {
						clearInterval(interval);
					}
					game.inputManager.handleLongPress(songs[e.key - 1][boostSent - 1]);
				}, document.querySelector("div.top-right div.latency > span.value")?.innerText * 2.5 || 200);
			} catch {}
		});
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
