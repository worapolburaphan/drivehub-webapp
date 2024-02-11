import { useQuery } from '@tanstack/react-query'
import { fetchCarList } from '@/externals/restapi/car'

export default function useCarList() {
  const queryKey = ['car-list']

  return query
}
