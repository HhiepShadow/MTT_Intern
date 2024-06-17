// Promise.all():
// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log);

// Promise.allSettled():
// function getData1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: 'Data 1' });
//     }, 2000);
//   });
// }

// function getData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error('Lỗi khi lấy dữ liệu 2'));
//     }, 3000);
//   });
// }

// function getData3() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: 'Data 3' });
//     }, 1000);
//   });
// }

// Promise.allSettled([getData1(), getData2(), getData3()])
//   .then(results => {
//     console.log('Kết quả:', results);
//   })
//   .catch(error => {
//     console.error('Đã xảy ra lỗi:', error);
//   });

// Promise.race():
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise 1 resolved');
//   }, 2000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Promise 2 resolved');
//   }, 1000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('Promise 3 rejected');
//   }, 3000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then(result => {
//     console.log(result); // Output: 'Promise 2 resolved'
//   })
//   .catch(error => {
//     console.error(error);
//   });

