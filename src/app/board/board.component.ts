import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

	square: any = [];
	xIsNext: boolean = false;
	winner: string = '';

	constructor() { }

	ngOnInit(): void {
		const _this = this;
		_this.startNewGame();
	}

	startNewGame(): void {
		const _this = this;
		_this.square = Array(9).fill(null);
		_this.xIsNext = true;
		_this.winner = '';
	}

	get player() {
		return this.xIsNext ? 'X' : 'O';
	}

	makeMove(idx: number): void {
		const _this = this;

		if (!_this.square[idx]) {
			_this.square.splice(idx, 1, _this.player);
			_this.xIsNext = !_this.xIsNext;
		}

		_this.winner = _this.calculateWinner();
	}

	calculateWinner(): string {
		const _this = this;
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (
				_this.square[a] &&
				_this.square[a] === _this.square[b] &&
				_this.square[a] === _this.square[c]
			) {
				return _this.square[a];
			}
		}
		return null;
	}
}
