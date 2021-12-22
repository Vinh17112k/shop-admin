import { CFooter } from '@coreui/react'
import React from 'react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">Admin&copy; 2021 creativeLabs.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Quang Vinh for React</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
