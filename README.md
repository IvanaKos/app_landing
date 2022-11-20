#app_landing

[link]

Project type:
Landing page.
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
11. download app
12. footer
__________________

Folder structure:
```
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
```
_____________________
TODO: To organize your CSS further, you can utilize @import and decouple your CSS to the sections or logical parts: https://www.w3schools.com/cssref/pr_import_rule.asp
QUESTION: As far as I informed myself :), this results in additional http request for every @import statement. When does this become a problem and how do you decide when to do it this way or go with one css file? Or have separate css files and combine them some other way? Also, what would be reasonable logical parts in this case (separate sections?, header, content, footer?)? Let's talk about this.

TODO: Please add a .prettierrc configuration file for the automatic code formatting: https://prettier.io/
DONE

TODO: I noticed some images have duplicate versions JPG and PNG. Please keep only the ones you need to use and delete the rest.
DONE

TODO: We need to improve the section background images placement. I will show you how.
