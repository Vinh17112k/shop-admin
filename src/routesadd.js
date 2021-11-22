/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import CompanyActionPage from "./pages/CompanyActionPage/CompanyActionPage";
const routesadd=[
  {
      path:"/company/add",
      exact: false,
      main:({history})=><CompanyActionPage history={history}/>
  },
  {
      //:id la tham so cua id
      path:"/product/:id/edit",
      exact: false,
      main:({match, history})=><CompanyActionPage match={match} history={history}/>
  }
];
export default routesadd;
