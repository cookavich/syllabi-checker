/**
 * Created by paulcook on 3/26/16.
 */
// Lets see if there's a syllabus posted

console.log("got here");
var webPage = require('webpage');
var page = webPage.create();
var syllabus = false;

page.onConsoleMessage = function(msg)
{
    console.log(msg);
};


var url = 'https://moodle.college.edu/login/index.php';
page.open(url, function (status)
{
    //Page is loaded!
    page.evaluate(function ()
    {
        document.querySelector("input[name='username']").value = "xxxx";
        document.querySelector("input[name='password']").value = "xxxx";
        document.getElementById("loginbtn").click();
        console.log("Login submitted!");

    });

    setTimeout(function () {
        page.evaluate(function () {
            if (document.getElementById("page-site-index")) {
                console.log("On the main page...");
            }
        });

        url = "https://moodle.college.edu/course/view.php?id=20978";

        page.open(url, function (status)
        {
            setTimeout(function ()
            {
                var result = page.evaluate(function ()
                {
                    console.log("we're on the course page");
                    if (jQuery("*:contains('Syllabus')").length > 0)
                    {
                        console.log('we have Syllabi!');
                        syllabus = true;
                        console.log(syllabus);
                    }

                    if (syllabus == true)
                        return 1;
                    else
                        return 2;
                });
                phantom.exit(result);
            }, 5000);
        });
    }, 5000);
});