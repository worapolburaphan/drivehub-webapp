import { DiscountPrice } from '@/components/shared/DiscountPrice'
import { FiEdit3 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { ConfirmDrawerTrigger } from '@/components/drawer/ConfirmDrawerTrigger'
import { Typography, IconButton } from '@mui/joy'
import useDisappear from '@/hooks/utils/useDisappear'
import { Formik } from 'formik'
import { Suspense, lazy } from 'react'

const EditCarDrawer = lazy(() => import('./EditCarDrawer'))

interface CarItemProps {
  name: string
  price: number
  discount: number
  onEdit: (values: { name: string; price: number; discount: number }) => void
  onDelete: () => void
}

export default function CarItem({ name, price, discount, onEdit, onDelete }: CarItemProps) {
  const { isOpen, open, close } = useDisappear()

  return (
    <div className='tw-flex tw-rounded-2xl tw-bg-white tw-px-4 tw-py-5 tw-shadow-md'>
      <div className='tw-w-0 tw-basis-4/5'>
        <Typography
          fontSize={20}
          fontWeight={700}
          className='tw-w-full tw-truncate'
        >
          {name}
        </Typography>
        <DiscountPrice
          price={price}
          discount={discount}
        />
      </div>
      <div className='tw-flex tw-flex-1 tw-items-center tw-justify-end tw-gap-2'>
        <Formik
          initialValues={{ name, price, discount }}
          onSubmit={values => onEdit(values)}
        >
          <Suspense fallback={null}>
            <EditCarDrawer
              isOpen={isOpen}
              onClose={close}
            />
          </Suspense>
        </Formik>
        <IconButton
          variant='solid'
          color='primary'
          onClick={open}
          className='!tw-w-[30px] !tw-h-[30px] !tw-min-w-0 !tw-min-h-0'
        >
          <FiEdit3 className='tw-h-6 tw-w-6' />
        </IconButton>
        <ConfirmDrawerTrigger
          slot={{
            confirmQuestionText: 'Are you sure to delete this car?',
            confirmText: 'Confirm Delete',
          }}
          trigger={props => (
            <IconButton
              variant='solid'
              color='warning'
              className='!tw-w-[30px] !tw-h-[30px] !tw-min-w-0 !tw-min-h-0'
              {...props}
            >
              <AiOutlineDelete className='tw-h-6 tw-w-6' />
            </IconButton>
          )}
          onConfirm={onDelete}
        />
      </div>
    </div>
  )
}
