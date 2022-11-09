export default function (context) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async middleware')
      resolve(true)
    }, 2000)
  })
}
