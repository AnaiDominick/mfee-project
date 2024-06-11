import express from "express";
import cors from "cors";
import helmet from "helmet";

import { corsOptions } from "./config/corsConfig";
import posts from "./routes/posts";
import categories from "./routes/categories";


const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));

app.use('/api/posts', posts)
app.use('/api/categories', categories)


export default app;
