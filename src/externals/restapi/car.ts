import { RestAPI } from '@/libs/core/restapi'

export const fetchCarListQueryKey = () => ['car-list']

export const fetchCarList = async () => {
  return RestAPI.get<ResultResponse<Car[]>>('/cars').then(res => res.data)
}

export const addCar = async (data: Omit<Car, 'id'>) => {
  return RestAPI.post<Omit<Car, 'id'>, ResultResponse<Car>>('/cars', data).then(res => res.data)
}

export const deleteCar = async (id: string) => {
  return RestAPI.delete<null>(`/cars/${id}`).then(res => res.data)
}

export const updateCar = async (id: string, data: Omit<Car, 'id'>) => {
  return RestAPI.put<Omit<Car, 'id'>, ResultResponse<Car>>(`/cars/${id}`, data).then(
    res => res.data
  )
}
