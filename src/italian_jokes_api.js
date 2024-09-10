class ItalianJokesApi {
	constructor() {
		this.api = "https://italian-jokes.vercel.app/api"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getRandomJoke() {
		const response = await fetch(
			`${this.api}/jokes`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getJokeBySubType(subType) {
		const response = await fetch(
			`${this.api}/jokes?subtype=${subType}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {ItalianJokesApi}
