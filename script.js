// 图片加载失败处理
const img = document.querySelector('img');
const errorDiv = document.getElementById('imageError');
img.addEventListener('error', () => {
    img.classList.add('hidden');
    errorDiv.classList.remove('hidden');
});

// 按钮交互
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modal = document.getElementById('congratsModal');
const closeBtn = document.getElementById('closeModal');

// 「考虑一下」点击：强迫选择「愿意」
noBtn.addEventListener('click', () => {
    yesBtn.classList.add('scale-125', 'bg-accent', 'shadow-xl');
    noBtn.classList.add('scale-75', 'opacity-50', 'cursor-not-allowed');
    noBtn.disabled = true;
    yesBtn.innerHTML = '<i class="fa fa-heart mr-2"></i>我愿意';
});

// 「愿意」点击：显示弹窗
yesBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    setTimeout(() => modal.querySelector('div').classList.add('scale-110'), 10);
});

// 关闭弹窗
closeBtn.addEventListener('click', () => {
    modal.querySelector('div').classList.remove('scale-110');
    modal.querySelector('div').classList.add('scale-90', 'opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
});
