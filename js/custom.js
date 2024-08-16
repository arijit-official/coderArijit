
// skill counter js

function loading() {
    document.querySelectorAll(".bar").forEach(function(current) {
      let startWidth = 0;
      const endWidth = current.dataset.size;
      
      const interval = setInterval(frame, 20);
  
      function frame() {
        if (startWidth >= endWidth) {
          clearInterval(interval);
        } else {
            startWidth++;
            current.style.width = `${endWidth}%`;
            current.firstElementChild.innerText = `${startWidth}%`;
          }
       }
    });
  }
  
  setTimeout(loading, 1000);



  
