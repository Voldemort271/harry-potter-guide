        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("carousel-images");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }
        var switchPage = function(page) {
            $(".page").css({
                display: "none"
            });
            $(page).css({
                display: "block"
            });
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            $('header nav li').removeClass('active');
            $(page + "Button").addClass('active');
        };
        switchPage('#home');
        var funThing = document.getElementById('change-text');
        var truthRevealed = document.getElementById('kaboom');
        var harryPot = document.getElementById('harry-potter');

        var puzzleUsers = function() {
            funThing.innerHTML = 'Fun fact: it\'s smuggled lul.';
        };
        var puzzleUsersEvenMore = function() {
            funThing.innerHTML = 'Welcome to the full-on guide for the Second World War.';
        };
        var allHopesGone = function() {
            truthRevealed.innerHTML = 'All content in the Home section of this webpage is <strong>totally</strong> false.'
        };
        var harryAppears = function() {
            harryPot.innerHTML = 'Harry Potter';
        };
        var harryIsGone = function() {
            harryPot.innerHTML = 'a 14-year old boy';
        }

        funThing.addEventListener('mouseenter', puzzleUsers);
        funThing.addEventListener('mouseleave', puzzleUsersEvenMore);
        truthRevealed.addEventListener('mouseover', allHopesGone);
        harryPot.addEventListener('mouseenter', harryAppears);
        harryPot.addEventListener('mouseleave', harryIsGone);
        var homeBtn = document.getElementById('homeButton');
        var aboutBtn = document.getElementById('aboutButton');
        var preludeBtn = document.getElementById('preludeButton');
        var courseBtn = document.getElementById('courseButton');
        var aftermathBtn = document.getElementById('aftermathButton');
        var conclusionBtn = document.getElementById('conclusionButton');
        var creditsBtn = document.getElementById('creditsButton');

        var headerText1 = document.getElementById('header-text-1');
        var headerText2 = document.getElementById('header-text-2');
        var headerText3 = document.getElementById('header-text-3');

        var headerHome = function() {
            headerText1.innerHTML = 'W W II';
            headerText2.innerHTML = 'W W II';
            headerText3.innerHTML = 'W W II';
        };
        var headerAbout = function() {
            headerText1.innerHTML = 'ABOUT';
            headerText2.innerHTML = 'ABOUT';
            headerText3.innerHTML = 'ABOUT';
        };
        var headerPrelude = function() {
            headerText1.innerHTML = 'PRELUDE';
            headerText2.innerHTML = 'PRELUDE';
            headerText3.innerHTML = 'PRELUDE';
        };
        var headerCourse = function() {
            headerText1.innerHTML = 'COURSE';
            headerText2.innerHTML = 'COURSE';
            headerText3.innerHTML = 'COURSE';
        };
        var headerAftermath = function() {
            headerText1.innerHTML = 'EFFECTS';
            headerText2.innerHTML = 'EFFECTS';
            headerText3.innerHTML = 'EFFECTS';
        };
        var headerConclusion = function() {
            headerText1.innerHTML = 'END';
            headerText2.innerHTML = 'END';
            headerText3.innerHTML = 'END';
        };
        var headerCredits = function() {
            headerText1.innerHTML = 'CREDITS';
            headerText2.innerHTML = 'CREDITS';
            headerText3.innerHTML = 'CREDITS';
        }

        homeBtn.addEventListener('click', headerHome);
        aboutBtn.addEventListener('click', headerAbout);
        preludeBtn.addEventListener('click', headerPrelude);
        courseBtn.addEventListener('click', headerCourse);
        aftermathBtn.addEventListener('click', headerAftermath);
        conclusionBtn.addEventListener('click', headerConclusion);
        creditsBtn.addEventListener('click', headerCredits);
        var data = {
            strings: ["The war that shook the world", "The war that shattered whole empires", "The war that formed the basis of World Peace", "The war that was the end of all wars"],
            typeSpeed: 80,
            backSpeed: 80,
            loop: !0
        };
        new Typed('.animated-text', data);
