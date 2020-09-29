import { Component } from '@angular/core'
import { AdminDataAccessService } from '@bls007/admin/data-access'

@Component({
  template: `
    <h2>Intercom</h2>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input #payload type="text" (keydown.enter)="send(payload)" />
        </div>
        <div class="col-6">
          <pre>Intercom: {{ intercomSub$ | async | json }}</pre>
        </div>
      </div>
    </div>
  `,
})
export class AdminFeatureIntercomComponent {
  public intercomSub$ = this.data.intercomSub()
  constructor(private readonly data: AdminDataAccessService) {}

  send(input: HTMLInputElement) {
    this.data.intercomPub('TEST', 'INTERCOM', input.value).subscribe(() => {
      input.value = ''
    })
  }
}
