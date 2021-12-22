import React from 'react'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

const AppBreadcrumb = () => {
  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/"></CBreadcrumbItem>
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
