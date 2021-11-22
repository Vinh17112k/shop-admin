import React from 'react'
import CompanyActionPage from './pages/CompanyActionPage/CompanyActionPage'
import CompanyListPage from './pages/CompanyListPage/CompanyListPage'
import ServiceActionPage from './pages/ServiceActionPage/ServiceActionPage'
import ServiceListPage from './pages/ServiceListPage/ServiceListPage'
import StaffActionPage from './pages/StaffActionPage/StaffActionPage'
import StaffBuildingActionPage from './pages/StaffBuildingActionPage/StaffBuildingActionPage'
import StaffBuildingListPage from './pages/StaffBuildingListPage/StaffBuildingListPage'
import StaffListPage from './pages/StaffListPage/StaffListPage'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Tổng quan', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Giới thiệu', component: Colors },
  { path: '/theme/typography', name: 'Thông tin liên hệ', component: Typography },
  { path: '/company/list', name: 'Danh sách công ty', component: CompanyListPage },
  { path: '/staffs/list', name: 'Danh sách nhân viên', component: StaffListPage },
  { path: '/company/list-groups', name: 'Danh sách dịch vụ', component: ServiceListPage },
  {
    path: '/staffsbuilding/list',
    name: 'Danh sách nhân viên tòa nhà',
    component: StaffBuildingListPage,
  },
  // eslint-disable-next-line prettier/prettier
  { path: '/company/add', name: 'Thêm công ty', component:({history})=><CompanyActionPage history={history} /> },
  {
    path: '/company/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <CompanyActionPage match={match} history={history} />,
  },
  // eslint-disable-next-line prettier/prettier
  { path: '/staffs/add', name: 'Thêm nhân viên', component:({history})=><StaffActionPage history={history} /> },
  {
    path: '/staffs/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <StaffActionPage match={match} history={history} />,
  },
  // eslint-disable-next-line prettier/prettier
  { path: '/services/add', name: 'Thêm dịch vụ', component:({history})=><ServiceActionPage history={history} /> },
  {
    path: '/services/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <ServiceActionPage match={match} history={history} />,
  },
  // eslint-disable-next-line prettier/prettier
  { path: '/staffsbuilding/add', name: 'Thêm nhân viên tòa nhà', component:({history})=><StaffBuildingActionPage history={history} /> },
  {
    path: '/staffsbuilding/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <StaffBuildingActionPage match={match} history={history} />,
  },
  { path: '/company/progress', name: 'Progress', component: Progress },
  { path: '/company/spinners', name: 'Spinners', component: Spinners },
  { path: '/company/tables', name: 'Tables', component: Tables },
  { path: '/company/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/charts', name: 'Điện nước', component: Charts },
  { path: '/forms', name: 'Điện', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Nước', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Thông báo', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Tin nhắn', component: Alerts },
  { path: '/notifications/badges', name: 'Nhận xét', component: Badges },
  { path: '/notifications/modals', name: 'Nhiệm vụ', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
