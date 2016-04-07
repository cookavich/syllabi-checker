# syllabi-checker

A fun little project I put together for myself. I hate having to constantly check for whether or not a syllabus is posted, so I decided to write a script that would check for me. 

Essentially, it is a Node app that runs PhantomJS as a child process. PhantomJS navigates to my schools Moodle site, logs in, navigates to a particular course, and then checks to see if there's a syllabus. If there is, PhantomJS passes back a particular exit code which triggers Nodemailer to send me an email letting me know.
  
Could be run regularly via a Cronjob, and thus eliminating my need to go check if the prof has posted a syllabus or not. Woot.
