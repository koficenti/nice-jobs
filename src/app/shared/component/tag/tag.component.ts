import {Component} from '@angular/core'

@Component({
  selector: 'Tag',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-gray-200 rounded-md w-fit px-2 py-1 mt-2">
      <ng-content></ng-content>
    </div>
  `,
  styles: ``,
})
export class TagComponent {}
