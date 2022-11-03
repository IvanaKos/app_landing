#app_landing

[link]

Project type:
Landing page.
_________________
Webpage name: 
App Landing
_________________
Webpage content: 
1. header with nav menu
2. main content
3. recommendations
4. features
5. additional features
6. services
7. additional services
8. pricing
9. testimonials
10. faq
11.download app
12. footer
__________________

Folder structure:

applanding_____index.html
                 I
                 I_____css ________style.css
                 I               I________reset.css
                 I
                 I_____assets ______icons
                 I                    I_____images
                 I                    I_____logos
                 I                    I_____svg
                 I
                 I_____readme.md
_____________________

COMMENT: If you do not see DONE below TODO, there is something left that I wasn't sure or didn't know how to do.

Very good consistency with spacing in HTML and CSS, I like it.

Things that need to be improved are marked with TODO: comment above them.

TODO: Please change the file extension to .md. That is Markdown - https://en.wikipedia.org/wiki/Markdown. It is a standard in GitHub repositories and it can be easily parsed by GitHub, and offers some basic styling
DONE

TODO: In this file please add a brief description of the project. Maybe it would be useful to note down the folder and project structure.
DONE
TODO: You can delete the .gitignore file as it is empty and not used. Try to always keep only the things you use.
DONE

TODO: I would create a separate folder for CSS files and put reset.css and style.css in there
DONE

TODO: To organize your CSS further, you can utilize @import and decouple your CSS to the sections or logical parts: https://www.w3schools.com/cssref/pr_import_rule.asp
QUESTION: As far as I informed myself :), this results in additional http request for every @import statement. When does this become a problem and how do you decide when to do it this way or go with one css file? Or have separate css files and combine them some other way? Also, what would be reasonable logical parts in this case (separate sections?, header, content, footer?)? Let's talk about this.

TODO: I would rename the Photos folder to assets (mind the casing of the folder name, try to keep it always in lower case), as have images, but also logos, icons, etc. You might also have fonts and other assets in there as well. You can easily group all of them as assets used by the website.
DONE

TODO: Please add a .prettierrc configuration file for the automatic code formatting: https://prettier.io/
DONE

TODO: I noticed some images have duplicate versions JPG and PNG. Please keep only the ones you need to use and delete the rest.
DONE

TODO: If you haven't please run all the JPGs and PNGs through an optimizer tool such as: https://tinypng.com/ to reduce the filesize.
DONE

TODO: We need to improve the section background images placement. I will show you how.
