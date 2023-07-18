
import { FaMortarPestle, FaMugHot, FaBolt, FaTractor,FaInfinity,FaClock,FaOpencart,FaLocationArrow,FaEnvelopeOpen,FaFacebookSquare,FaTwitterSquare,
FaInstagramSquare} from 'react-icons/fa';
import productA from '../assets/images/product-1.jpeg'
import productB from '../assets/images/product-2.jpeg'
import productC from '../assets/images/product-3.jpeg'
import service01 from '../assets/images/service-01.jpg'
import service02 from '../assets/images/service-02.jpg'
import service03 from '../assets/images/service-03.jpg'




export const navItems = [
 {
  id:1,
  text:'Home',
  path:'hero'
 },
 {
  id:2,
  text:'Skills',
  path:'skills'
 },
 {
  id:3,
  text:'About',
  path:'about'
 },
 {
  id:4,
  text:'Products',
  path:'products'
 },
{
  id:5,
  text:'Services',
  path:'services'
 },
 {
  id:6,
  text:'Contact',
  path:'contact'
 }
]

export const skills = [
 {
  id:1,
  title:'family recipe',
  subject:'  Tea purifies the spirit, removes anxiety and nervousness and brings ease and comfort, and is conducive to meditation. This quality of the leaf accentuates our access to be in touch with our spirit and perform our inner work.',
  icon:<FaMortarPestle/>
 },
 {
  id:2,
  title:'relaxation',
  subject:'Relaxation is one of the many benefits of tea, The type of tea you choose to brew can also help to soothe stress and anxiety. One of the key reasons tea is so beneficial for your health is due to L-Theanine, an amino acid that helps to balance mood.',
  icon:<FaMugHot/>
 },
 {
  id:3,
  title:'energy',
  subject:'Tea contains a moderate amount of caffeine, which can give you the energy you need when you are feeling sluggish. Tea is also a healthy alternative to other caffeinated beverages like coffee and energy drinks.',
  icon:<FaBolt/>
 },
 {
  id:4,
  title:'made in egypt',
  subject:'Egypt is the largest market for tea in the Middle East & North Africa area, with a consumption in 2003 of 77 400 tonnes. Its total imports have varied, but were at 79 000 tonnes in 2003. With only small exports, Egypt is apparent consumption in 2003 was 77 400 tonnes.',
  icon:<FaTractor/>
 }
]

export const productsItems = [
 {
  id:1,
  img:productA,
  title:'ginger beach tea',
  price:'LE-5.00'
 },
 {
  id:2,
  img:productB,
  title:'Fruit Sangria',
  price:'LE-15.00'
 },
 {
  id:3,
  img:productC,
  title:'White Tea',
  price:'LE-10.00'
 }
]

export const serviceItems = [
 {
  id:1,
  img:service01,
  icon:<FaInfinity/>,
  title:'UP TO 365 DAYS/YEAR',
  paragraph:'Never making tea again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that is your style.'
 },
 {
  id:2,
  img:service02,
  icon:<FaClock/>,
  title:'READY IN 20 MINUTES',
  paragraph:'You are only twenty minutes away from your super healthy tea delivered right to your home. We work with the best types of tea in each town to ensure that you are 100% happy.'
 },
 {
  id:3,
  img:service03,
  icon:<FaOpencart/>,
  title:'ORDER ANYTHING',
  paragraph:'We do not limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 types of tea. It is up to you!'
 }
]

export const contactItems = [
 {
  id:1,
  icon: <FaLocationArrow/>,
  title: 'address',
  info:'568 Rd. Maadi-Cairo, 11511 Egypt.'
 },
{
  id:2,
  icon: <FaEnvelopeOpen/>,
  title: 'email',
  info:'email@email.com'
 },
{
  id:3,
  icon: <FaEnvelopeOpen/>,
  title: 'phone',
  info:'+2 01012995245'
 }
]

export const SocialMedia = [
  {
    id: 1,
    url: 'https://www.facebook.com/',
    icon: < FaFacebookSquare/>
  },
  {
    id: 2,
    url: 'https://www.twitter.com/',
    icon: < FaTwitterSquare/>
  },
  {
    id: 3,
    url: 'https://www.instagram.com/',
    icon: < FaInstagramSquare/>
  },
]



