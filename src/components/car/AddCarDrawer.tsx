import { Button } from '@mui/joy'
import { BottomDrawer } from '@/components/drawer/BottomDrawer'
import { Formik, Form, Field } from 'formik'
import InputField from '@/components/input/InputField'
import { useMutation } from '@tanstack/react-query'
import { addCar, fetchCarListQueryKey } from '@/externals/restapi/car'
import { queryClient } from '@/configs/query-client'
import { DrawerHeader } from '../drawer/DrawerHeader'
import { carFormValidationSchema } from './validationSchema'

interface AddCarDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export type FormValue = Omit<Car, 'id'>

const initialValues: FormValue = {
  name: '',
  price: 0,
  discount: 0,
}

export const AddCarDrawer = ({ isOpen, onClose }: AddCarDrawerProps) => {
  const { mutateAsync: addCarMutate } = useMutation({
    mutationFn: addCar,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fetchCarListQueryKey() })
    },
  })

  const handleAddCar = async (value: FormValue) => {
    try {
      await addCarMutate({
        ...value,
        price: Number(value.price),
        discount: Number(value.discount),
      })
      onClose()
    } catch (e) {
      alert('Add car failed')
    }
  }

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerHeader
        title='Add Car'
        onClose={onClose}
      />
      <Formik
        initialValues={initialValues}
        validationSchema={carFormValidationSchema}
        onSubmit={handleAddCar}
      >
        {({ errors, touched }) => (
          <Form className='tw-flex tw-flex-col tw-gap-4'>
            <Field
              as={InputField}
              name='name'
              label='Name'
              placeholder='Name'
              errorMessage={errors.name}
              error={touched.name && !!errors.name}
            />
            <Field
              type='number'
              as={InputField}
              name='price'
              label='Price'
              placeholder='Price'
              errorMessage={errors.price}
              error={touched.price && !!errors.price}
            />
            <Field
              type='number'
              as={InputField}
              name='discount'
              label='Discount'
              placeholder='Discount'
              errorMessage={errors.discount}
              error={touched.discount && !!errors.discount}
            />
            <Button
              type='submit'
              className='tw-mt-8 tw-h-14 tw-bg-blue-500'
            >
              Add
            </Button>
          </Form>
        )}
      </Formik>
    </BottomDrawer>
  )
}
