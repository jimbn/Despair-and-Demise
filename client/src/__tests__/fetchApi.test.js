import { render, screen } from '@testing-library/react';
const refApi = 'http://www.dnd5eapi.co/swagger/openapi.json';

let testHello = 'testHelloWorld'

test('fetch API', () => {
  fetch(refApi)
    .then(function(res){
      return res.json();
    })
});


testHello.append(document.getElementById(`testCode`));

// CHARACTER
// == Classes  (http://www.dnd5eapi.co/api/classes/{index})
  

// == Ability Score/Stats (http://www.dnd5eapi.co/api/ability-scores/{index})
    // Charisma, Consititution, Dexterity, Intelligence, Strength, Wisdom
    // Will be use to determine health/damage output/ resistence

// == spells/skills (http://www.dnd5eapi.co/api/classes/{index}/spells)
    // Pathing for skills
        // Character Creation > Class > when class choose, user profile will generate potential spells
        // i.e. backend: user choose wizard. player profile save http://www.dnd5eapi.co/api/classes/11/spells in provile
            // only those in that api will be accessible to the user

// Monsters
// == Monster (http://www.dnd5eapi.co/api/monsters/{index})

// Battle
// == Damage Types (http://www.dnd5eapi.co/api/damage-types/{index})
  // 1) Roll initiative (dice roll + Dex Modfier)
  // >> Turn based
  // *****
    // 1) Declare an Attack
    // 2) Determine bonuses & penalties (Advantage or Disadvantage)
    // 3) Attack Chance = roll + Attack Modifier
    // 4) Attack Chance vs Armor Check
        // If Attack Chance >= Armor Check = hit
        // Total Dmg = Damage die + Strength/Dex modifier (Spells just do dmg, no mod)
        // Remaining Health - Total Dmg = RemaingHealth
            // If RemaingHealth <= 0 = dies
  // >> Atttack Chance: Dice roll ---> Hit Chance has to be greater or equal to dodge
  // >> (Reciver's Armor + Health) - (Dealing Weapon dmg + Stats) = Reciever's remaining Health

// Items/Equipments
  // == Equipment/Item (http://www.dnd5eapi.co/api/equipment-categories/{index})
    // Use categories to filter items. Will have to do multiple fetch per items.
    // i.e. Fetch catgory (index) > fetch object based on the index within that category