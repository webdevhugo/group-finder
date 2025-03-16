import { format } from "date-fns";
import { zhCN, enUS } from 'date-fns/locale';

// 根据语言代码获取对应的 date-fns 语言包
const getLocale = (localeCode: string) => {
  switch (localeCode) {
    case 'zh':
      return zhCN;
    case 'en':
    default:
      return enUS;
  }
};

// 根据语言代码获取对应的日期格式
const getDateFormat = (localeCode: string) => {
  switch (localeCode) {
    case 'zh':
      return 'yyyy年MM月dd日';
    case 'en':
    default:
      return 'PPP';
  }
};

// 根据语言代码获取对应的日期时间格式
const getDateTimeFormat = (localeCode: string) => {
  switch (localeCode) {
    case 'zh':
      return 'yyyy年MM月dd日 HH:mm';
    case 'en':
    default:
      return 'PPp';
  }
};

// 格式化日期函数，接受日期和语言代码
export function formatDate(date: Date, localeCode?: string) {
  if (!date) return "";
  const locale = localeCode ? getLocale(localeCode) : undefined;
  const dateFormat = localeCode ? getDateFormat(localeCode) : 'PPP';
  
  return format(date, dateFormat, { locale });
}

// 格式化日期时间函数，接受日期和语言代码
export function formatDateTime(date: Date, localeCode?: string) {
  if (!date) return "";
  const locale = localeCode ? getLocale(localeCode) : undefined;
  const dateTimeFormat = localeCode ? getDateTimeFormat(localeCode) : 'PPp';
  
  return format(date, dateTimeFormat, { locale });
}