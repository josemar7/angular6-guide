import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
import { UsersService } from './observable/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
})
export class AppComponent implements OnInit {
  accounts:  {name: string, status: string}[] = [];
  user1Activated = false;
  user2Activated = false;

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
}
