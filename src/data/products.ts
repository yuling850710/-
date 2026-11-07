import { Product, ComboDeal } from '../types';

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfpS8Qyhrm4jfPMfAi-AebabX7ir4fER_MfptaF5a2645F7OQ/viewform?pli=1";
export const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfpS8Qyhrm4jfPMfAi-AebabX7ir4fER_MfptaF5a2645F7OQ/viewform?embedded=true";
export const PHARMACY_PHONE = "(02)2985-6852";
export const PHARMACY_LINE_ID = "@wlt2901x";
export const PHARMACY_LINE_URL = "https://line.me/R/ti/p/@wlt2901x";
export const COOKING_VIDEO_URL = "https://www.facebook.com/share/v/1JN7vby51g/";

export const PRODUCTS: Product[] = [
  {
    id: 'cordyceps',
    name: '西洋蔘黃金蟲草「雞」藥膳包',
    subtitle: '滋補強身・元氣體力首選',
    description: '特別嚴選特級西洋蔘與黃金北蟲草，搭配紅棗、枸杞等珍貴漢方。湯頭清甜回甘、香氣馥郁，溫補不上火，為全家人打底強健體魄。',
    benefits: ['滋補強身', '強健體力', '溫潤不燥', '生津止渴'],
    recommendedPairings: ['土雞肉 / 仿土雞腿', '鮮香菇 / 杏鮑菇', '甜玉米', '紅棗少許'],
    ingredients: ['西洋蔘', '黃金北蟲草', '特選枸杞', '優質紅棗', '黃耆', '當歸'],
    price: 350,
    originalPrice: 350,
    volume: '每包約 1~2 人份至家庭燉煮鍋',
    highlight: '頂級珍貴漢方',
    image: '/src/assets/images/product_cordyceps_soup_1794037467764.jpg'
  },
  {
    id: 'pork_ribs',
    name: '藥燉排骨湯藥膳包',
    subtitle: '健康維持・促進循環暖身',
    description: '冷冷冬日餐桌必備經典！藥師調配十餘味甘醇藥材，湯色深沈濃醇、香氣撲鼻，暖身行氣，喝下一口從手腳暖到心坎裡。',
    benefits: ['健康維持', '促進循環', '驅寒暖體', '甘醇回甘'],
    recommendedPairings: ['黑豬小排 / 腩排', '帶骨肋排', '白蘿蔔 / 高麗菜', '起鍋滴少許米酒'],
    ingredients: ['當歸', '川芎', '熟地', '桂枝', '肉桂', '枸杞', '甘草'],
    price: 160,
    originalPrice: 160,
    volume: '每包適合一鍋排骨湯（約3-4人份）',
    highlight: '冬令排隊名湯配方',
    image: '/src/assets/images/product_pork_ribs_soup_1794037468730.jpg'
  },
  {
    id: 'sishen',
    name: '四神湯藥膳包',
    subtitle: '幫助消化・調節生理機能',
    description: '溫和恬淡、健脾開胃的傳統經典。嚴選高品質山藥、芡實、蓮子與茯苓，質地潔淨、無硫磺燻蒸，男女老少皆適宜常備品飲。',
    benefits: ['幫助消化', '調節生理機能', '溫和健脾', '老少咸宜'],
    recommendedPairings: ['豬小腸 / 豬肚', '排骨 / 軟骨', '綜合鮮菇', '薏仁少許'],
    ingredients: ['特選淮山藥', '湘蓮子', '精選茯苓', '正芡實', '當歸少許提香'],
    price: 160,
    originalPrice: 160,
    volume: '每包適合燉煮全家分享鍋（約3-4人份）',
    highlight: '全家老幼四季皆宜',
    image: '/src/assets/images/product_sishen_soup_1794037469246.jpg'
  }
];

export const SINGLE_BUNDLES: ComboDeal[] = [
  {
    id: 'single_sishen_4',
    name: '四神湯｜4 包優惠組',
    category: 'single_bundle',
    itemsText: '四神湯藥膳包 × 4 包',
    originalPrice: 640,
    discountPrice: 600,
    saveAmount: 40,
    description: '經典湯品，家中常備，想喝熱湯隨時有選擇！',
    tag: '常備首選',
    itemsIncluded: [{ productId: 'sishen', name: '四神湯藥膳包', count: 4 }]
  },
  {
    id: 'single_pork_4',
    name: '藥燉排骨｜4 包優惠組',
    category: 'single_bundle',
    itemsText: '藥燉排骨湯藥膳包 × 4 包',
    originalPrice: 640,
    discountPrice: 600,
    saveAmount: 40,
    description: '喜歡藥膳湯品的你別錯過，暖呼呼的湯品，替日常餐桌多添一道選擇！',
    tag: '暖冬超值',
    itemsIncluded: [{ productId: 'pork_ribs', name: '藥燉排骨湯藥膳包', count: 4 }]
  },
  {
    id: 'single_cordyceps_3',
    name: '黃金蟲草｜3 包優惠組',
    category: 'single_bundle',
    itemsText: '西洋蔘黃金蟲草雞藥膳包 × 3 包',
    originalPrice: 1050,
    discountPrice: 1000,
    saveAmount: 50,
    description: '平常就想買來燉湯、替家裡準備滋補食材的朋友，這次別錯過啦！',
    tag: '頂級滋補',
    itemsIncluded: [{ productId: 'cordyceps', name: '西洋蔘黃金蟲草雞藥膳包', count: 3 }]
  }
];

