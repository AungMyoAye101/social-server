import app from "./app"
import { connectToDb } from "./config/connectToDb"
const port = process.env.PORT || 5000
connectToDb()
app.listen(port, () => console.log("Server is listening on port " + port))