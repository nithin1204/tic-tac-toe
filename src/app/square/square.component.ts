import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'app-square',
	templateUrl: './square.component.html',
	styleUrls: ['./square.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SquareComponent {

	@Input() value:'X' | 'O';

	constructor() { }

}
