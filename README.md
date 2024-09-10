# italian_jokes_api.js
Web-API for [italian-jokes.vercel.app](https://italian-jokes.vercel.app/) an API that allows you to retrieve jokes about Italians, showcasing their vibrant culture and lighthearted spirit. It provides various endpoints to fetch jokes based on different subtypes

## Example
```JavaScript
async function main() {
	const { ItalianJokesApi } = require("./italian_jokes_api.js")
	const italianJokesApi = new ItalianJokesApi()
	const randomJoke = await italianJokesApi.getRandomJoke()
	console.log(randomJoke)
}

main()
```
