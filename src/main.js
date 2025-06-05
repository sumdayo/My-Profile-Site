// タブ切り替え処理
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
    document.getElementById(targetId).classList.add('active');
  }); 
});

// 趣味セクションの画像切り替え（1つだけ開く）
document.querySelectorAll('.hobby-item').forEach(item => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');
    const targetList = document.getElementById(targetId);
    const isVisible = targetList.style.display === 'block';

    document.querySelectorAll('.photo-list').forEach(list => {
      list.style.display = 'none';
    });

    if (!isVisible) {
      targetList.style.display = 'block';
    }
  });
});