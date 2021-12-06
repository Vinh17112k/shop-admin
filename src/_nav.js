import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Tổng quan',
  },
  {
    component: CNavItem,
    name: 'Giới thiệu',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Thông tin liên hệ',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Quản Lý',
  },
  {
    component: CNavGroup,
    name: 'Công ty',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh sách công ty',
        to: '/company/list',
      },
      {
        component: CNavItem,
        name: 'Danh sách nhân viên',
        to: '/staffs/list',
      },
      {
        component: CNavItem,
        name: 'Danh sách dịch vụ',
        to: '/services/list',
      },
      {
        component: CNavItem,
        name: 'Danh sách nhân viên tòa nhà',
        to: '/staffsbuilding/list',
      },
      {
        component: CNavItem,
        name: 'Danh sách hợp đồng',
        to: '/contract/list',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/company/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/company/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/company/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/company/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Điện Nước',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Điện',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Nước',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Hóa đơn',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Thông báo',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tin nhắn',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Nhận xét',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Phản hồi',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Thống kê',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Nhân viên',
  },
  {
    component: CNavGroup,
    name: 'Admin',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Danh Sách',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Thêm',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
    ],
  },
]

export default _nav
