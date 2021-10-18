document.addEventListener("DOMContentLoaded", () => {
    const revealerNav = window.revealer({
        revealElementSelector: ".nav-js",
        options: {
            anchorSelector: ".nav-btn-js",
        },
    });

    const actionBtn = document.querySelector(".nav-btn-js");
    actionBtn.addEventListener("click", () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false);
        }
    });
});

$('.nav-btn-js  ').on('click','a', function(e) {
    e.preventDefault();
    
    $(this).toggleClass('active');
  });

  AOS.init();

  let innerCursor = document.querySelector('.inner-cursor');
  let outerCursor = document.querySelector('.outer-cursor');

  document.addEventListener('mousemove', moveCursor);

  function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;

    //   console.log(x, y)

    innerCursor.style.left = `${x}px`
    innerCursor.style.top = `${y}px`
    outerCursor.style.left = `${x}px`
    outerCursor.style.top = `${y}px`
  }

  let links = Array.from(document.querySelectorAll("h1"));

  links.forEach(link => {
      link.addEventListener('mouseover', ()=>{
          innerCursor.classList.add("grow")
      })
      link.addEventListener('mouseleave', ()=>{
          innerCursor.classList.remove("grow")
      })
  })