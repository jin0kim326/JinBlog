import app from "./app";
import "./db";
import "./models/post";

const PORT = 4001;

const handleListening = () => {
  console.log(`✅ Listening at http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
