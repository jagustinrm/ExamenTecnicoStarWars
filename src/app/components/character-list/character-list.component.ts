import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];

  next = 'https://swapi.dev/api/people/';
  previous = 'https://swapi.dev/api/people/';
  constructor(private characterService: CharacterService) { }

ngOnInit(): void {
    this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters.results;
      this.next = characters.next;
      this.previous = characters.previous;
    });
  }


 changePage(url: string): void {
  this.characterService.getCharacters(url).subscribe(characters => {
    this.characters = characters.results;
    this.next = characters.next;
    this.previous = characters.previous;
  });
}

}