// eslint-disable-next-line import/no-named-as-default-member
import IMAGES from 'themes/images';

const listAge = [
  {
    id: 1,
    key: '1',
    images: IMAGES.iconAge,
    name: '베이비',
    subAge: '1세~3세',
  },
  {
    id: 2,
    key: '2',
    images: IMAGES.iconAge2,
    name: '프리스쿨',
    subAge: '4세~6세',
  },
  {
    id: 3,
    key: '3',
    images: IMAGES.iconAge3,
    name: '스쿨1',
    subAge: '7세~9세',
  },
  {
    id: 4,
    key: '4',
    images: IMAGES.iconAge4,
    name: '스쿨2',
    subAge: '10세~13세',
  },
];

const listCategory = [
  {
    id: 1,
    category: '1',
    images: IMAGES.btnCategory[1],
    name: '명작거래',
  },
  {
    id: 2,
    category: '2',
    images: IMAGES.btnCategory[2],
    name: '창작',
  },
  {
    id: 3,
    category: '3',
    images: IMAGES.btnCategory[3],
    name: '국어문학',
  },
  {
    id: 4,
    category: '4',
    images: IMAGES.btnCategory[4],
    name: '인문',
  },
  {
    id: 5,
    category: '5',
    images: IMAGES.btnCategory[5],
    name: '백과',
  },
  {
    id: 6,
    category: '6',
    images: IMAGES.btnCategory[6],
    name: '인성철학',
  },
  {
    id: 7,
    category: '7',
    images: IMAGES.btnCategory[7],
    name: '과학',
  },
  {
    id: 8,
    category: '8',
    images: IMAGES.btnCategory[8],
    name: '수학',
  },
  {
    id: 9,
    category: '9',
    images: IMAGES.btnCategory[9],
    name: '사회',
  },
  {
    id: 10,
    category: '10',
    images: IMAGES.btnCategory[10],
    name: '문화',
  },
  {
    id: 11,
    category: '11',
    images: IMAGES.btnCategory[11],
    name: '인물',
  },
  {
    id: 12,
    category: '12',
    images: IMAGES.btnCategory[12],
    name: '역사',
  },
  {
    id: 13,
    category: '13',
    images: IMAGES.btnCategory[13],
    name: '예술',
  },
  {
    id: 14,
    category: '14',
    images: IMAGES.btnCategory[14],
    name: '영어',
  },
];
const listCategoryTab = [
  {
    id: 1,
    category: 0,
    name: '전체',
  },
  {
    id: 2,
    category: 1,
    name: '오디오북',
  },
  {
    id: 3,
    category: 2,
    name: '플레이북',
  },
  {
    id: 4,
    category: 3,
    name: '뮤직',
  },
];
const listSelect = [
  {
    id: 0,
    value: '최신순',
  },
  {
    id: 1,
    value: '이름순',
  },
  {
    id: 2,
    value: '조회순',
  },
];
const listOptionEdit = [
  {
    id: 1,
    value: '명작전래',
  },
  {
    id: 2,
    value: '창작',
  },
  {
    id: 3,
    value: '국어문학',
  },
  {
    id: 4,
    value: '백과',
  },
  {
    id: 5,
    value: '인성철학',
  },
];
const listOptionAdvisory = [
  {
    id: 1,
    value: 1,
    label: '회원 관련',
  },
  {
    id: 2,
    value: 2,
    label: '결제 관련',
  },
  {
    id: 3,
    value: 3,
    label: '콘텐츠 관련',
  },
  {
    id: 4,
    value: 4,
    label: '불편사항 및 오류',
  },
  {
    id: 5,
    value: 5,
    label: '이벤트',
  },
  {
    id: 6,
    value: 6,
    label: '기타',
  },
];

export {
  listCategory,
  listAge,
  listCategoryTab,
  listSelect,
  listOptionEdit,
  listOptionAdvisory,
};
