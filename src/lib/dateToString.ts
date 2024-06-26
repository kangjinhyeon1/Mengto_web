export const dateToString = (dateString: string) => {
  const today = new Date()
  const date = new Date(dateString)
  let time = (today.getTime() - date.getTime()) / 1000
  if (time < 60) return `${Math.floor(time)}초 전`
  time /= 60
  if (time < 60) return `${Math.floor(time)}분 전`
  time /= 60
  if (time < 24) return `${Math.floor(time)}시간 전`
  time /= 24
  if (time < 7) return `${Math.floor(time)}일 전`
  if (time < 30) return `${Math.floor(time / 7)}주일 전`
  if (time < 365.24) return `${Math.floor(time / 30)}달 전`
  return `${Math.floor(time / 365.24)}년 전`
}
