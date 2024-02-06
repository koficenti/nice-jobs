import {Component} from '@angular/core'
import {InputComponent} from '../../shared/component/input/input.component'
import {ButtonComponent} from '../../shared/component/button/button.component'
import {FooterComponent} from '../../shared/component/footer/footer.component'

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputComponent, ButtonComponent, FooterComponent],
  template: `
    <div class="w-full h-screen flex justify-center place-items-center">
      <div
        class="bg-white shadow min-w-[90%] md:min-w-[420px] w-1/4 h-fit py-10 px-10 flex flex-col gap-5 text-md justify-center text-sm"
      >
        <h1 class="font-medium text-center text-[12pt]">Register</h1>
        <h3>Email:</h3>
        <TextInput placeholder="Email" class="w-full"></TextInput>
        <h3>Password:</h3>
        <TextInput placeholder="Password" class="w-full"></TextInput>
        <h3>Repeat Password:</h3>
        <TextInput placeholder="Password" class="w-full"></TextInput>
        <Button>Register</Button>
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: ``,
})
export class RegisterComponent {}
