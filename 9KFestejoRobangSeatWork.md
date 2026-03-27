# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

- Relative positioning allows for the elements to be at a fixed distance from the borders, sticking to a position in the website. The default meanwhile has said elements stuck directly to a position in the website.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

- The footer stay within the user's view, sticking to the border but not a fixed location. It goes along with the user's view such that it is visible at all times. It acts separate from relative as instead of sticking to the background we use the UI instead. 

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

- The absolute positioning places elements relative to the previous or nearest elements. It differes from fixed as it adds a specific location and spacing from other elements.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

- The z-index tells us the vertical stacking order of element. Here, the "notice" is on top of the main content. If we swap the z-index values, the top of the stack will be the element with the greatest z-value. Even if we make z-index = 1 in "content", the z-index = 2 us greater in "notice" (explaining why there was no visible change).

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * Try to change the position of .content to relative then to fixed. What do you observed each time?
    * What do you observe on about the effect of z-index on .notice and .content boxes?

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

        Static positioning is a position that is default to a certain location (often upper left) on the website UI. The relative meanwhile makes it such that the element is always visible in a fixed location as if it is separate from the main content of a website. Absolute gives us proper spacing between elements so that their positions aren't only determined by their relativity to the background but also to other elements. Lastly, the absolute positioning acts similar toa map where the parent element acts as its reference. 

    b. How does absolute positioning depend on its parent element?

         It references certain specifications to place elements based on the parent, acting separate from the mainline or general framing for the rest of the page (override command). It will fill in gaps/spaces from the original location as if there was no element placed there. 

    c. How do you differentiate sticky from fixed (you can research on sticky)?

         The difference between sticky and fixed is that fixed will always stay in that position regardless of where you scroll. It will always be relative to the viewport. As for sticky, it acts as a position: relative until you scroll past the element with sticky. Only after you scroll past it will it act as a "fixed" element. 

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

        Positioning is an important factor in helping emphasize certain aspects or information that may be important-- or the ones that want to be highlighted. For example, we can make a notice or an immediate error/problem fixed to the top of the page-- making it easy for the user to see. If ever some sources or works need to be cited, but there is too little space in an area (or not as relevant for a topic), we can put them in a relatively positioned element at the bottom of the page.