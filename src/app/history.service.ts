import { Injectable } from '@angular/core';
     
@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  history: string[] = [];
 
  add(page: string) {
    this.history.push(page);
  }
 
  clear() {
    this.history = [];
  }
}