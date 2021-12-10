var revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
        anchorSelector: ".nav-btn-js",
    },
});

document.addEventListener("DOMContentLoaded", () => {
    

    const actionBtn = document.querySelector(".nav-btn-js");
    actionBtn.addEventListener("click", () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
            $('.nav-button').on('click',function (e) {
                e.preventDefault();
                $(this).addClass('active');
            
            });


        } else  {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false);
            $('.nav-button').on('click',function (e) {
                e.preventDefault();
                $(this).removeClass('active');
            
            });
            
        }

        
    });
    const linksDoMenuCaralho = document.getElementsByClassName("header__menu-item")
    for (let elm of linksDoMenuCaralho) {
        elm.onclick = () => {
            revealerNav.hide();
            document.getElementById("jonatasesteveaqui").setAttribute("data-open", false);
        }
    }

    if (actionBtn.setAttribute("data-open", true)) {
        $('.nav-button').on(function (e) {
            e.preventDefault();
            $(this).addClass('active');
        
        });

    } else {
        $('.nav-button').on(function (e) {
            e.preventDefault();
            $(this).removeClass('active');
        
        });

    }



    
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

let links = Array.from(document.querySelectorAll("a"));

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        innerCursor.classList.add("grow")
    })
    link.addEventListener('mouseleave', () => {
        innerCursor.classList.remove("grow")
    })
})

const button = document.querySelector('.submit-button'),
    stateMsg = document.querySelector('.pre-state-msg');

const updateButtonMsg = function () {
    button.classList.add('state-1', 'animated');

    setTimeout(finalButtonMsg, 2000);
};

const finalButtonMsg = function () {
    button.classList.add('state-2');

    setTimeout(setInitialButtonState, 2000);
};

const setInitialButtonState = function () {
    button.classList.remove('state-1', 'state-2', 'animated');
};

button.addEventListener('click', updateButtonMsg);

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    speed: 1,
    autoplay: true,
    path: 'data.json'
  })

