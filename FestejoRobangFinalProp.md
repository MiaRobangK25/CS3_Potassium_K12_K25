# WDMotionNotionPotassiumFestejoRobang: FINAL MODIFICATION PROPOSAL 
> **By Pio Dominic Festejo (K12) and Amelia S. Robang (K25) of Batch 2029**

-- 
# CRUD process on saving data
> A design and narrative (purpose and how it is to be used) on how the data saved in the localStorage be updated and removed

## 1. Updated Pages
> 


### A. [PAGE] Case Analysis 
- We will add the content for the Opposition side/bench per argument.
- The buttons overall visual appeal will be improved (rescaling, coloring, etc.).
- Create
    
    Users will be asked to create/generate their own arguments as a drill for the other side, from the provided motion.
- Read

    The JS will read and process all of the arguments-- especially for the specific logical links and input from the user. 
- Update

    The website will update and put the input/arguments from the user side by side! This way, the debate can be much more visualized like an adjudicators actual tracking notes. 
- Delete

    If ever the user makes a mistake or they aren't pleased with their answer to their drill- they can delete it!

### B. [PAGE] Timekeeper
- CRUD implementation will be done by adding a records/history section for users' speech times. These can be kept or deleted by the user if desired. 
- Create

    Users will be able to start and stop the stopwatch as usual however, a JS function will be added such that every instance of the tool being stopped will be recorded. Information created here will include the date of the recording and time taken during the speech.
- Read

    A second JS function will be implemented to take in and process the information created in the first step. This will be stored as a variable and later outputted for the user/s to view. 
- Update

    A third JS function uses the details from the previous two steps to output the aforementioned information onto the UI more recent information will be shown at top of the list (in order to be uniform with other pages). This will necessitate the use of further HTML and CSS components. 
- Delete

    The final JS function will be a delete and confirmation process, where a simple button is placed next to the stored data for ease of record-keeping.

### C. [PAGE] Home
- We plan to introduce a new mechanic, the comment section. This will make use of new JS functions (CRUD) provided in the 3rd quarter, making the website more interactive, giving users the ability to chat to one another or directly with the developers.
- Create
    
    The user can create a comment, or type it into the space given.
- Read

    The JS reads the data, and interprets it into a string. This will then be pushed into a list of all comments.
- Update

    It will update on the website, from the latest comments being at the top-- and the first few being at the bottom. 
- Delete

    There will also be an option to delete comments, especially if they happen to be too many, or some are inputted by mistake.

### D. [PAGE] Speaker Roles
- The layout of the page will be updated and corrected such that information is easier to take in. This will be structured such that users can better differentiate (visually) between the formats discussed and the content found in each.

## 2. Miscellaneous Edits
>


### A. Page Layout
- All pages will be revised and adjusted for a more uniform look both for desktop and mobile usage (to be implemented by HTML layouting).

### B. Elements & Designs
- We will ensure that all elements, designs and common working parts are uniform (i.e. Navbar, Footer, etc.)

## 3. Wireframe
- We will use our previous wireframe (https://www.canva.com/design/DAG3LE99WS8/998p1OJ0SGgxVwIIIFOBWg/edit) as inspiration, though with the addition of the new comment sections which for the affected pages, will be placed roughly at the very bottom of each aforementioned page. 