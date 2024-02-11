import classNames from 'classnames'
import { Typography } from '@mui/joy'

interface DiscountPriceProps {
  price: number
  discount: number
}

export const DiscountPrice = ({ price, discount }: DiscountPriceProps) => {
  return (
    <div className='tw-flex tw-gap-1'>
      <Typography
        fontWeight={600}
        className={classNames({
          '!tw-line-through': discount > 0,
        })}
      >
        {price.toLocaleString()} THB
      </Typography>
      {discount > 0 && (
        <Typography className='!tw-font-semibold !tw-text-red-500'>
          {(price - discount).toLocaleString()} THB
        </Typography>
      )}
    </div>
  )
}
