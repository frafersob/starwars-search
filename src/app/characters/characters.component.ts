import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service'
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[]; 

  selectedCharacter: Character;

  constructor(private characterService: CharacterService,
              private historyService: HistoryService) { }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  ngOnInit() {
    this.getCharacters();
    this.historyService.add('List of all characters');
  }

}
