import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme: string

  constructor() {
    this.currentTheme = localStorage.getItem('data-theme') || 'light'

    localStorage.setItem('data-theme', this.currentTheme)

    document.body.setAttribute('data-theme', this.currentTheme)
  }
  getCurrentTheme(): string {
    return this.currentTheme
  }
  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'

    localStorage.setItem('data-theme', this.currentTheme)

    document.body.setAttribute('data-theme', this.currentTheme)
  }

  getThemeVariables(): string {
    return this.currentTheme === 'light'
      ? '_variables-light'
      : '_variables-dark'
  }
}
