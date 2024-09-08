// font awesome and cdn
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCreditCard,
  faTags,
  faWallet,
  faGear,
  faPersonWalkingArrowRight,
  faMoneyBillTrendUp,
  faMoneyBillTransfer,
  faMoneyBill,
  faEarthAsia,
  faArrowTrendUp,
  faPiggyBank,
  faMoneyCheckDollar,
  faDesktop, // check
  faUsersBetweenLines,
  faIndianRupeeSign,
  faCalendar,
  faComment,
  faPlus,
  faTrash,
  faRightFromBracket,
  faUtensils,
  faShirt,
  faBook,
  faBowlFood,
  faBriefcaseMedical,
  faTv,
  faCircleDot,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export const dashBoard = () => <FontAwesomeIcon icon={faHouse} />;
export const transaction = () => <FontAwesomeIcon icon={faCreditCard} />;
export const categories = () => <FontAwesomeIcon icon={faTags} />;
export const accounts = () => <FontAwesomeIcon icon={faWallet} />;
export const settings = () => <FontAwesomeIcon icon={faGear} />;

export const logout = () => (
  <FontAwesomeIcon icon={faPersonWalkingArrowRight} />
);
export const trend = () => <FontAwesomeIcon icon={faMoneyBillTrendUp} />;
export const expenses = () => <FontAwesomeIcon icon={faMoneyBillTransfer} />;
export const money = () => <FontAwesomeIcon icon={faMoneyBill} />;
export const freelance = () => <FontAwesomeIcon icon={faEarthAsia} />;

export const stocks = () => <FontAwesomeIcon icon={faArrowTrendUp} />;
export const bitcoin = () => <FontAwesomeIcon icon={faCoins} />;
export const piggy = () => <FontAwesomeIcon icon={faPiggyBank} />;
export const yt = () => <FontAwesomeIcon icon={faDesktop} />;
export const card = () => <FontAwesomeIcon icon={faMoneyCheckDollar} />;

export const users = () => <FontAwesomeIcon icon={faUsersBetweenLines} />;
export const dollar = () => <FontAwesomeIcon icon={faIndianRupeeSign} />;
export const calendar = () => <FontAwesomeIcon icon={faCalendar} />;
export const comment = () => <FontAwesomeIcon icon={faComment} />;
export const plus = () => <FontAwesomeIcon icon={faPlus} />;

export const trash = () => <FontAwesomeIcon icon={faTrash} />;
export const signout = () => <FontAwesomeIcon icon={faRightFromBracket} />;
export const takeaway = () => <FontAwesomeIcon icon={faUtensils} />;
export const clothing = () => <FontAwesomeIcon icon={faShirt} />;
export const book = () => <FontAwesomeIcon icon={faBook} />;

export const food = () => <FontAwesomeIcon icon={faBowlFood} />;
export const medical = () => <FontAwesomeIcon icon={faBriefcaseMedical} />;
export const tv = () => <FontAwesomeIcon icon={faTv} />;
export const circle = () => <FontAwesomeIcon icon={faCircleDot} />;
