import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }

}

/*function HeaderController($scope: { isActive: (viewLocation: any) => boolean; }, $location: { path: () => any; }) { 
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path(); 
  }; 
}*/

