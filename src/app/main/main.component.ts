import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  characters: Character[] = [];
 
  constructor(private characterService: CharacterService) { }
 
  ngOnInit() {
    this.getCharacters();
  }
 
  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters.slice(0, 4));
  }

}
