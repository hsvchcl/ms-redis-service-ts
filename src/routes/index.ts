import express from "express";
import { setKey, getKey } from "../components/redis/redis.controller";
import { validarApiKey } from "../middleware";
const router = express.Router();

// Test route
router.get("/ping", (req, res) => {
  res.send("Pong!");
});

router.get("/get-key", validarApiKey, getKey);
router.post("/set-key", validarApiKey, setKey);

// Exporta el router para usarlo en otros lugares de tu aplicación
export default router;
