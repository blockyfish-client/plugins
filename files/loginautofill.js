const name = "Login Autofill";
const id = "plugins.pi.loginautofill";
const author = "Pi";
const version = "1.0.1";
const versionNumber = 1010;
const description = "Autofills your username and password in the login screen.";
const script = () => {
	var loginModalOpen = false;
	const modalObserver = new MutationObserver(() => {
		if (document.querySelector(".modal-content input[type='password']")) {
			if (!loginModalOpen) {
				loginModalOpen = true;
				fillCredentials();
				startWatching();
			}
		} else {
			loginModalOpen = false;
		}
	});
	modalObserver.observe(document.getElementById("app"), {
		attributes: false,
		childList: true,
		characterData: false,
		subtree: true
	});

	function fillCredentials() {
		const pw = document.querySelector(".modal-content input[type='password']");
		const usr = document.querySelector(".modal-content input[type='text']");
		pw.setAttribute("value", localStorage.getItem("autofillPassword")); // document.querySelector(".modal-content input[type='password']").value = localStorage.getItem("autofillPassword");
		usr.setAttribute("value", localStorage.getItem("autofillUsername")); // document.querySelector(".modal-content input[type='text']").value = localStorage.getItem("autofillUsername");

		const e = new Event("input", { bubbles: true, cancelable: true });
		pw.dispatchEvent(e);
		usr.dispatchEvent(e);
	}

	function startWatching() {
		document.querySelector(".modal-content input[type='password']").addEventListener("keyup", (e) => {
			localStorage.setItem("autofillPassword", e.target.value);
		});
		document.querySelector(".modal-content input[type='text']").addEventListener("keyup", (e) => {
			localStorage.setItem("autofillUsername", e.target.value);
		});
	}
};

module.exports = { name, id, author, version, versionNumber, description, script };
