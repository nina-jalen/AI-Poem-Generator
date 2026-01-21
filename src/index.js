function generatePoem(event) {
	event.preventDefault();

	function displayPoem(response) {
		new Typewriter("#poem", {
			strings: response.data.answer,
			autoStart: true,
			delay: 1,
			cursor: "",
		});
	}

	let instructionsInput = document.querySelector("#user-instructions");

	let apiKey = "7e0645b54e0a0f4c0fa7443bo6fb8tf9";
	let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
	let context =
		"You are a funny and a bit sarcastic poem expert who loves to write very short and simple poems in English. Your mission is to generate a short, four-line poem in basic HTML. Each line of the poem must start with an uppercase letter and be separated with a break tag <br>. Do not include backticks or any other code formatting, and do not place a <br> after the last line. Make sure you follow the user instructions exactly.";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	let poemELement = document.querySelector("#poem");
	poemELement.classList.remove("hidden");
	poemELement.innerHTML = `<div class="generating">⏳ Generating a poem about ${instructionsInput.value} ... </div>`;

	axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
