import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from './servers-routing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers-routing',
  templateUrl: './servers-routing.component.html',
  styleUrls: ['./servers-routing.component.css']
})
export class ServersRoutingComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersRoutingService,
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
