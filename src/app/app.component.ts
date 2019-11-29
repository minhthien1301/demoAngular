import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nameFilter: string;
  public sortBy: string;
  public sortValue: number;
  public products: any[] = [
    {
      id: 1,
      name: 'Thiện',
      arress: 'Huế'
    },
    {
      id: 2,
      name: 'Phước',
      arress: 'Quảng Trị'
    },
    {
      id: 3,
      name: 'Lô',
      arress: 'Núi'
    }
  ];
  onSort(col: string) {
    console.log(col);

    this.sortBy = col;
  }
}
