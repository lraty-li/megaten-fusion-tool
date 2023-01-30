import { Component, ChangeDetectionStrategy, Input, Inject } from '@angular/core';

import { PositionEdgesService } from '../../shared/position-edges.service';
import { SortedTableHeaderComponent, SortedTableComponent } from '../../shared/sorted-table.component';
import { COMPENDIUM_CONFIG } from '../constants';
import { CompendiumConfig, FusionPair } from '../models';

@Component({
  selector: 'tr.app-fusion-pair-table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <td class="price">{{ data.price }}</td>
    <td>{{ data.race1 }}</td>
    <td>{{ data.lvl1 | lvlToNumber }}</td>
    <td><a routerLink="{{ leftBaseUrl }}/{{ data.name1 }}">{{ data.name1 | translate }}</a></td>
    <td>{{ data.race2 }}</td>
    <td>{{ data.lvl2 | lvlToNumber }}</td>
    <td><a routerLink="{{ rightBaseUrl }}/{{ data.name2 }}">{{ data.name2 | translate }}</a></td>
  `
})
export class FusionPairTableRowComponent {
  @Input() data: FusionPair;
  @Input() leftBaseUrl: string;
  @Input() rightBaseUrl: string;
}

@Component({
  selector: 'tfoot.app-fusion-pair-table-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <tr>
      <th colspan="7" class="title">{{ title }}</th>
    </tr>
    <tr>
      <th rowSpan="2" [style.width.%]="10" [ngClass]="[ 'sortable', sortDirClass(1) ]" (click)="nextSortFunIndex(1)">{{ langEn ? 'Price' : '価格' }}</th>
      <th colspan="3" [style.width.%]="45">{{ leftHeader }}</th>
      <th colspan="3" [style.width.%]="45">{{ rightHeader }}</th>
    </tr>
    <tr>
      <th [ngClass]="[ 'sortable', sortDirClass(2) ]" (click)="nextSortFunIndex(2)">{{ langEn ? 'Race' : '種族' }}</th>
      <th [ngClass]="[ 'sortable', sortDirClass(3) ]" (click)="nextSortFunIndex(3)">Lvl</th>
      <th [ngClass]="[ 'sortable', sortDirClass(4) ]" (click)="nextSortFunIndex(4)">{{ langEn ? 'Name' : '悪魔名' }}</th>
      <th [ngClass]="[ 'sortable', sortDirClass(5) ]" (click)="nextSortFunIndex(5)">{{ langEn ? 'Race' : '種族' }}</th>
      <th [ngClass]="[ 'sortable', sortDirClass(6) ]" (click)="nextSortFunIndex(6)">Lvl</th>
      <th [ngClass]="[ 'sortable', sortDirClass(7) ]" (click)="nextSortFunIndex(7)">{{ langEn ? 'Name' : '悪魔名' }}</th>
    </tr>
  `
})
export class FusionPairTableHeaderComponent extends SortedTableHeaderComponent {
  @Input() title;
  @Input() leftHeader;
  @Input() rightHeader;
  @Input() langEn = true;
}

@Component({
  selector: 'app-fusion-pair-table',
  providers: [ PositionEdgesService ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <table appPositionSticky class="list-table">
        <tfoot #stickyHeader appColumnWidths
          class="app-fusion-pair-table-header"
          [langEn]="langEn"
          [title]="title"
          [leftHeader]="leftHeader"
          [rightHeader]="rightHeader"
          [sortFunIndex]="sortFunIndex"
          (sortFunIndexChanged)="sortFunIndex = $event">
        </tfoot>
      </table>
      <table class="list-table">
        <tfoot #hiddenHeader appColumnWidths
          class="app-fusion-pair-table-header"
          [langEn]="langEn"
          [title]="title"
          [leftHeader]="leftHeader"
          [rightHeader]="rightHeader"
          [style.visibility]="'collapse'">
        </tfoot>
        <tbody>
          <tr *ngIf="!rowData.length">
            <td colspan="7">{{ langEn ? 'No fusions found!' : '合体なし' }}</td>
          </tr>
          <tr *ngFor="let data of rowData.slice(0, currRow)"
            class="app-fusion-pair-table-row"
            [ngClass]="data.notes"
            [data]="data"
            [leftBaseUrl]="leftBaseUrl"
            [rightBaseUrl]="rightBaseUrl">
          </tr>
          <tr *ngIf="currRow < rowData.length">
            <th class="nav" colspan="7"
              [style.height.em]="2"
              (click)="currRow = currRow + incrRow">
              Show next {{ incrRow }} out of {{ rowData.length - currRow }}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class FusionPairTableComponent extends SortedTableComponent<FusionPair> {
  private _title = 'Ingredient 1 x Ingredient 2 = Result';

  @Input() leftHeader = 'Ingredient 1';
  @Input() rightHeader = 'Ingredient 2';
  @Input() leftBaseUrl = '../..';
  @Input() rightBaseUrl = '../..';
  @Input() initRow = 500;
  @Input() incrRow = 500;
  @Input() langEn = true;

  sortFuns: ((f1: FusionPair, f2: FusionPair) => number)[] = [];
  currRow = this.initRow;

  constructor(@Inject(COMPENDIUM_CONFIG) private config: CompendiumConfig) {
    super();
    const { raceOrder } = config;
    this.sortFuns = [
      (f1, f2) => f1.price - f2.price,
      (f1, f2) => f1.price - f2.price,
      (f1, f2) => (raceOrder[f1.race1] - raceOrder[f2.race1]) * 100 + f2.lvl1 - f1.lvl1,
      (f1, f2) => f1.lvl1 - f2.lvl1,
      (f1, f2) => f1.name1.localeCompare(f2.name1),
      (f1, f2) => (raceOrder[f1.race2] - raceOrder[f2.race2]) * 100 + f2.lvl2 - f1.lvl2,
      (f1, f2) => f1.lvl2 - f2.lvl2,
      (f1, f2) => f1.name2.localeCompare(f2.name2)
    ];
  }

  @Input() set title(title: string) {
    this._title = title;
    this.currRow = this.initRow;
  }

  get title(): string {
    return this._title;
  }


  getSortFun(sortFunIndex: number): (a: FusionPair, b: FusionPair) => number {
    return this.sortFuns[sortFunIndex];
  }
}
