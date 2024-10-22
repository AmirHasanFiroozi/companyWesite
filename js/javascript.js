const header__hambergerMenu = document.querySelector(".header__hamberger-menu");
const header__menu = document.querySelector(".header__menu");
const header__cover = document.querySelector('.cover');
const header__link = document.querySelectorAll('.header__link');
header__hambergerMenu.addEventListener("click", () => {
    console.log('click');
  if (
    header__hambergerMenu.classList.contains("header__hamberger-menu--clicked")
  ) {
    header__hambergerMenu.classList.remove("header__hamberger-menu--clicked");
    header__menu.classList.remove("header__menu--show");
    header__cover.classList.remove('cover--show');
  } else {
    header__hambergerMenu.classList.add("header__hamberger-menu--clicked");
    header__menu.classList.add("header__menu--show");
    header__cover.classList.add('cover--show');
  }
});
header__link.forEach(item=>{
    item.addEventListener('click',(ev)=>{
        document.querySelector('.header__link--active').classList.remove('header__link--active')
        item.classList.add('header__link--active');
        header__hambergerMenu.classList.remove("header__hamberger-menu--clicked");
        header__menu.classList.remove("header__menu--show");
        header__cover.classList.remove('cover--show');
        ev.preventDefault();
        let header__linkAttributeName = item.getAttribute('data-sections-id');
        let sectionDistanceFromTop = document.querySelector(`${header__linkAttributeName}`).offsetTop;
        window.scrollTo(0,sectionDistanceFromTop-100);
      });
});
const resume__item = document.querySelectorAll('.resume__item');
resume__item.forEach(item=>{
  item.addEventListener('click',()=>{
    document.querySelector(".resume__item--active").classList.remove('resume__item--active');
    item.classList.add("resume__item--active");
   });
});
const eduction = document.querySelector(".eduction");
const workSpace = document.querySelector(".workSpace");
resume__item[0].addEventListener('click' , ()=>{
  document.querySelector('.section--show').classList.remove('section--show');
  eduction.classList.add("section--show");
});
resume__item[1].addEventListener('click',()=>{
  document.querySelector('.section--show').classList.remove('section--show');
   workSpace.classList.add('section--show');
});
const programmingSkill =document.querySelector(".programmingSkill");
resume__item[2].addEventListener('click',()=>{
  document.querySelector('.section--show').classList.remove('section--show');
   programmingSkill.classList.add('section--show');
});
const designSkill = document.querySelector('.designSkill');
resume__item[3].addEventListener('click',()=>{
  document.querySelector('.section--show').classList.remove('section--show');
  designSkill.classList.add('section--show');
});
const seoSkills = document.querySelector('.seoSkills');
resume__item[4].addEventListener('click' , ()=>{
  document.querySelector('.section--show').classList.remove('section--show');
  seoSkills.classList.add('section--show');
})
const portfolio__link = document.querySelectorAll('.portfolio__link');
portfolio__link.forEach(item=>{
item.addEventListener('click' , ()=>{
  document.querySelector('.portfolio__link--active').classList.remove('portfolio__link--active');
  item.classList.add('portfolio__link--active');
});
});
const portfolio__picture=document.querySelector('.portfolio__picture');
const portfolio__stimulusPicturesItem= document.querySelectorAll( '.portfolio__stimulusPicturesItem');;
portfolio__stimulusPicturesItem[0].addEventListener('click',()=>{
  if(portfolio__picture.classList.contains('portfolio__picture1')){
    portfolio__picture.classList.remove('portfolio__picture1')
    }else{
      portfolio__picture.classList.remove('portfolio__picture3')
    }
    portfolio__picture.classList.add('portfolio__picture2');
    document.querySelector('.portfolio__stimulusPicturesItem--active').classList.remove('portfolio__stimulusPicturesItem--active');
    portfolio__stimulusPicturesItem[0].classList.add('portfolio__stimulusPicturesItem--active');
});
portfolio__stimulusPicturesItem[1].addEventListener('click',()=>{
  if(portfolio__picture.classList.contains('portfolio__picture2')){
  portfolio__picture.classList.remove('portfolio__picture2')
  }else{
    portfolio__picture.classList.remove('portfolio__picture3')
  }
 portfolio__picture.classList.add('portfolio__picture1');
 document.querySelector('.portfolio__stimulusPicturesItem--active').classList.remove('portfolio__stimulusPicturesItem--active');
 portfolio__stimulusPicturesItem[1].classList.add('portfolio__stimulusPicturesItem--active');
});
portfolio__stimulusPicturesItem[2].addEventListener('click',()=>{
  if(portfolio__picture.classList.contains('portfolio__picture2')){
    portfolio__picture.classList.remove('portfolio__picture2')
    }else{
      portfolio__picture.classList.remove('portfolio__picture1')
    }
 portfolio__picture.classList.add('portfolio__picture3');
 document.querySelector('.portfolio__stimulusPicturesItem--active').classList.remove('portfolio__stimulusPicturesItem--active');
 portfolio__stimulusPicturesItem[2].classList.add('portfolio__stimulusPicturesItem--active');
});
// const sections = document.querySelectorAll('section');
// const observer = new IntersectionObserver(callbackFunctionForObserverObject,Option={
//   threshold : 0.3
// });
// function callbackFunctionForObserverObject(allSections) {
//  allSections.forEach(section=>{
//   let sectionsClassName = section.target.className;
//     if(section.isIntersecting){
//     document.querySelector(`.header__link`);
    
//    }else{
//     document.querySelector(`.header__link[data-sections-id=${sectionsClassName}]`).classList.remove('header__link--active');
//    }
//  });
// }
// sections.forEach(item => {observer.observe(item)});
const switchButton = document.querySelector('.switchButton');
switchButton.addEventListener('click' , ()=>{
  if(switchButton.innerHTML=='Dark'){
 document.documentElement.classList.add('dark__them');
 switchButton.innerHTML = 'Light';
 document.querySelector('.svgShape').classList.add('svgShape--dark');
 window.localStorage.setItem('item',"darkThem");
  }else{
    document.documentElement.classList.remove('dark__them');
    switchButton.innerHTML = 'Dark';
    document.querySelector('.svgShape').classList.remove('svgShape--dark');
    window.localStorage.setItem('item',"lightThem");
  }
});
if(localStorage.getItem("item")==='darkThem'){
  document.documentElement.classList.add('dark__them');
  switchButton.innerHTML = 'Light';
  document.querySelector('.svgShape').classList.add('svgShape--dark');
}