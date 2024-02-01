![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)


# Kalvium Lab | Superwars Stage 4

Dustin and Lucus are best friends. They spend their weekends watching superhero series and playing superhero games. One Friday at school Mr.Hooper, their computer science faculty taught them HTML, CSS, and JavaScript. Dustin & Lucus realised they could build super cool super hero stuff using their knowledge. 

The subsequent weekend, they decided to do it. Lucus and Dustin are now all set to build something super cool.

Lucus always loves protagonists like most of us. But Dustin is quite crazy, he likes antagonists. So they decided to collect a bunch of their favorite Super Heroes and Super Villains names along with their pictures. Did they tell you about the game that they are gonna build? 

Okay, let us explain. They are going to facilitate the ultimate war between Super Heroes and Super Villains. As they are new to these technologies, they need a **you** to help them build this game.

### How to approach a lab:

Before starting have a look through the link below - to get an idea as how to approach the lab.

[How to approach a lab](https://docs.google.com/document/d/1SZ2Pryj6kAJj63wdB2_xVJgQHq6GddeZQ3nqDXYeaBA/edit?usp=sharing)

Along with a test page, you will also have a webpage -- which will display all your frontend work.

You can toggle between the webpage and testpage - by clicking on the respective buttons.


## Starter code

The `src/app.js` contains an array of 20 Super Heroes and Super-Villains. We are talking about the array of 20 _strings_ containing each Super Heroes and Super-Villains names. Here is one example of how the data is displayed:

```javascript
[
    "Spiderman"
]
```

### Progression 1: Rethink and reuse

Now, add `member variables` like id, name, strength, image and type to `class``Player` and then assign them appropriate values such that they _return a valid player object_.
*  `strength` can be generated from `getRandomStrength()` `member function`, which _returns a random strength_ from 1 to 100 .
* `image` can be sequential i.e. "images/super-"+(i+1)+".png"  
* `type` of player can alternating between hero and villain or your own logic
    ```javascript
    [
        {
            id:1,
            name:"Super Man",
            strength:100,
            img:"images/hero-1.png",
            type:"hero|villain"
        }
    ]
    ```

### Progression 2: Make it subtle

Dustin and Lucus want to display the players. So help them by creating a method `view()`, to accumulate HTML template as below and _return an HTML element_.
```JS
<div class="player" data-id="${players[i].id}">
    <img src="${players[i].image}">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>
```

### Progression 3: The Superwar

To begin the war there should be players, we can generate players by creating an object for the class `Superwars`, which should use `map` array method to loop through passed constant and _return `Player` Objects_. 

**NOTE:** Once you are done with Progression 3 -> you can uncomment "window.onload" section (last 3 lines of the file) - to see the output on the webpage. Keep in mind that if you uncomment it before defining superwars correctly, your test page won't load.

## Expected Output

![Superwars](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/superwars-oops.png)

Happy Coding Kalvium ❤️
