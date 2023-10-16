var eleProduct = document.getElementById('product');

// ------------------------------------------------------------------
// handle Click Navbar
function HandleClickNavbar(brand, e) {
    const searchPro = arrayProduct.filter((value) => {
        // toUpperCase() tránh phân biệt in hoa, in thường
        return value.name.toUpperCase().includes(brand.toUpperCase())
    })

    var iframe = document.getElementById("my-iframe");
    var indexElement = iframe.contentDocument.getElementById("product");

    if(indexElement) {
        render(indexElement, searchPro);
    }

    var indexTitle = iframe.contentDocument.querySelector(".category-title");

    let categoryTitle = 
        `
        <i class="fa-regular fa-lightbulb"></i>
        <p>
            Điện thoại hãng  
            <p class = 'result-search'> '${brand}'</p>
        </p>
        `

     if(indexTitle) {
        indexTitle.style.display = 'flex';
        indexTitle.innerHTML = categoryTitle; 
    }
    console.log('Còn Cần Fix');
    // Xử lý chuyển active
    const navbarItem = document.querySelectorAll('.header-nav__item');
    console.log(navbarItem);
    navbarItem.forEach((btn) => {
        btn.classList.remove('item-active');
    });
    e.classList.add('item-active');
}

// ------------------------------------------------------------------
// handle Click Sibar

function HandleClickSidebar(brand, e) {
    const searchPro = arrayProduct.filter((value) => {
        // toUpperCase() tránh phân biệt in hoa, in thường
        return value.name.toUpperCase().includes(brand.toUpperCase())
    })

    if (eleProduct) {
        render(eleProduct, searchPro);
    } 
    
    // Handle Display Title
    let homeTitle = document.querySelector(".category-title");

    let categoryTitle = 
        `
        <i class="fa-regular fa-lightbulb"></i>
        <p>
            Điện thoại hãng  
            <p class = 'result-search'> '${brand}'</p>
        </p>
        `

    if (homeTitle) {
        homeTitle.style.display = 'flex';
        homeTitle.innerHTML = categoryTitle; 
    } 

    // Xử lý chuyển active
    const sidebarItem = document.querySelectorAll('.sidebar-item');
    sidebarItem.forEach((btn) => {
        btn.classList.remove('item-active');
    });
    e.classList.add('item-active');
}


// ------------------------------------------------------------------
// Search Product

function HandleSearchProduct(event) {
    let searchInputV = document.querySelector('.search-header__input').value;

    const searchPro = arrayProduct.filter((value) => {
        // toUpperCase() tránh phân biệt in hoa, in thường
        return value.name.toUpperCase().includes(searchInputV.toUpperCase())
        
    })

    var targetElement = document.getElementById("product");

    if (targetElement) {

        render(targetElement, searchPro)
    }

    window.scrollBy(0, 180);

    var targetTitle = document.querySelector(".category-title");

    let categoryTitle = 
        `
        <i class="fa-regular fa-lightbulb"></i>
        <p>
            Kết quả tìm kiếm cho từ khóa 
            <p class = 'result-search'> "${searchInputV}"</p>
        </p>
        `

    if (targetTitle) {
        targetTitle.style.display = 'flex';
        targetTitle.innerHTML = categoryTitle; 
    }
}

// ------------------------------------------------------------------
// Sắp xếp theo giá

function handleLowToHight(e) {    
    for(var i = 0; i < arrayProduct.length - 1; i++) {
        for(var j = i +1 ; j < arrayProduct.length; j++) {
            if(arrayProduct[i].priceCurrentNumber > arrayProduct[j].priceCurrentNumber) {
                let t = arrayProduct[i]
                arrayProduct[i] = arrayProduct[j]
                arrayProduct[j] = t;
            }
        }
    }

    // Xử lý chuyển active
    const classyfyItem = document.querySelectorAll('.classify-item');
    classyfyItem.forEach((btn) => {
        btn.classList.remove('btn-active');
    });
    e.classList.add('btn-active');

    render(eleProduct ,arrayProduct);

}

function handleHightToLow(e) {
    for(var i = 0; i < arrayProduct.length - 1; i++) {
        for(var j = i +1 ; j < arrayProduct.length; j++) {
            if(arrayProduct[i].priceCurrentNumber < arrayProduct[j].priceCurrentNumber) {
                let t = arrayProduct[i]
                arrayProduct[i] = arrayProduct[j]
                arrayProduct[j] = t;
            }
        }
    }

    // Xử lý chuyển active
    const classyfyItem = document.querySelectorAll('.classify-item');
    classyfyItem.forEach((btn) => {
        btn.classList.remove('btn-active');
    });
    e.classList.add('btn-active');

    render(eleProduct, arrayProduct);
}

// ------------------------------------------------------------------
// Function Render 

function render( e,arr){
    
    const htmls = arr.map((item, index) => {
        return `
        <div class="wrap-product col"  onclick="localStorage.setItem('id', ${index});">
            <a href = './iframe/product.html' class="product-item">
                <img class="product-item__img"
                    src=${item.img}
                    alt="Điện thoại iphone">
                <div class="wrap-product-user-rating">
                    <h5 class="product-item__title">${item.name}</h5>
                    <div class="product-item__price">
                        <span class="product-item__price-old">${item.priceOld}</span>
                        <span class="product-item__price-current">${item.priceCurrent}</span>
                    </div>
                    <div class="product-item__actions">
                        <div class="product-item__actions-like">
                            <i class="fa-solid fa-heart"></i>
                            <i class="fa-regular fa-heart" style="display: none;"></i>
                        </div>
                        <div class="wrap-product-rating">
                            <span class="product-item__sold">Đã bán ${item.sold}k</span>
                        </div>
                    </div>
                    <div class="wrap-product-item__brand">
                        <span class="product-item__brand">Beta Shop</span>
                        <span class="product-item__City">${item.city}</span>
                    </div>
                    <div class="product-item__favourite">
                        <i class="fa-solid fa-check"></i>
                        <span>Yêu Thích</span>
                    </div>
                    <div class="product-item__sale-off">
                        <span class="product-item__sale-off-percen">${item.saleOff}%</span>
                        <span class="product-item__sale-off-label">GIẢM</span>
                    </div>
                </div>
            </a>
        </div>`;
    })


    if(e) {
        e.innerHTML = htmls.join(''); 
    } 

    
    
}

// ------------------------------------------------------------------
// Function iframe load 

// function handleLoad() {
//     var iframe = document.getElementById("my-iframe");
//     iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
//     var iframeParent = document.getElementById("video-wrapper");
//     iframeParent.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    
// }

render(eleProduct, arrayProduct);





