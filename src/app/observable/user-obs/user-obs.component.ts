import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-obs',
  templateUrl: './user-obs.component.html',
  styleUrls: ['./user-obs.component.css']
})
export class UserObsComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
              private usersService: UsersService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }

}
