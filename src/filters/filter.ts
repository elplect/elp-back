export function timeChange (type: string, timeStamp: number): string {
  const time = new Date(timeStamp)
  const year = time.getFullYear()
  const month = time.getMonth() + 1
  const day = time.getDate()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  if (type === 'YYYY') {
    return `${year}`
  } else if (type === 'YYYY-MM') {
    return `${year}-${month}`
  } else if (type === 'YYYY-MM-DD') {
    return `${year}-${month}-${day}`
  } else if (type === 'YYYY-MM-DD:HH') {
    return `${year}-${month}-${day} ${hour}`
  } else if (type === 'YYYY-MM-DD:HH:MM') {
    return `${year}-${month}-${day} ${hour}:${minute}`
  } else if (type === 'YYYY-MM-DD:HH:MM:SS') {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  } else {
    console.log('错误的类型输入，请输入YYYY-MM-DD:HH:MM:SS的任意截断')
  }
  return ''
}
