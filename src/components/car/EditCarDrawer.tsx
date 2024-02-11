import { BottomDrawer } from '@/components/drawer/BottomDrawer'
import { DrawerHeader } from '@/components/drawer/DrawerHeader'
import { Form, Field, useFormikContext } from 'formik'
import { Button } from '@mui/joy'
import InputField from '@/components/input/InputField'

interface EditCarDrawerProps {
  isOpen: boolean
  onClose: () => void
}

interface FormValue {
  name: string
  price: number
  discount: number
}

const EditCarDrawer = ({ isOpen, onClose }: EditCarDrawerProps) => {
  const { touched, errors } = useFormikContext<FormValue>()

  return (
    <BottomDrawer
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerHeader
        title='Edit Car'
        onClose={onClose}
      />
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
          Update
        </Button>
      </Form>
    </BottomDrawer>
  )
}

export default EditCarDrawer
