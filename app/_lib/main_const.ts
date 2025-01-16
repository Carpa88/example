import { ISscial, ITestimonial } from './main_types';
import {
  FaFacebookF,
  FaVk,
  FaTelegramPlane,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

export const testimonials: ITestimonial[] = [
  {
    userName: 'Анна Смирнова',
    userNic: '@anna',
    testimonial:
      'У нас остались только приятные впечатления! Наш пёсик был в восторге от заботы и внимания персонала. Видно, что люди действительно любят животных и стараются обеспечить им комфорт. Забирали его бодрым, счастливым и ухоженным. Обязательно вернёмся снова!',
    icon: '',
  },
  {
    userName: 'Дмитрий Иванов',
    userNic: '@dima',
    testimonial:
      'Это лучшая гостиница для собак, которую мы посещали! Просторные вольеры, много игрушек, прогулки — всё продумано до мелочей. Собака была под постоянным присмотром, нам присылали фото и видео. Очень удобно, что можно оставить питомца и не переживать. Спасибо за заботу!',
    icon: '',
  },
  {
    userName: 'Елена Васильева',
    userNic: '@helen',
    testimonial:
      'Спасибо за тёплый приём! Наша собака чувствовала себя как дома. Кормили качественным кормом, а прогулки на свежем воздухе сделали её пребывание активным и интересным. Видно, что команда профессионалов! Будем рекомендовать друзьям.',
    icon: '',
  },
  {
    userName: 'Михаил Кузнецов',
    userNic: '@michael',
    testimonial:
      'Очень уютная гостиница с внимательным персоналом! Оставляли свою собаку на неделю, и она вернулась довольной и ухоженной. Было приятно получить фотоотчёты о её времяпрепровождении. Отличное место для заботливых хозяев. Рекомендуем!',
    icon: '',
  },
  {
    userName: 'Татьяна Петрова',
    userNic: '@tania',
    testimonial:
      'Заботливый подход и отличные условия для животных! Собака была окружена вниманием, как дома. Порадовало наличие игрушек, удобных лежанок и регулярных прогулок. Видно, что персонал относится к делу с душой. Спасибо за ваш труд!',
    icon: '',
  },
  {
    userName: 'Сергей Соколов',
    userNic: '',
    testimonial:
      'Мы остались очень довольны! Персонал внимательно выслушал все наши пожелания и обеспечил собаке комфортные условия. Понравилась возможность индивидуального подхода к питомцу. Забирали её счастливой и довольной. Огромное спасибо за вашу заботу!',
    icon: '',
  },
  {
    userName: 'Ольга Белова',
    testimonial:
      'Это место спасение для занятых хозяев! Здесь очень чисто и уютно, а персонал доброжелательный и профессиональный. Наш пёс явно не хотел уезжать, что говорит о многом. Большое спасибо за внимание и заботу о наших любимцах. Вернёмся ещё!',
    icon: '',
  },
  {
    userName: 'Александр Новиков',
    testimonial:
      'Впервые оставляли собаку в гостинице, и это был отличный опыт! Очень понравилось, что нам присылали фото и видео, так что мы всегда знали, что с питомцем всё в порядке. Атмосфера тёплая и дружелюбная, как дома. Спасибо, что сделали нашу поездку спокойной!',
    icon: '',
  },
  {
    userName: 'Екатерина Морозова',
    testimonial:
      'Великолепный сервис и заботливый персонал! Наша собака сразу подружилась с сотрудниками, что редко бывает. Видно, что здесь всё продумано до мелочей, чтобы питомцы чувствовали себя комфортно. Огромное спасибо за доброту и профессионализм!',
    icon: '',
  },
  {
    userName: 'Андрей Федоров',
    testimonial:
      'Это просто находка для владельцев собак! Персонал бережно относится к каждому питомцу, а условия здесь на высшем уровне. После возвращения наш пёс был бодр, весел и явно доволен. Обязательно порекомендуем это место всем знакомым!',
    icon: '',
  },
  {
    userName: 'Мария Орлова',
    testimonial:
      'Очень рекомендуем эту гостиницу! Здесь не просто заботятся о собаках, а делают это с душой. Условия проживания превосходные: просторные комнаты, прогулки, внимание к мелочам. Наша собака вернулась довольной, как никогда. Спасибо за ваш труд и заботу!',
    icon: '',
  },
];

import {
  ClockIcon,
  HeartIcon,
  HomeIcon,
  SunIcon,
  UserCircleIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';

export const features = [
  {
    name: 'Уютные номера',
    description:
      'Индивидуальные комнаты для каждого питомца с мягкими лежанками, игрушками и комфортной атмосферой.',
    icon: HomeIcon,
  },
  {
    name: 'Круглосуточный уход',
    description:
      'Наши сотрудники заботятся о вашем питомце 24/7, чтобы он чувствовал себя как дома.',
    icon: ClockIcon,
  },
  {
    name: 'Видеонаблюдение',
    description:
      'Следите за своим питомцем через камеры наблюдения в режиме реального времени прямо со своего телефона.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Прогулки на свежем воздухе',
    description:
      'Ежедневные прогулки и игры на закрытой территории, чтобы питомец оставался активным и счастливым.',
    icon: SunIcon,
  },
  {
    name: 'Ветеринарный контроль',
    description:
      'Круглосуточный доступ к ветеринару для обеспечения здоровья и безопасности вашего питомца.',
    icon: HeartIcon,
  },
  {
    name: 'Индивидуальный подход',
    description:
      'Мы учитываем предпочтения каждого питомца: режим питания, любимые игры и другие привычки.',
    icon: UserCircleIcon,
  },
];

export const links = [
  { name: 'Давайте начнем', href: '#start' },
  { name: 'Наши услуги', href: '#features' },
  { name: 'Контакты', href: '#contacts' },
  { name: 'Цены', href: '#prices' },
];
export const stats = [
  { name: 'Лет опыта', value: '10+' },
  { name: 'Довольных клиентов', value: '500+' },
  { name: 'Проведенных соревнований', value: '5' },
  { name: 'Награды и достижения', value: '25' },
];

export const tiers = [
  {
    name: 'День',
    id: 'day',
    href: '#',
    priceMonthly: '50p',
    description:
      'Идеальный вариант, если вы хотите оставить собаку на короткий срок.',
    features: [
      'Прогулки 2 раза в день',
      'Кормление по расписанию',
      'Уютное место для отдыха',
      'Фотоотчёт по запросу',
    ],
    featured: false,
  },
  {
    name: 'Месяц',
    id: 'month',
    href: '#',
    priceMonthly: '500p',
    description: 'Лучший вариант для длительного пребывания вашего питомца.',
    features: [
      'Ежедневные прогулки',
      'Отчёты с фото и видео',
      'Профессиональный груминг 1 раз в неделю',
      'Индивидуальное меню для питомца',
      'Игры и тренировки с профессионалом',
      'Видеонаблюдение для владельцев',
    ],
    featured: true,
  },
];

export const socials: ISscial[] = [
  {
    id: 'Instagram',
    name: 'Herding Club Belarus',
    value: '@herdingBY',
    icon: FaInstagram,
  },
  {
    id: 'Facebook',
    name: 'Herding Club Belarus',
    value: '@herdingBY',
    icon: FaFacebookF,
  },
  {
    id: 'VK',
    name: 'Пастухи Беларуси',
    value: '@herdingBY',
    icon: FaVk,
  },
  {
    id: 'Telegram',
    name: 'Пастухи Беларуси',
    value: '@herdingBY',
    icon: FaTelegramPlane,
  },
  {
    id: 'WhatsApp',
    name: 'Катусова Катерина',
    value: '+375 29 123-34-456',
    icon: FaWhatsapp,
  },
];

export const footer = {
  company: {
    name: 'Комплекс',
    '/#about': 'О Компании',
    '/#features': 'Наши услуги',
    '/#testimonials': 'Отзывы',
    '/#prices': 'Цены',
    '/#start': 'С чего начать',
    '/#contacts': 'Контакты',
  },
  competitions: {
    name: 'Соревнования',
    '/trials': 'Все наши соревнования',
    '/trialsлодло': 'Открыта запись на соревнование',
  },
  hostel: {
    name: 'Гостиница',
    kasjcbewioijk: 'О Компании',
    'as,ejbce67': 'Наши услуги',
    asweuihbjsdf: 'Отзывы',
    opqwdfibh: 'Цены',
    'Ouljn joduswefbg': 'С чего начать',
  },
  practicing: {
    name: 'Тренировки',
    'sdefuhdso8v hn': 'О Компании',
    scjnusodhiubg: 'Наши услуги',
    cnojuihioo: 'Отзывы',
    cjlosdcou: 'Цены',
    dszcnoudu: 'С чего начать',
  },
};
