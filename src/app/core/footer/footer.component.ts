import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component ({
    selector: 'ap-footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{
    
    constructor(private userService: UserService) {
    }

    user$: Observable<User>;
    ngOnInit(): void {
        this.user$ = this.userService.getUser();
    }
}