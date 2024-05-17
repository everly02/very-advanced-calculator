document.getElementById('calculate').addEventListener('click', function() {
    const progressElement = document.getElementById('progress');
    const imageElement = document.getElementById('responseImage');
    
    // 显示进度指示
    progressElement.classList.remove('hide');
    imageElement.classList.add('hide');

    // 假进度条效果
    setTimeout(() => {
        // 隐藏进度指示，显示图片
        progressElement.classList.add('hide');
        imageElement.classList.remove('hide');
    }, 2000); // 2秒后显示图片
});
