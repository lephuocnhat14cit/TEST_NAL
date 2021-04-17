import ROUTERS from './router';

const footerTabs = [
  {
    key: 1,
    name: '홈',
    link: ROUTERS.LIST_ORDER,
  },
  {
    key: 2,
    name: '검색',
    link: ROUTERS.TRANSACTION_HISTORY,
    classActive: 'btn_tab_on',
  },
  {
    key: 3,
    name: 'My',
    link: ROUTERS.PAYMENT,
  },
  {
    key: 4,
    classActive: 'btn_tab4_on',
    name: '관리',
    link: ROUTERS.MY_PAGE,
  },
];

export default footerTabs;
