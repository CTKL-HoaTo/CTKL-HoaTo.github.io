const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.modal .js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

// function modal-buy-tickets (add class open)
function showBuyTickets () {
    modal.classList.add('open');
};
// function modal-buy-tickets (remove class open)
function hideBuyTickets () {
    modal.classList.remove('open');
};
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

modalClose.addEventListener('click', hideBuyTickets)

modalContainer.addEventListener('click', option)

function option (event) {
    event.stopPropagation()
}

// đóng/mở menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight 

mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === headerHeight ;
    if (isClosed) {
        header.style.height = 'auto';
    }else {
        header.style.height = null;
    }
}

// tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

    for (var i = 0;i < menuItems.length; i++) {
        var menuItem = menuItems[i];
    
        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
            if (isParentMenu) {
                event.preventDefault();
            } else {
                header.style.height = null;
            }
        }
    }
