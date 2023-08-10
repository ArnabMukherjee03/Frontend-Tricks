  
    function Event() {
      const features = document.querySelectorAll('.feature');
      features.forEach((item)=>{
        item.querySelector('.feature__head').addEventListener('click', e => {
          handleClick(e, item, features);
        });
        item.querySelector('.feature__head').addEventListener('mouseover', e => {
           handleClick(e, item, features);
        });
      })

    }
  
    function handleClick(e, item, features) {
      e.preventDefault()
      features.forEach((feature) => {
        feature.classList.remove('is-active');
      });
  
      item.classList.add('is-active');
    }
  
    Event();

  

  
  