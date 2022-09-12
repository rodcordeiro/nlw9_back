import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ads", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Anuncio 1",
    },
    {
      id: 2,
      name: "Anuncio 2",
    },
    {
      id: 3,
      name: "Anuncio 3",
    },
    {
      id: 4,
      name: "Anuncio 4",
    },
  ]);
});

app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});
