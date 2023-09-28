import { Request, Response } from 'express'
import { getRedisKey, setRedisKey } from './redis.service'

export const setKey = async (request: Request, response: Response) => {
  const body = request.body
  const operationResult = await setRedisKey(body.key, body.data)
  if (operationResult) {
    return response.status(200).json({
      status: true,
      message: 'Clave guardada correctamente',
    })
  } else {
    response.status(500).json({
      status: false,
      message: 'Error al guardar la clave',
    })
  }
}

export const getKey = async (request: Request, response: Response) => {
  const key = request.query.key
  if (key) {
    const operationResult = await getRedisKey(key.toString())
    if (operationResult) {
      return response.status(200).json({
        status: true,
        data: JSON.parse(operationResult),
      })
    } else {
      response.status(500).json({
        status: false,
        message: 'Error al obtener la clave',
      })
    }
  } else {
    response.status(400).send('No existe la clave') // Bad request
  }
}
