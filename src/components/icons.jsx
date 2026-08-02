import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuStar,
  LuArrowRight,
  LuMenu,
  LuX,
  LuWrench,
  LuShieldCheck,
  LuQuote,
  LuCheck,
  LuDisc,
  LuCog,
  LuCarFront,
  LuBadgeCheck,
  LuCalendar,
  LuFlag,
  LuTrophy,
  LuCompass,
  LuActivity,
  LuNavigation,
  LuUsers,
} from 'react-icons/lu'

const registry = {
  phone: LuPhone,
  'map-pin': LuMapPin,
  clock: LuClock,
  star: LuStar,
  arrow: LuArrowRight,
  menu: LuMenu,
  x: LuX,
  wrench: LuWrench,
  shield: LuShieldCheck,
  quote: LuQuote,
  check: LuCheck,
  disc: LuDisc,
  cog: LuCog,
  'car-front': LuCarFront,
  'badge-check': LuBadgeCheck,
  calendar: LuCalendar,
  flag: LuFlag,
  trophy: LuTrophy,
  compass: LuCompass,
  activity: LuActivity,
  navigation: LuNavigation,
  users: LuUsers,
}

export function Icon({ name, className }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
