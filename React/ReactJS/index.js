let text =
  "Đây là một đoạn văn dài. Nó bao gồm nhiều câu. Trong đó có một số câu kết thúc bằng dấu chấm. Chúng ta cần chia nó thành ba phần bằng nhau, mỗi phần kết thúc bằng dấu chấm. Đây là một ví dụ về cách thực hiện việc này bằng JavaScript.";

// Chia đoạn văn thành các câu
let sentences = text.split(/[.!?]+/);

// Tính số lượng câu
let numSentences = sentences.length;

// Chia các câu thành 3 phần
let part1 = sentences.slice(0, Math.floor(numSentences / 3)).join(".");
let part2 = sentences
  .slice(Math.floor(numSentences / 3), Math.floor((2 * numSentences) / 3))
  .join(".");
let part3 = sentences.slice(Math.floor((2 * numSentences) / 3)).join(".");

console.log(part1);
console.log(part2);
console.log(part3);
