export const Main = {
  templateUrl: './main.component.html',
  bindings: {},
  controller: MainCtrl,
  controllerAs: 'vm'
};

function MainCtrl() {
  const vm = this;

  vm.title = 'hallo';
}


import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
@Directive({
  selector: 'main'
})
export class MainDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('main', elementRef, injector);
  }
}
