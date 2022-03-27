import axios from "axios";

const BASE_API_URL = "https://api.thecatapi.com/v1/";
const X_API_KEY = "de04eb9f-d3f9-43ad-a20b-c5e8c67c50d0";

class CatsHttpService {
	async get(path: string, config: any) {
		const results = await axios.get(this.getApiPath(path), {
			headers: this.getHeaders(),
			...config,
		});

		return results;
	}

	async post(path: string, data: any, config: any) {
		const results = await axios.post(this.getApiPath(path), data, {
			headers: this.getHeaders(),
			...config,
		});

		return results;
	}

	async delete(path: string, config: any) {
		const results = await axios.delete(this.getApiPath(path), {
			headers: this.getHeaders(),
			...config,
		});

		return results;
	}

	private getApiPath(path: string) {
		return `${BASE_API_URL}${path}`;
	}

	private getHeaders() {
		return {
			"Content-Type": "application/json",
			"x-api-key": X_API_KEY,
		};
	}
}

const httpsService = new CatsHttpService();
export default httpsService;
