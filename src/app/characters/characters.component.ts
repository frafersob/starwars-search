import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[]; 

  selectedCharacter: Character;

  constructor(private characterService: CharacterService) { }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  ngOnInit() {
    this.getCharacters();
  }

}
