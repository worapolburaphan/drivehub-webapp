import EmptyItem from '@/components/shared/EmptyItem'
import { queryClient } from '@/configs/query-client'
import { deleteCar, fetchCarList, fetchCarListQueryKey } from '@/externals/restapi/car'
import { useQuery, useMutation } from '@tanstack/react-query'
import { Suspense, lazy } from 'react'

const CarItem = lazy(() => import('@/components/car/CarItem'))

export default function CarList() {
  const { data = { result: [] } } = useQuery({
    queryKey: fetchCarListQueryKey(),
    queryFn: fetchCarList,
    placeholderData: { result: [] },
  })

  const { mutateAsync: deleteCarMutate } = useMutation({
    mutationFn: deleteCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fetchCarListQueryKey() })
    },
  })

  const handleEditItem =
    (id: string) => (values: { name: string; price: number; discount: number }) => {
      console.log('edit', id, values)
    }

  const handleDeleteItem = (id: string) => async () => {
    if (!id) return
    try {
      await deleteCarMutate(id)
    } catch (e) {
      alert('Delete car failed')
    }
  }

  return (
    <div className='tw-flex tw-flex-col tw-gap-6'>
      {data.result.length < 1 && <EmptyItem emptyText='No car avaiable' />}
      {data?.result.map(car => (
        <Suspense fallback={null}>
          <CarItem
            key={car.id}
            name={car.name}
            price={car.price}
            discount={car.discount}
            onEdit={handleEditItem(car.id)}
            onDelete={handleDeleteItem(car.id)}
          />
        </Suspense>
      ))}
    </div>
  )
}
