## Pennant

Creator: Paulo Brandon

Programmer: Dan Pray

Current Status: Super rough draft.... really really rough

[Live Demo](https://jpray.github.io/pennant-game/)

### Running locally

Step 1: Install global dependencies
```npm install -g webpack-dev-server```

Step 2: Install local dependencies
```npm install```

Step 3: Run the local server
```webpack-dev-server```

Step 4: Open your browser to http://localhost:8080

### Working on piece design/styles
The CSS for pieces (sword/spear/shield) is here:
src/game/pieces/pieces.css

The HTML for pieces (sword/spear/shield) is here inside of the render() methods:
src/game/pieces/shield.piece.js
src/game/pieces/spear.piece.js
src/game/pieces/sword.piece.js
