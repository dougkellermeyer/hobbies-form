import { Component, OnInit, Testability } from '@angular/core';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  posts:Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) { 
    
  }

  ngOnInit() {
    this.name = "Your Name";
    this.age = 25;
    this.email = 'test@test.com';
    this.address = {
      street: 'Hollywood Drive',
      city: 'Los Angeles, ',
      state: 'CA'
    }
    this.hobbies = ['Write code', 'Listen to music', 'Hike']
  }

  onClick() {
    this.hobbies.push('New Hobby');
    this.dataService.getPosts().subscribe((posts)=>{
      // console.log(posts);
      this.posts = posts;
    })
  }
  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
          this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
