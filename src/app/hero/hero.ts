import { Component, OnDestroy, OnInit, signal } from '@angular/core';

const ROLES = ['Full Stack Developer', '.NET Specialist', 'API Architect', 'Software Craftsman'];

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  readonly displayedRole = signal('');

  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

  private type(): void {
    const currentRole = ROLES[this.roleIndex];
    this.charIndex += this.isDeleting ? -1 : 1;
    this.displayedRole.set(currentRole.substring(0, this.charIndex));

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      this.isDeleting = true;
      typeSpeed = 2000;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % ROLES.length;
      typeSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }
}