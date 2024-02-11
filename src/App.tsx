import { CssVarsProvider } from '@mui/joy/styles'
import { QueryClientProvider } from '@tanstack/react-query'
import Router from '@/Router'
import { theme } from '@/configs/theme'
import { queryClient } from './configs/query-client'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssVarsProvider theme={theme}>
        <Router />
      </CssVarsProvider>
    </QueryClientProvider>
  )
}

export default App
