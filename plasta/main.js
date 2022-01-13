// 상단 네비게이션-----------------------------------------------------------------

const checkScroll = () => {
  let pageYOffSet = window.pageYOffset;
  const upperContainer = document.querySelector('.upper-container');

  if(pageYOffSet > 200) {
    upperContainer.style.backgroundColor = "rgba(0,0,0,0.4)"
  } else {
    upperContainer.style.backgroundColor = ""
  }
}

const hambugerMenu = document.getElementById('hambuger-icon');

const showNavSection = () => {
  const navContainer = document.getElementById('nav-container');
  const windowWidth = window.innerWidth;  
  
  if(windowWidth > 950) {
    navContainer.style.width = "340px"
    navContainer.style.right = "0"
  } else {
    navContainer.style.width = "100%"
    navContainer.style.right = "0"
  }
}

const closeBt = document.getElementById('closeBt');

const closeNavBar = () => {
  const navContainer = document.getElementById('nav-container');
  const windowWidth = window.innerWidth;  

  // Desktop
  if(windowWidth > 950) {
    navContainer.style.width = "340px"
    navContainer.style.right = "-340px";
  } else {
    //Mobile
    navContainer.style.width = "100%"
    navContainer.style.right = "-100%";
  }
}

closeBt.addEventListener('click', closeNavBar);
hambugerMenu.addEventListener('click', showNavSection);
window.addEventListener('scroll', checkScroll);


// 팝업 닫기-----------------------------------------------------------------------
const popupBt = document.querySelector('.close-pop');

popupBt.addEventListener('click', () => {
  const popBox = document.querySelector('.popUp-container');
  popBox.style.display = 'none'
});