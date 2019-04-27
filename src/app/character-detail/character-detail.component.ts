import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CharacterService }  from '../character.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  @Input() character: Character;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getCharacter();
    //Check if this is the full details page or being called from the All Characters page
    if(this.route.snapshot.paramMap.get('id')){
      this.historyService.add('Character Details of Character ' + this.route.snapshot.paramMap.get('id'))
    };
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.characterService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }

}
