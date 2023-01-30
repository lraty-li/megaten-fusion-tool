import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FusionDataService } from '../fusion-data.service';

@Component({
  selector: 'app-p4-compendium',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-demon-compendium
      [ngClass]="appCssClasses"
      [hasSettings]="false"
      [mainList]="'persona'"
      [otherLinks]="otherLinks">
    </app-demon-compendium>
  `,
  styleUrls: [ './compendium.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class CompendiumComponent {
  
  otherLinks: { title: string, link: string }[];
  appCssClasses: string[];

  constructor(fusionDataService: FusionDataService, public translate: TranslateService,) {
    //TODO lang selector;check if is golden
    this.translate.use('zh-hans-p4g');
    this.appCssClasses = fusionDataService.compConfig.appCssClasses;
    this.otherLinks = [{ title: 'Shadow List', link: 'shadows' }];

    if (fusionDataService.appName.includes('Golden')) {
      this.otherLinks.push({ title: 'Recipe Generator', link: 'recipes' });
    }
  }
}
