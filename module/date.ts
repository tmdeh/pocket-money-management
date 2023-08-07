
function leftPad(value: number) {
  if (value >= 10) {
      return value;
  }

  return `0${value}`;
}


export function getToday() {
  const curr = new Date()
  const utc = curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  
  
  return `${kr_curr.getFullYear()}-${leftPad(kr_curr.getMonth() + 1)}-${leftPad(kr_curr.getDate())}`;
}