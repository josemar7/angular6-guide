import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { UsersService } from './observable/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
    input.ng-invalid.ng-touched {
      border: 1px solid red;
    }
  `]
})
export class AppComponent implements OnInit {
  accounts:  {name: string, status: string}[] = [];
  user1Activated = false;
  user2Activated = false;
  @ViewChild('f') signup: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  constructor(private accountsService: AccountsService,
              private usersService: UsersService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    this.usersService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activated = true;
        } else if (id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signup.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });
    this.signup.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signup.value.userData.username;
    this.user.email = this.signup.value.userData.email;
    this.user.secretQuestion = this.signup.value.secret;
    this.user.answer = this.signup.value.questionAnswer;
    this.user.gender = this.signup.value.gender;

    this.signup.reset();
  }

}
