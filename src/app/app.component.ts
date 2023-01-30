import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="currentGame">
      <table style="margin-left: auto; margin-right: auto; width: 1080px;">
        <thead>
          <tr>
            <th routerLink="home" class="nav" routerLinkActive="active" style="width: 20%;">
              <a routerLink="home">Game List (EN)</a>
            </th>
            <th routerLink="ja/home" class="nav" routerLinkActive="active" style="width: 20%;">
              <a routerLink="ja/home">ゲーム一覧 (日本語)</a>
            </th>
            <th class="nav external" style="width: 20%;">
              <div><a href="https://aqiu384.github.io/docs-megaten/how-to-use#save-offline">{{ langEn ? 'Save Offline' : 'オフラインセーブ' }}</a></div>
            </th>
            <th class="nav external" style="width: 20%;">
              <div><a [href]="'https://aqiu384.github.io/docs-megaten/how-to-use#' + currentGame">{{ langEn ? 'Help' : 'ヘルプ' }}</a></div>
            </th>
            <th class="nav external" style="width: 20%;">
              <div><a href="https://github.com/aqiu384/megaten-fusion-tool/issues">
                {{ langEn ? 'Report Issue' : 'バグレポート' }}
              </a></div>
            </th>
          </tr>
          <tr>
            <th colspan="5" class="title">{{ langEn ? 'Megami Tensei Fusion Tools' : '女神転生合体アプリ' }}</th>
          </tr>
        </thead>
      </table>
      <h4 *ngIf="loading" style="text-align: center;">
        {{ langEn ? 'Loading fusion tool... Reopen in a private session if tool does not load.' : 'Now Loading...' }}
      </h4>
      <ng-container *ngIf="!loading">
        <router-outlet></router-outlet>
      </ng-container>
      <div style="text-align: center;">
        <br>
        <a href="https://www.youtube.com/watch?v=b1KfNEPKncQ">
          https://www.youtube.com/watch?v=b1KfNEPKncQ
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  static readonly GAME_PREFIXES: { [game: string]: string } = {
    smtdsj: 'smtsj',
    p3fes: 'p3', p3aeg: 'p3', p3p: 'p3', p4g: 'p4', p5r: 'p5',
    dso: 'ds1', ds2br: 'ds2'
  };

  langEn = true;
  currentGame = 'none';
  loading = false;

  constructor(private router: Router, public translate: TranslateService) { }

  async ngOnInit() {
    this.router.events.subscribe(v => this.interceptNavigation(v));
    // 语言初始化(若未设置语言, 则取浏览器语言)
    let currentLanguage = await localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang()
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.setDefaultLang('en');
    this.translate.use(currentLanguage);
    // 记录当前设置的语言
    localStorage.setItem('currentLanguage', currentLanguage);
      // 设置语言
      
    }

    public selectLanguage(lang) {
      this.translate.use(lang);
      // 更新当前记录的语言
      localStorage.setItem('currentLanguage', lang)
    }

  interceptNavigation(event: Event) {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (event instanceof NavigationEnd) {
      this.loading = false;
      const currentGame = event.url.replace('/ja/', '/').split('/')[1];
      this.currentGame = AppComponent.GAME_PREFIXES[currentGame] || currentGame;
      this.langEn = !event.url.includes('/ja/');
      window.scrollTo(0, 0);
    } else if (
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
}
