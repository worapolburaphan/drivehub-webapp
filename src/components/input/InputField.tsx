import { Input, InputProps, FormHelperText, FormControl, FormLabel } from '@mui/joy'
import { forwardRef } from 'react'

interface InputFieldProps extends InputProps {
  label: string
  errorMessage?: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, errorMessage = 'Error', error, ...props }, ref) => {
    return (
      <FormControl
        className='w-full'
        error={error}
      >
        <FormLabel className='mb-1'>{label}</FormLabel>
        <Input
          ref={ref}
          placeholder='Type here...'
          slotProps={{ root: { className: 'tw-h-11' } }}
          {...props}
        />
        {error && <FormHelperText>{errorMessage}</FormHelperText>}
      </FormControl>
    )
  }
)

export default InputField
