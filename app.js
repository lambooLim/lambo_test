const ideas = [
  '用一张照片，记录今天值得记住的一刻。',
  '写下一个你希望有人帮你解决的小问题。',
  '整理三个常用网站，做成自己的迷你导航。',
  '选一个好奇的词，花十分钟了解它。',
  '把一件拖延的小事，拆成一个两分钟的动作。',
  '给未来的自己留一句话，下周再来看。',
  '把今天学到的一件事，用三句话讲清楚。',
  '画一张草图，描述你想做的第一个小工具。'
];

let currentIdea = 0;
document.getElementById('new-idea').addEventListener('click', () => {
  // 从其他卡片中抽取，避免连续两次出现同一个灵感。
  const offset = 1 + Math.floor(Math.random() * (ideas.length - 1));
  currentIdea = (currentIdea + offset) % ideas.length;
  document.getElementById('idea-label').textContent = `灵感 ${String(currentIdea + 1).padStart(2, '0')} / ${String(ideas.length).padStart(2, '0')}`;
  document.getElementById('idea-text').textContent = ideas[currentIdea];
});
