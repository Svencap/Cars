import { Box } from '@mui/material'
import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import useMeasure from 'react-use-measure'
const Header = dynamic(() => import('./Header'), {
  ssr: false,
})

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const [headerRef, headerMeasure] = useMeasure()
  const [footerRef, footerMeasure] = useMeasure()
  const headerHeight = `${headerMeasure.height}px`
  const paddingBottom = `${footerMeasure.height}px`

  return (
    <Box position="relative" minHeight="100vh">
      <Box
        zIndex={(theme) => theme.zIndex.drawer + 1}
        position="sticky"
        width="100%"
        top={0}
        left={0}
        ref={headerRef}
      >
        <Header />
      </Box>
      <Box
        bgcolor="primary.bg"
        pb={paddingBottom}
        minHeight={`calc(100vh - ${headerHeight})`}
      >
        {children}
      </Box>
      <Box
        ref={footerRef}
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        zIndex={10}
      >
      </Box>
    </Box>
  )
}

export default Layout