import React from 'react'
import ProductInfo from './components/Product/ProductItem/ProductInfo'
import CategoryActionPage from './pages/CategoryActionPage/CategoryActionPage'
import CategoryListPage from './pages/CategoryListPage/CategoryListPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
import ProductListPage from './pages/ProductListPage/ProductListPage'

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
  // { path: '/home', name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Tổng quan', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Giới thiệu', component: Colors },
  { path: '/theme/typography', name: 'Thông tin liên hệ', component: Typography },
  { path: '/product/list', name: 'Danh sách sản phẩm', component: ProductListPage },
  { path: '/category/list', name: 'Danh sách danh mục', component: CategoryListPage },
  // eslint-disable-next-line prettier/prettier
  { path: '/product/add', name: 'Thêm công ty', component:({history})=><ProductActionPage history={history} /> },
  {
    path: '/product/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <ProductActionPage match={match} history={history} />,
  },
  {
    path: '/product/:id/info',
    name: 'Popovers',
    component: ({ match, history }) => <ProductInfo match={match} history={history} />,
  },
  {
    path: '/category/add',
    name: 'Thêm danh mục',
    component: ({ history }) => <CategoryActionPage history={history} />,
  },
  {
    path: '/category/:id/edit',
    name: 'Popovers',
    component: ({ match, history }) => <CategoryActionPage match={match} history={history} />,
  },
  // {
  //   path: '/category/:id/info',
  //   name: 'Popovers',
  //   component: ({ match, history }) => <CategoryInfo match={match} history={history} />,
  // },
  // eslint-disable-next-line prettier/prettier
  { path: '/product/progress', name: 'Progress', component: Progress },
  { path: '/product/spinners', name: 'Spinners', component: Spinners },
  { path: '/product/tables', name: 'Tables', component: Tables },
  { path: '/product/tooltips', name: 'Tooltips', component: Tooltips },
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
