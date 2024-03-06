import { Component,HostListener,ElementRef} from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import{DataserviceService}from'../dataservice.service'
import{HttpClientModule}from'@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListdataComponent } from '../listdata/listdata.component';
import {
 
  ViewChild,
  AfterViewInit
} from '@angular/core';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,ListdataComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
 
})
export class ListComponent {
  posts:any;
  fakedata:any;
  fakeparse:any;
 
  pageval:any
  @HostListener("window:scroll", ['$event'])
 
  scrollMe(event:any) {
    
    
   
    this.pageval=window.pageYOffset
    localStorage.setItem("scrollev", this.pageval);
  
  }
 
constructor(private service:DataserviceService,private _el: ElementRef)
{
  this.pageval=localStorage.getItem('scrollev')
  setTimeout(() => {
    window.scrollTo(100, this.pageval);
  }, 1000);
}
  ngOnInit()
{
 

  this.service.getlistdata().subscribe(response => {
    this.posts = response;
    this.fakedata=localStorage.getItem('favorite')
    this.fakeparse=JSON.parse(this.fakedata)
    if(this.fakeparse.length==this.posts.length){
      this.posts=this.fakeparse
    }
    
  });
}
isFavorite(i:any)
{
  
  console.log( this.posts[i].fav)
  if (this.posts[i].fav!=true) {
  this.posts[i].fav=true
  console.log('index',this.posts)
  localStorage.setItem("favorite", JSON.stringify(this.posts));
  }else{
    this.posts[i].fav=false
    console.log('index',this.posts)
    localStorage.setItem("favorite", JSON.stringify(this.posts));
  }
  
}


}
