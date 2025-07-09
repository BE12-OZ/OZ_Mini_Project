
        document.addEventListener('DOMContentLoaded', function() {
            const ozShopTitle = document.getElementById('oz-shop-title');
            if (ozShopTitle) {
                ozShopTitle.style.cursor = 'pointer'; // 클릭 가능한 시각적 표시
                ozShopTitle.addEventListener('click', function() {
                    window.location.href = 'Detail_Page.html';
                });
            }
        });
    