import { Response, Request, NextFunction } from 'express'

export const validarApiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.headers['x-api-key']
  // Verificar si la apiKey está presente
  if (!apiKey) {
    return res.status(401).json({ error: 'ApiKey no proporcionada' })
  } else if (apiKey !== process.env.ALOWED_API_KEY) {
    return res.status(403).json({ error: 'ApiKey no válida' })
  }
  next()
}
