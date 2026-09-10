/**
 * A social media platform stores posts.
 * Tasks:
 * 1. Find post that containing "typescript"!
 * 2. Find post that containing "nestjs"!
 * 3. Find the post with highest number of likes!
 * 4. Calculate the total of likes!
 */

const posts = [
  {
    author: "Andi",
    content: "Learning TypeScript #typescript #programming",
    hashtags: ["typescript", "programming"],
    likes: 120,
  },
  {
    author: "Budi",
    content: "My first NestJS project #nestjs #typescript",
    hashtags: ["nestjs", "typescript"],
    likes: 250,
  },
  {
    author: "Citra",
    content: "Frontend development #nextjs #react",
    hashtags: ["nextjs", "react"],
    likes: 180,
  },
  {
    author: "Deni",
    content: "Backend with NestJS #nestjs #backend",
    hashtags: ["nestjs", "backend"],
    likes: 300,
  },
];

let post = posts.filter(i=> i.content.includes("typescript"));
console.log("content typescript");
console.log(`containing typescript: `,post);

let postNest = posts.filter(n=> n.content.includes("nestjs"));
console.log(`containing nestjs: `,postNest);  

let topPost = posts.reduce((highhest, current) => 
  current.likes > highhest.likes? current: highhest );
console.log(`Top Likes: `,topPost);

let total = posts.reduce ((sum,l)=> sum + l.likes,0);
console.log(`Tota lLikes: `,total);