import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers-routing.service';


@Component({
  selector: 'app-server-routing',
  templateUrl: './server-routing.component.html',
  styleUrls: ['./server-routing.component.css']
})
export class ServerRoutingComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersRoutingService) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }

}
