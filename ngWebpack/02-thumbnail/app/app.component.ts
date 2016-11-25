import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	styles:[``],
	template: `
		<h1>{{title}}</h1>
			<div class="container">
				<div class="row">
					<div *ngFor="let thumbnail of thumbnails">
						<panel-list [title]="thumbnail.title" [number]="thumbnail.number" [header]="thumbnail.header" [description]="thumbnail.description" [imageUrl]="thumbnail.imageUrl"></panel-list>
					</div> 
			</div>
		</div>
	`
})

export class AppComponent{
	title: string = 'Badge List';
	thumbnails =  [{
			title: 'JavaScript',
			number: 12,
			header: 'Learn JavaScript',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'Angular',
			number: 22,
			header: 'Learn Angular',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'JavaScript',
			number: 12,
			header: 'Learn JavaScript',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'Angular',
			number: 22,
			header: 'Learn Angular',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'JavaScript',
			number: 12,
			header: 'Learn JavaScript',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'Angular',
			number: 22,
			header: 'Learn Angular',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg'
		},{
			title: 'ReactJS',
			number: 15,
			header: 'Learn React',
			description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
			imageUrl: '/public/images/download.jpg',
			imageUrl2: 'http://lorempixel.com/200/200/sports/2'
		}];
}