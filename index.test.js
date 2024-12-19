const request = require("supertest");
const app = require("./index");

describe("Article API", () => {
	it("should create a new article", async () => {
		const newArticle = {
			title: "Test Article",
			content: "This is a test article content",
		};

		const response = await request(app)
			.post("/api/articles")
			.send(newArticle)
			.expect(201); // Очікуємо код 201 для створення

		expect(response.body).toHaveProperty("id");
		expect(response.body.title).toBe(newArticle.title);
		expect(response.body.content).toBe(newArticle.content);
	});

	it("should return an error if title or content is missing", async () => {
		const newArticle = {
			title: "Test Article",
		};

		const response = await request(app)
			.post("/api/articles")
			.send(newArticle)
			.expect(400); // Очікуємо код 400 для помилки

		expect(response.body.error).toBe("Title and content are required");
	});
});
