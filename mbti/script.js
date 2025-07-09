const questions = [
  { text: "땅 밖으로 나오고 싶나요?", dimension: "EI" },
  { text: "요리가 되고 싶으신가요?", dimension: "NS" },
  { text: "상처난 지황을 보면 슬픈가요?", dimension: "FT" },
  { text: "계획된 유통을 거치고 싶으신가요?", dimension: "PJ" }
];

let answers = [];
let currentQuestion = 0;

const mbtiDescriptions = {
  ENFP: { desc: "웃고 떠드는 지황!", img: "enfp.png" },
  INFJ: { desc: "따뜻한 조언자 지황!", img: "infj.png" },
  INFP: { desc: "몽상가 지황!", img: "infp.png" },
  INTJ: { desc: "계획적 지황!", img: "intj.png" },
  ISTJ: { desc: "원칙주의자 지황!", img: "istj.png" },
  ISFJ: { desc: "배려왕 지황!", img: "isfj.png" },
  ESTJ: { desc: "리더 지황!", img: "estj.png" },
  ESFJ: { desc: "사교성 지황!", img: "esfj.png" },
  ENTJ: { desc: "결단력 지황!", img: "entj.png" },
  ENFJ: { desc: "열정 리더 지황!", img: "enfj.png" },
  INTP: { desc: "논리왕 지황!", img: "intp.png" },
  ISTP: { desc: "핸즈온 지황!", img: "istp.png" },
  ISFP: { desc: "자유로운 영혼 지황!", img: "isfp.png" },
  ESTP: { desc: "모험가 지황!", img: "estp.png" },
  ESFP: { desc: "흥부자 지황!", img: "esfp.png" }
};

function answer(ans) {
  answers.push(ans === 'yes' ? 1 : 0);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("question").innerText = questions[currentQuestion].text;
  } else {
    showResult();
  }
}

function showResult() {
  let mbti = "";
  mbti += answers[0] ? "E" : "I";
  mbti += answers[1] ? "N" : "S";
  mbti += answers[2] ? "F" : "T";
  mbti += answers[3] ? "P" : "J";

  const desc = mbtiDescriptions[mbti] || { desc: "알 수 없는 지황", img: "default.png" };

  document.getElementById("question-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("mbti-type").innerText = mbti;
  document.getElementById("mbti-desc").innerText = desc.desc;
  document.getElementById("mbti-image").src = "images/" + desc.img;
}

function restart() {
  answers = [];
  currentQuestion = 0;
  document.getElementById("question").innerText = questions[0].text;
  document.getElementById("question-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
}

// 🔻 이 부분을 추가하여 페이지 로드시 첫 질문을 표시해주어야 작동합니다.
document.getElementById("question").innerText = questions[0].text;
