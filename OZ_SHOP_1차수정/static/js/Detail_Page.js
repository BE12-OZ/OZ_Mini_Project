// 제품 데이터
    const product_data = [
      { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', image_url: 'https://placehold.co/300x200/E8B584/FFFFFF?text=Hoodie' },
      { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Pants' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Shoes' },
      { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Accessory' },
      { category: "상의", brand: 'Nike', product: '나이키 맨투맨', price: '80,000', image_url: 'https://placehold.co/300x200/C49268/FFFFFF?text=Nike+Sweater' },
      { category: "하의", brand: 'Supreme', product: '슈프림 조거 팬츠', price: '250,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Supreme+Jogger' },
      { category: "신발", brand: 'DIESEL', product: '디젤 스니커즈', price: '220,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Diesel+Sneakers' },
      { category: "패션잡화", brand: 'Nike', product: '나이키 볼캡', price: '45,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Nike+Cap' },
      { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', image_url: 'https://placehold.co/300x200/E8B584/FFFFFF?text=Hoodie' },
      { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Pants' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Shoes' },
      { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Accessory' },
      { category: "상의", brand: 'Nike', product: '나이키 맨투맨', price: '80,000', image_url: 'https://placehold.co/300x200/C49268/FFFFFF?text=Nike+Sweater' },
      { category: "하의", brand: 'Supreme', product: '슈프림 조거 팬츠', price: '250,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Supreme+Jogger' },
      { category: "신발", brand: 'DIESEL', product: '디젤 스니커즈', price: '220,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Diesel+Sneakers' },
      { category: "패션잡화", brand: 'Nike', product: '나이키 볼캡', price: '45,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Nike+Cap' },
      { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', image_url: 'https://placehold.co/300x200/E8B584/FFFFFF?text=Hoodie' },
      { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Pants' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Shoes' },
      { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Accessory' },
      { category: "상의", brand: 'Nike', product: '나이키 맨투맨', price: '80,000', image_url: 'https://placehold.co/300x200/C49268/FFFFFF?text=Nike+Sweater' },
      { category: "하의", brand: 'Supreme', product: '슈프림 조거 팬츠', price: '250,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Supreme+Jogger' },
      { category: "신발", brand: 'DIESEL', product: '디젤 스니커즈', price: '220,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Diesel+Sneakers' },
      { category: "패션잡화", brand: 'Nike', product: '나이키 볼캡', price: '45,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Nike+Cap' },
      { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', image_url: 'https://placehold.co/300x200/E8B584/FFFFFF?text=Hoodie' },
      { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Pants' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Shoes' },
      { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Accessory' },
      { category: "상의", brand: 'Nike', product: '나이키 맨투맨', price: '80,000', image_url: 'https://placehold.co/300x200/C49268/FFFFFF?text=Nike+Sweater' },
      { category: "하의", brand: 'Supreme', product: '슈프림 조거 팬츠', price: '250,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Supreme+Jogger' },
      { category: "신발", brand: 'DIESEL', product: '디젤 스니커즈', price: '220,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Diesel+Sneakers' },
      { category: "패션잡화", brand: 'Nike', product: '나이키 볼캡', price: '45,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Nike+Cap' },
      { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000', image_url: 'https://placehold.co/300x200/E8B584/FFFFFF?text=Hoodie' },
      { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Pants' },
      { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Shoes' },
      { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Accessory' },
      { category: "상의", brand: 'Nike', product: '나이키 맨투맨', price: '80,000', image_url: 'https://placehold.co/300x200/C49268/FFFFFF?text=Nike+Sweater' },
      { category: "하의", brand: 'Supreme', product: '슈프림 조거 팬츠', price: '250,000', image_url: 'https://placehold.co/300x200/D4A276/FFFFFF?text=Supreme+Jogger' },
      { category: "신발", brand: 'DIESEL', product: '디젤 스니커즈', price: '220,000', image_url: 'https://placehold.co/300x200/A67C52/FFFFFF?text=Diesel+Sneakers' },
      { category: "패션잡화", brand: 'Nike', product: '나이키 볼캡', price: '45,000', image_url: 'https://placehold.co/300x200/B5845A/FFFFFF?text=Nike+Cap' },
    ];

    const productCardsContainer = document.getElementById('product-cards-container');
    const categorySelect = document.getElementById('inlineFormSelectPref');
    const brandSelect = document.getElementById('brandSelect');
    const genderSelect = document.getElementById('genderSelect');
    const productSearchInput = document.querySelector('input[placeholder="제품명을 입력해주세요"]');
    const searchButton = document.querySelector('button[type="submit"]');
    const paginationControls = document.getElementById('pagination-controls');

    const itemsPerPage = 9; // 한 페이지에 보여줄 제품 수
    let currentPage = 1;
    let filteredProducts = []; // 필터링된 제품들을 저장할 배열

    function renderProducts(productsToRender) {
      productCardsContainer.innerHTML = '';
      if (productsToRender.length === 0) {
        productCardsContainer.innerHTML = '<p class="text-center text-white-50">검색 결과가 없습니다.</p>';
        return;
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const productsToDisplay = productsToRender.slice(startIndex, endIndex);

      productsToDisplay.forEach((item) => {
        const cardHtml = `
          <div class="col">
            <div class="card h-100">
              <img src="${item.image_url}" class="card-img-top" alt="${item.product}">
              <div class="card-body">
                <h5 class="card-title">${item.product}</h5>
                <p class="card-text">브랜드: ${item.brand}</p>
                <p class="card-text">카테고리: ${item.category}</p>
                <p class="card-text">가격: ${item.price}</p>
              </div>
            </div>
          </div>
        `;
        productCardsContainer.insertAdjacentHTML('beforeend', cardHtml);
      });
    }

    function setupPagination(products) {
      paginationControls.innerHTML = '';
      const pageCount = Math.ceil(products.length / itemsPerPage);

      if (pageCount <= 1) return; // 페이지가 하나뿐이면 페이지네이션을 표시하지 않음

      // 이전 버튼
      const prevLi = document.createElement('li');
      prevLi.classList.add('page-item');
      if (currentPage === 1) {
        prevLi.classList.add('disabled');
      }
      const prevA = document.createElement('a');
      prevA.classList.add('page-link');
      prevA.href = '#';
      prevA.textContent = '이전';
      prevA.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) {
          currentPage--;
          renderProducts(filteredProducts);
          setupPagination(filteredProducts);
        }
      });
      prevLi.appendChild(prevA);
      paginationControls.appendChild(prevLi);

      for (let i = 1; i <= pageCount; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPage) {
          li.classList.add('active');
        }
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = '#';
        a.textContent = i;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          currentPage = i;
          renderProducts(filteredProducts);
          setupPagination(filteredProducts);
        });
        li.appendChild(a);
        paginationControls.appendChild(li);
      }

      // 다음 버튼
      const nextLi = document.createElement('li');
      nextLi.classList.add('page-item');
      if (currentPage === pageCount) {
        nextLi.classList.add('disabled');
      }
      const nextA = document.createElement('a');
      nextA.classList.add('page-link');
      nextA.href = '#';
      nextA.textContent = '다음';
      nextA.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage < pageCount) {
          currentPage++;
          renderProducts(filteredProducts);
          setupPagination(filteredProducts);
        }
      });
      nextLi.appendChild(nextA);
      paginationControls.appendChild(nextLi);
    }

    function filterProducts() {
      const selectedCategory = categorySelect.value === '카테고리' ? '' : categorySelect.value;
      const selectedBrand = brandSelect.value === '브랜드' ? '' : brandSelect.value;
      const selectedGender = genderSelect.value === '성별' ? '' : genderSelect.value;
      const searchTerm = productSearchInput.value.toLowerCase();

      filteredProducts = product_data.filter(item => {
        const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
        const matchesBrand = selectedBrand ? item.brand === selectedBrand : true;
        const matchesGender = selectedGender ? true : true; 
        const matchesSearchTerm = searchTerm ? item.product.toLowerCase().includes(searchTerm) : true;

        return matchesCategory && matchesBrand && matchesGender && matchesSearchTerm;
      });
      currentPage = 1; 
      renderProducts(filteredProducts);
      setupPagination(filteredProducts);
    }

    
    document.addEventListener('DOMContentLoaded', () => {
      filterProducts(); // 초기 로딩 시 필터링 및 페이지네이션 설정

      // 회원가입 버튼 클릭 시 User.html로 이동
      const signupBtn = document.getElementById('signup-btn');
      if (signupBtn) {
          signupBtn.style.cursor = 'pointer'; // 클릭 가능한 커서 추가
          signupBtn.removeAttribute('disabled'); // 혹시 모를 disabled 속성 제거
          signupBtn.addEventListener('click', () => {
              window.location.href = 'User.html';
          });
      }
    });

    // 필터 변경 시 이벤트 리스너
    categorySelect.addEventListener('change', filterProducts);
    brandSelect.addEventListener('change', filterProducts);
    genderSelect.addEventListener('change', filterProducts);
    productSearchInput.addEventListener('input', filterProducts); // 입력 시 바로 필터링
    searchButton.addEventListener('click', (event) => {
      event.preventDefault(); // 폼 제출 방지
      filterProducts();
    });

    // 현재 시간 표시 (기존 코드 유지)
    const currentTime = document.getElementById('current-time');

    function updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const date = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      currentTime.innerText = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);

    // 다크 모드 토글
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // 페이지 로드 시 다크 모드 상태 확인
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      // 다크 모드 상태를 localStorage에 저장
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });