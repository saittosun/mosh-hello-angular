import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  book = {
    title: 'the angular',
    rating: 1.95778,
    students: 52147,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };

  // tslint:disable-next-line:max-line-length
  text = 'lorem sfdklqsdfq  qsdfqsdlkmfjklqsdflq ^q skdfjqlkdsfjqkfdkqdfjkq qsdfjqksdlf q qskdlfklqd qklf klfq sdfjqsdklfj q lkfqlskdf qkl qksdjf qiosdfj qlksdfjqios fqmsd fqis dfqkf qfqklsdf qmli qsdfjqis dfqmlkds fqldksf';
  authors;
  isActive = false;
  isStyled = false;
  password = 'me@gmail.com';

  onSave($event) {
    $event.stopPropagation();
    console.log('button was clicked!!', $event);
  }

  onKeyUp($event) {
    console.log('enter was pressed!!');
    console.log($event.target.value);
  }

  // template variables
  onVariable(email) {
    console.log(email);
  }

  onTwoWayBinding() {
    console.log(this.password);
  }

  getAuthorAlternative() {
    return ['a', 'b', 'c'];
  }
  constructor(authorsService: AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
  }

}