export const COMBO_SETS: ComboDeal[] = [
  {
    id: 'combo_daily',
    name: '日常補氣組',
    category: 'combo_set',
    itemsText: '藥燉排骨 1 包 ＋ 四神湯 1 包',
    originalPrice: 320,
    discountPrice: 299,
    saveAmount: 21,
    description: '天氣漸漸變涼，來碗熱湯最舒服！兩款經典湯品一次帶回家，自己喝或家裡常備都適合！',
    tag: '小資暖心',
    itemsIncluded: [
      { productId: 'pork_ribs', name: '藥燉排骨', count: 1 },
      { productId: 'sishen', name: '四神湯', count: 1 }
    ]
  },
  {
    id: 'combo_family',
    name: '全家顧胃組',
    category: 'combo_set',
    itemsText: '四神湯 2 包 ＋ 藥燉排骨 1 包',
    originalPrice: 480,
    discountPrice: 450,
    saveAmount: 30,
    description: '天氣漸漸變涼，家裡的熱湯也要準備好！三包湯品一次帶回家，全家共享更方便！',
    tag: '家庭人氣',
    itemsIncluded: [
      { productId: 'sishen', name: '四神湯', count: 2 },
      { productId: 'pork_ribs', name: '藥燉排骨', count: 1 }
    ]
  },
  {
    id: 'combo_parent',
    name: '孝親滋補組',
    category: 'combo_set',
    itemsText: '黃金蟲草 1 包 ＋ 四神湯 1 包',
    originalPrice: 510,
    discountPrice: 480,
    saveAmount: 30,
    description: '想幫爸媽準備滋補湯品嗎？兩款搭配一次帶回家，自己享用或送給家人都適合！',
    tag: '敬老暖意',
    itemsIncluded: [
      { productId: 'cordyceps', name: '西洋蔘黃金蟲草', count: 1 },
      { productId: 'sishen', name: '四神湯', count: 1 }
    ]
  },
  {
    id: 'combo_flagship',
    name: '旗艦孝親組',
    category: 'combo_set',
    itemsText: '黃金蟲草 1 包 ＋ 四神湯 1 包 ＋ 藥燉排骨 1 包',
    originalPrice: 670,
    discountPrice: 599,
    saveAmount: 71,
    description: '三款湯品一次備齊，送禮更有心意！過年過節或平時送給家人都適合！',
    tag: '大滿貫推薦',
    itemsIncluded: [
      { productId: 'cordyceps', name: '西洋蔘黃金蟲草', count: 1 },
      { productId: 'sishen', name: '四神湯', count: 1 },
      { productId: 'pork_ribs', name: '藥燉排骨', count: 1 }
    ]
  }
];

export const COOKING_STEPS = [
  {
    step: '01',
    title: '食材準備與汆燙',
    description: '將肉品（雞腿、排骨或豬小腸）放入冷水鍋中，小火加熱汆燙去血水與雜質，撈起後以清水沖洗乾淨、瀝乾備用。'
  },
  {
    step: '02',
    title: '下鍋加水冷燉',
    description: '將天賜藥膳包與洗淨的肉品一同放入鍋中，加入約 1500~2000c.c. 清水（依個人口味濃淡喜好增減，淹過食材即可）。'
  },
  {
    step: '03',
    title: '文火慢燉入味',
    description: '大火煮沸後轉小火，蓋上鍋蓋慢燉 40~50 分鐘（電鍋外鍋約 1.5~2 杯水），使中藥材精華與肉質鮮美充分釋放。可隨心加入玉米、鮮菇更添清甜。'
  },
  {
    step: '04',
    title: '美味點綴起鍋',
    description: '起鍋前 5 分鐘，可依個人偏好滴入少許米酒或加少許鹽巴提味，熱氣蒸騰、芳香撲鼻的暖心藥膳即可盛碗享用！'
  }
];
