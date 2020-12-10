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
            $('.header-button').removeClass('active');
            $(page + "Button").addClass('active');
        };
        switchPage('#home');
        
        var headText = document.getElementById('header-tagline');
        var homeBtn = document.getElementById('homeButton');
        var aboutBtn = document.getElementById('aboutButton');
        var storyBtn = document.getElementById('storyButton');
        var creditsBtn = document.getElementById('creditsButton');

        var changeTextHome = function() {
            headText.innerHTML = 'The hands-on guide to the Harry Potter films. ';
        };
        var changeTextAbout = function() {
            headText.innerHTML = 'Fun fact: J K Rowling\'s first Harry Potter manuscript was rejected by 12 publishers before Bloomsbury picked it up. Thanks to Bloomsbury as well!';
        };
        var changeTextStory = function() {
            headText.innerHTML = '<p class = \'text-danger\'> SPOILER ALERT </p>';
        };
        var changeTextCredits = function() {
            headText.innerHTML = 'Thanks, everyone here!';
        };
        changeTextHome();
        homeBtn.addEventListener('click', changeTextHome);
        aboutBtn.addEventListener('click', changeTextAbout);
        storyBtn.addEventListener('click', changeTextStory);
        creditsBtn.addEventListener('click', changeTextCredits);
