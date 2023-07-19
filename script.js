const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let linkElement = document.getElementById('hidden-link');
let position = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function generateMatrixChars() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let matrixChars = '';

  for (let i = 0; i < canvas.width / 20; i++) {
    matrixChars += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return matrixChars;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = 'green';
  ctx.font = '20px monospace';
  
  const matrixChars = generateMatrixChars();
  const charsArray = matrixChars.split('');
  
  charsArray.forEach((char, index) => {
    const x = index * 20;
    const y = position + (index * 20);

    ctx.fillText(char, x, y);
  });
  
  position += 1;

  if (position >= canvas.height) {
    position = 0;
    // Shift link position randomly
    const randomPosition = Math.floor(Math.random() * 4);

    switch (randomPosition) {
      case 0:
        linkElement.style.top = '50%';
        linkElement.style.left = '50%';
        linkElement.style.transform = 'translate(-50%, -50%)';
        break;
      case 1:
        linkElement.style.top = '90%';
        linkElement.style.left = '50%';
        linkElement.style.transform = 'translateX(-50%)';
        break;
      case 2:
        linkElement.style.top = '10%';
        linkElement.style.left = '50%';
        linkElement.style.transform = 'translateX(-50%)';
        break;
      case 3:
        linkElement.style.top = '50%';
        linkElement.style.left = '90%';
        linkElement.style.transform = 'translateY(-50%)';
        break;
    }
  }

  requestAnimationFrame(draw);
}

draw();
