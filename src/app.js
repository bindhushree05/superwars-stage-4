const PLAYERS = [
  'Spiderman',
  'Captain America',
  'Wonderwoman',
  'Popcorn',
  'Gemwoman',
  'Bolt',
  'Antwoman',
  'Mask',
  'Tiger',
  'Captain',
  'Catwoman',
  'Fish',
  'Hulk',
  'Ninja',
  'Black Cat',
  'Volverine',
  'Thor',
  'Slayer',
  'Vader',
  'Slingo'
];

// Player Class
class Player {
  constructor(id, name, type, image) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.selected = false;
    this.strength = this.getRandomStrength();
    this.image = `images/super-${id + 1}.png`;
  }

  getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };

  view = () => {
    let player = document.createElement('div');
    player.classList.add('player');
    player.setAttribute('data-id', this.id);
    if (this.selected) player.classList.add('selected');
    let image = document.createElement('img');
    image.setAttribute('src', this.image);
    let name = document.createElement('div');
    name.textContent = this.name;
    let strength = document.createElement('div');
    strength.textContent = this.strength;
    strength.className = 'strength';
    player.append(image, name, strength);

    return player;
  };
}

// Superwar Class
class Superwar {
  constructor(players) {
    this.players = players.map((player, i) => {
      let type = i % 2 == 0 ? 'hero' : 'villain';
      return new Player(i, player, type);
    });
    this.score = [0, 0];
    this.addClickEventToPlayers(); // Call the method to add click event listeners
  }

  viewPlayers = () => {
    this.renderPlayers('heroes', 'hero');
    this.renderPlayers('villains', 'villain');
  };

  renderPlayers = (elementId, type) => {
    let team = document.getElementById(elementId);
    team.innerHTML = '';
    let fragment = this.buildPlayers(type);
    team.append(fragment);
  };

  buildPlayers = (type) => {
    let fragment = document.createDocumentFragment();
    this.players
      .filter((player) => player.type === type)
      .forEach((player) => fragment.append(player.view()));
    return fragment;
  };

  // Method to handle player selection
  handleSelection = (target) => {
    let selectedId = parseInt(target.getAttribute('data-id'));
    this.players.forEach((player) => {
      player.selected = player.id === selectedId;
    });
    this.viewPlayers(); // Re-render players after selection
  };

  // Method to add click event listeners to players
  addClickEventToPlayers = () => {
    Array.from(document.getElementsByClassName('player')).forEach((elem) => {
      elem.addEventListener('click', (e) => {
        this.handleSelection(e.target);
      });
    });
  };
}

window.onload = () => {
  const superwar = new Superwar(PLAYERS);
  superwar.viewPlayers();
};
