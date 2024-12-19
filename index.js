const express = require("express");
const app = express();

app.use(express.json());

let articles = []; // Мок для статей

// API для створення статті
app.post("/api/articles", (req, res) => {
	const { title, content } = req.body;
	if (!title || !content) {
		return res
			.status(400)
			.json({ error: "Title and content are required" });
	}

	const newArticle = { id: Date.now(), title, content };
	articles.push(newArticle);

	return res.status(201).json(newArticle);
});

// API для отримання статей
app.get("/api/articles", (req, res) => {
	res.status(200).json(articles);
});

module.exports = app;
