import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  posts:any;
  fakedata:any;
  fakeparse:any;
  ngOnInit()
{
  
    this.fakedata=localStorage.getItem('favorite')
    this.fakeparse=JSON.parse(this.fakedata)
   
      this.posts=this.fakeparse
   
}
}
