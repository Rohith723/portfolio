import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ Navbar} from './navbar/navbar';
import {Hero} from './hero/hero';
import { About } from './about/about';
import {Skills} from './skills/skills'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
