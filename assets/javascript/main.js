import {listProduct, htmlHome, htmlProduct} from './item.js'


$(document).ready(function(){
    ;( function() {
        // Reder home
        $('#slider').after(htmlHome)
        $('.header__logo-link').click(function() { 
            $('#container').remove()
            $('#slider').after(htmlHome)
            navbarOnMobile()
            setHeightSubnav()
            subNavOnMobile()
            searchOnMobile()
            handleMainScroll()
            historySearch()
            slideAnimation()
            changeImage('.container__slier',
            'https://file.hstatic.net/1000184601/file/thoi-trang-ben-vung-pc_d19722f5833341b0a0bc6feb8599c822.jpg',
            'https://file.hstatic.net/1000184601/collection/di_hoc_-_copy-01_171efa66339940c8bf473a64a956c0f8.jpg'
            )
            scrollProduct()
            clickBtn()
        })
            navbarOnMobile()
            setHeightSubnav()
            subNavOnMobile()
            searchOnMobile()
            handleMainScroll()
            historySearch()
            slideAnimation()
            changeImage('.container__slier',
            'https://file.hstatic.net/1000184601/file/thoi-trang-ben-vung-pc_d19722f5833341b0a0bc6feb8599c822.jpg',
            'https://file.hstatic.net/1000184601/collection/di_hoc_-_copy-01_171efa66339940c8bf473a64a956c0f8.jpg'
            )
            scrollProduct()
            clickBtn()
    })()  

    function searchOnMobile() {
        var submitIcon = $('.header__search-box-icon');
        var inputBox = $('.header__search-box-input');
        var searchBox = $('.header__search-box');
        var isOpen = false;
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('header__search-box-open');
                inputBox.focus();
                isOpen = true;
            } else {
                if (!inputBox.val()) {
                    searchBox.removeClass('header__search-box-open');
                    inputBox.focusout();
                    isOpen = false;
                }
            }
        });  
        submitIcon.mouseup(function(){
                return false;
            });
        searchBox.mouseup(function(){
            return false;
        });
        $(document).mouseup(function(){
                if(isOpen == true){
                    $('.header__search-box-icon').css('display','block');
                    submitIcon.click();
                }
        });
    }
    // Handle History Search
    function historySearch() {
        $('.header__search-box-input').focus( function() {
                $('.header__list-history').css('display', 'block');
            })
        $('.header__search-box-input').blur(function() {
            $('.header__list-history').css('display', 'none');
        })
        }
    // Handle Navbar On Mobile   
    function navbarOnMobile() {
        $('.header__navbar-icon-open').click( function () { 
            $('.header__navbar').slideDown(400)
        })
        $('.header__navbar-icon-close').click( function () { 
            $('.header__navbar').slideUp(400)
        })
        
    }
    // Handle Sub Navbar On Mobile   
    function subNavOnMobile() {
       var isOpen = false
        $('.header__sub-nav-icon').click( function () { 
            if (isOpen) {
                $('.header__sub-nav-icon').css('transform', 'rotate(0deg)')
                $('.header__nav-icon-warp').slideToggle(400)
                isOpen = !isOpen
            } else {
                $('.header__sub-nav-icon').css('transform', 'rotate(180deg)')
                $('.header__nav-icon-warp').slideToggle(400)
                isOpen = !isOpen
            }
        })
    }
    
    function setHeightSubnav() {
        $('.header__sub-nav-icon').height($('.header__sub-nav-icon').width())
    }

    // Slider Show
    function slideAnimation () {
        const slider = $('#slider')
        const sliderMain = $('.slider-main')
        const sliderItems = $('.slider-item') 
        const nextBtn = $('.slider-next') 
        const prevBtn = $('.slider-prev') 
        const dotItems = $('.slider-dot-item')
        var sliderLength = sliderItems.length
        let positionX = 0
        let index = 0
        nextBtn.click( function () {
            var sliderLength = sliderItems.length
            handleChangeSlider(1)
        })
        prevBtn.click( function () {
        var sliderLength = sliderItems.length
            handleChangeSlider(-1)
        })
        Array(dotItems).forEach( (item) => {
            item.click( function (e) {
                Array(dotItems).forEach( i => i.removeClass('active'))
                this.classList.add('active')
               const sliderIndex =  this.dataset.index
               index = sliderIndex
               positionX = -1 *index * sliderItems.width()
               sliderMain.css('transform', `translateX(${positionX}px)`)
            })
     
        })
        function handleChangeSlider(direction) {
            if (direction === 1) {
                if (index >= sliderLength -1 ) {
                    index = sliderLength -1
                    return
                }
                positionX = positionX - sliderItems.width()
                sliderMain.css('transform', `translateX(${positionX}px)`)
                index++
                
             } else if (direction === -1) {
                if (index <= 0) {
                    index = 0
                    return   
                }
                positionX = positionX +  sliderItems.width()
                sliderMain.css('transform', `translateX(${positionX}px)`)
                index--
                }
                Array(dotItems).forEach(i => i.removeClass('active'))
                dotItems[index].classList.add('active')
         }
     }
     
     
    function changeImage(element,linkDefault,linkChange) {
       var elementImage = $(element)
       setInterval(() => {   
           setTimeout( () => {
                elementImage.css('background',`url(${linkDefault}) top center / cover no-repeat`)
            },2500)
            elementImage.css('background',`url(${linkChange}) top center / cover no-repeat`)
       }, 5000)
    }
    
    
    
    
    function scrollProduct() {
        const nextBtns = $('.container__next-icon')
        const prevBtns = $('.container__prev-icon')
        nextBtns.click(function () {
            var listProduct = this.parentElement.querySelector('ul')
            var itemProduct =listProduct.querySelector('li')
            var scrollLeft = listProduct.scrollLeft
            listProduct.scrollLeft = scrollLeft + itemProduct.offsetWidth*3

        })
        prevBtns.click(function () {
            var listProduct = this.parentElement.querySelector('ul')
            var itemProduct =listProduct.querySelector('li')
            var scrollLeft = listProduct.scrollLeft
            listProduct.scrollLeft = scrollLeft - itemProduct.offsetWidth*3

        })
    }
    // When Click Scroll Button
    function handleMainScroll () {
        const mainScroll = $('.scroll-top')
        document.onscroll =  function() {
            mainScroll.css('display', 'flex')
            if (document.documentElement.scrollTop < 5) {
                mainScroll.css('display', 'none')
            }
        }
        mainScroll.click(() => {
            document.documentElement.scrollTop = 0
        })
    }
    ;( function() { 
        document.onkeyup = function (e) {
            if(e.code === 'Space') {
            document.documentElement.scrollTop += 400    
            }
        }
    })()
              
    // Handle Rnder Product  
    function reder(option) {
        var htmls = []
        $('#container').remove()
        $('#slider').after(htmlProduct)
        let homeProduct = $('#home__product')[0]
        listProduct.forEach(function(product, index) {
            if (option != 'all') {

                if(product.type == option) {
                    var html =  `
                    <div  class="container__product-item col l-3 m-4 c-6">
                            <img data-index="${index}" src="${product.img_1}" alt="" class="container__product-item-img">
                            <p class="container__product-item-title">${product.name}</p>
                            <span class="container__product-item-price">${product.price}</span>                                
                        </div>     
                    `
                htmls.push(html)
                }
            } 
            else {
                var html =  `
                    <div  class="container__product-item col l-3 m-4 c-6">
                            <img data-index="${index}" src="${product.img_1}" alt="" class="container__product-item-img">
                            <p class="container__product-item-title">${product.name}</p>
                            <span class="container__product-item-price">${product.price}</span>                                
                        </div>     
                    `
                htmls.push(html)
            }
        })
        homeProduct.innerHTML = htmls.join('')

        // Handle When Click Item On Category
        ;(function (){
            var optionCategory = $('.container__category-item')
            optionCategory.click(function(){ 
                var option = this.getAttribute('option')
                reder(option)
            })
        })()
        SlideOption()
        changeImg()
    }

    // Handle When Click Option On Navbar 
    ;(function(){
        var optionNavbar = $('.header__item-link-list')
        optionNavbar.click(function(){ 
            var option = this.getAttribute('option')
            $('.header__navbar').slideUp(400)
            reder(option)
        })
    })()
    // Handle When move Into And Out Img Product 
    function changeImg() {
        var imgProduct = $('.container__product-item-img')
        imgProduct.mouseenter(function() {
            var indexImg = this.dataset.index
            var newImg = listProduct[indexImg].img_2
            this.setAttribute('src', newImg)
        })
        imgProduct.mouseout(function() {
            var indexImg = this.dataset.index
            var newImg = listProduct[indexImg].img_1
            this.setAttribute('src', newImg)
        })
    }
    // Handle Click Select
    function SlideOption () {
    
        $('.container__select-heading').click ( function () {
            var parent = $(this).parent()
            var listOption =parent.find('.container__list-option')

            
            listOption.slideToggle(200)
            listOption.mouseleave(function() {
                listOption.slideUp(200)
             })
        })
    }

    function clickBtn() {
        $('.btn').click(function() {
            reder('all')
        })
    }

})




