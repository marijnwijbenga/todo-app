# Todo App made with Angular

Version: 1.0.0  
Author: Marijn Wijbenga  
Contact: m.wijbenga@outlook.com  
Date completed: 01/09/2021

## Livelink

https://projects.marijnwijb.nl/toodoo/

# Description

This is a toodoo app with a focus on color customizability. The core focus of this app is that I can use it as my go to todo list app, and thereby other people in the future aswell.

### Explanation
For this project I wanted to focus on customizability of the user interface. Users can select a color-palette for each list and they can switch between dark and light mode, so they can edit the app to look like they want to. For this app I combined the features of several apps that are most useful to me, from Microsoft To-Do, TickTick and Habitica. The todo lists are split in Tasks and Dailies, the first being just simple one time recurring tasks the latter being things you do repetivively, and those will have some more customization features like a recurrence and a start-date.

### Concepts used
Since this project has several stages on the roadmap, it is important to make the app as modular as possible, to ensure proper expandibility. Other than that, the focus lies on working with CSS classes as themes and proper UI/UX and responsiveness.


### Features V1.0.0
- CRUD Tasks
- CRUD Dailies with recurrence (mo-fri)
- Flag item as important (important items go to top)
- Drag item to arrange order
- Set item start date
- Filter dailies by due/not due/all
- Show/hide completed Tasks
- Select a color palette per list view
- Switch between dark/light mode
- Have checklists in items (tasks & dailies)

### Roadmap
Version 2.0: Add data storage API  
Version 3.0: Add user profile with gamification elements (completed tasks = leveling character).  
Version 4.0: Add registration + login API and release to public.  
Version 5.0: Add purchasable cosmetics.



## Run local dev server
1. clone this project
2. cd memory-cards
3. npm install
4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
   The app will automatically reload if you change any of the source files.
