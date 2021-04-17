import IMAGES from 'themes/images';
import ROUTERS from './router';

const menuItems = [
  {
    key: 1,
    name: '자녀 정보',
    link: ROUTERS.CHILDREN_INFORMATION,
    icon: IMAGES.iconTabMy,
  },
  {
    key: 2,
    name: '1:1 문의하기',
    link: ROUTERS.ADVISORY,
    icon: IMAGES.iconTabBubble,
  },
  {
    key: 3,
    name: '이벤트',
    link: ROUTERS.EVENT,
    icon: IMAGES.iconTabCrown,
  },
  {
    key: 4,
    name: '공지 사항',
    link: ROUTERS.NOTICE,
    icon: IMAGES.iconTabBook,
  },
  {
    key: 5,
    name: '이용약관',
    link: ROUTERS.TERMS_USER,
    icon: IMAGES.iconTabNotice,
  },
];

export default menuItems;
