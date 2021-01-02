// function to get element using doom
function getDomAll(selector, type) {
    if (type === 'all') {
      return document.querySelectorAll(selector);
    } else {
      return document.querySelector(selector);
    }
  }
  
  const imageHero = getDomAll('#image');
  
  const getActiveClass = getDomAll('.navAction', 'all');
  
  console.log(getActiveClass);
  
  // add borderBottom at navbar
  getActiveClass.forEach((value, index) => {
    value.addEventListener('click', () => {
      const activeNav = getDomAll('.navBar a.active');
      if (activeNav !== null) {
        activeNav.classList.remove('active');
      }
      value.classList.add('active');
    });
  });
  
  // changes image onClick
  imageHero.addEventListener('click', (e) => {
    if (
      imageHero.getAttributeNode('src').value === '../Assets/Images/person2.jpg'
    ) {
      imageHero.getAttributeNode('src').value = '../Assets/Images/person1.jpg';
    } else {
      imageHero.getAttributeNode('src').value = '../Assets/Images/person2.jpg';
    }
  });
  