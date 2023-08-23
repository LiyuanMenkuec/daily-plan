import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-the-content',
  templateUrl: './the-content.component.html',
  styleUrls: ['./the-content.component.css']
})




export class TheContentComponent {

  username='';
  constructor(private route : ActivatedRoute){}
  
  ngOnInit(){
    this.username=this.route.snapshot.params['name'];
  }

}
