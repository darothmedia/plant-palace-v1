# JS Game: Plant Palace

![Plant Palace Header](https://github.com/darothmedia/plant-palace/blob/main/img/plant-palace-logo.png "Plant Palace Logo")

### **Background**

In 2020, in the midst of a global pandemic, you decided to replace the void of physical human interaction with plants. A LOT of plants. Now, deep into 2021, your apartment has become cluttered with plant pots, plant shelves, hanging gardens, kitchen grow lights, and more. It’s gotten so bad that it’s hard to even walk to the kitchen (or, to translate for the New Yorkers among us: the mini fridge and microwave). Now, every time you need to move around your apartment, you need to move your plants out of the way! Why not get rid of some, you ask? Well, would you get rid of your human children? Absolutely not!


### **Overview**

The game is structured like the classic “Rush Hour” game, where you need to move cars out of the way in order to clear a path. 

Your apartment is a rectangular grid. The size of your apartment will change and get progressively smaller (more difficult) as the game progresses. The levels are:

* **OHIO:** Difficulty Easy. Large grid with just a tad too many plants.
* **LA:** Difficulty Medium. More compact grid with an overabundance of plants.
* **NYC:** Difficulty Hard. Your furniture and plants combine to take up the majority of the grid. (what floor space?!)

The user will be given several objectives in each level. An objective will look like this:

**I need to pee! Clear a path from the bedroom to the bathroom**

There will be lots of plants obstructing the path. Move them out of the way so your player avatar can safely move to the target location.


### **Functionality & MVPs**

In Plant Palace, users will be able to:



* Start, pause, and reset the game board
* Move plants on a top-down 2D grid (up down right left)
* Move a player on the grid (up down right left)
* Receive objectives & view the timer for the given objective

In addition, this project will include:



* Canvas objects:
    * Plants (top down)
    * Human avatar (top down)
    * Boundaries (walls, furniture)
* New game / restart buttons
* An about & Instructions modal
* A production README


### **Wireframes**

![Wireframe 1](https://github.com/darothmedia/plant-palace/blob/main/img/wires/plant-palace-wireframe.drawio.png "Wireframe 1")


### **Technologies, Libraries, APIs**

This project will implement the following technologies:



* Canvas API: to render the game board
* Webpack to bundle the source JS code
* Phaser 3 JS game framework for user input control

### **Implementation Timeline**

* **Friday & Weekend:** 
    * Setup project / generate basic canvas
    * Read Phaser documentation and begin implementation
    * Create board, plant, human, and furniture classes

* **Monday:**
    * Work on game logic
    * Get basic navigation on an object working

* **Tuesday:**
    * Finish game logic (1st level)
    * Work on refining the UI

* **Wednesday:**
    * UI / game element refinement
    * Scale 1st level to 2nd / 3rd levels (time permitting)

* **Thursday:**
    * Finishing touches
    * Push to production

### **Bonus Features**
* Additional difficulty levels
* New apartment layouts
* New objectives
* Multiple simultaneous objectives (two people need to move around in the space)


