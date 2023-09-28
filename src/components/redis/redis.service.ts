import { redis } from '../../config/redis-config'

export const setRedisKey = async (key: string, value: any) => {
  return redis.set(key, JSON.stringify(value))
}

export const getRedisKey = async (key: string) => {
  return redis.get(key)
}
