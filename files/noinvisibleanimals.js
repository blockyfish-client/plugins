const name = "No invisible animals";
const id = "plugins.pi.noinvisibleanimals";
const author = "Pi";
const version = "1.0.0";
const versionNumber = 1000;
const description = "No more low opacity or invisible animals. These include tiger shark, barracuda, anglerfish, salamander, and many more. Also allows you to see animals that are hiding in props.";
const script = () => {
	blockyfish.addEventListener("first-game-load", () => {
		setInterval(() => {
			try {
				for (let i = 0; i < game.currentScene.entityManager.animalsList.length; i++) {
					if (game.currentScene.entityManager.animalsList[i].alpha < 0.5) {
						game.currentScene.entityManager.animalsList[i].alpha = 0.5;
					}
					if (game.currentScene.entityManager.animalsList[i].inner.alpha < 0.5) {
						game.currentScene.entityManager.animalsList[i].inner.alpha = 0.5;
					}
					if (game.currentScene.entityManager.animalsList[i].relatedObjects.visible != true) {
						game.currentScene.entityManager.animalsList[i].relatedObjects.visible = true;
					}
					if (game.currentScene.entityManager.animalsList[i].nameObject.visible != true) {
						game.currentScene.entityManager.animalsList[i].nameObject.visible = true;
					}
				}
			} catch {}
		}, 50);
	});
};

module.exports = { name, id, author, version, versionNumber, description, script };
