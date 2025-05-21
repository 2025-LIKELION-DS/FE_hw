function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("유저 정보 가져옴");
      resolve();
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("포스트 목록 가져옴");
      resolve();
    }, 1000);
  });
}

function fetchCommments() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("댓글 목록 가져옴");
      resolve();
    }, 1000);
  });
}

async function main() {
  try {
    await fetchUser();
    await fetchPosts();
    await fetchCommments();
  } catch (error) {
    console.error("에러 발생:", error);
  }
}

main();
