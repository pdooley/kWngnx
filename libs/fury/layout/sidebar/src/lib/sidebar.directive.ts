import { AfterViewInit, Directive, HostBinding, Inject, Input, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from '../../../../core/src/lib/shared/component-destroyed';
import { BackdropDirective } from '../../../../core/sidebar/sidebar.directive';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[furySidebar],fury-sidebar',
  host: {
    class: 'fury-sidebar'
  },
  exportAs: 'furySidebar'
})
export class SidebarDirective implements AfterViewInit, OnDestroy {

  @Input() position: 'left' | 'right' = 'left';
  @Input() sidebar: BackdropDirective;
  @Input() invisibleBackdrop: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  private _opened: boolean;

  get opened() {
    return this._opened;
  }

  @Input()
  @HostBinding('class.open')
  set opened(open: boolean) {
    this._opened = open;
    open ? this.showBackdrop() : this.hideBackdrop();
  }

  @HostBinding('class.position-left')
  get positionLeft() {
    return this.position === 'left';
  }

  @HostBinding('class.position-right')
  get positionRight() {
    return this.position === 'right';
  }

  ngAfterViewInit(): void {
    this.sidebar.closed.pipe(
      takeUntil(componentDestroyed(this))
    ).subscribe(() => this.close());
  }

  showBackdrop() {
    if (this.sidebar) {
      if (this.invisibleBackdrop) {
        this.sidebar.showInvisible();
      } else {
        this.sidebar.show();
      }

      this.enableScrollblock();
    }
  }

  hideBackdrop() {
    if (this.sidebar) {
      this.sidebar.hide();
    }

    this.disableScrollblock();
  }

  enableScrollblock() {
    this.document.body.classList.add('fury-scrollblock');
  }

  disableScrollblock() {
    this.document.body.classList.remove('fury-scrollblock');
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  ngOnDestroy(): void {}
}
