import * as Yup from 'yup'
import { FormValue } from './AddCarDrawer'

export const carFormValidationSchema: Yup.ObjectSchema<FormValue> = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.number().min(0, 'Price must great than 0').required('Price is required'),
  discount: Yup.number()
    .min(0, 'Discount must great than 0')
    .max(Yup.ref('price'), 'Discount must less than price')
    .required('Discount is required'),
})
