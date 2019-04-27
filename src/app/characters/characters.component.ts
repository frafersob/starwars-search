import { Component, OnInit } from '@angular/core';
import { CHARACTERS } from '../mock-characters'
import { Character } from '../character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters = CHARACTERS; 

  selectedCharacter: Character;

  constructor() { }

  onSelect(character: Character): void{
    this.selectedCharacter = character;
  }

  ngOnInit() {
  }

}
