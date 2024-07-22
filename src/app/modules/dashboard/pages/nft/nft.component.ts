import { Component, OnInit } from '@angular/core';
import { Nft } from '../../models/nft';
import { NftAuctionsTableComponent } from '../../components/nft/nft-auctions-table/nft-auctions-table.component';
import { NftChartCardComponent } from '../../components/nft/nft-chart-card/nft-chart-card.component';
import { NftSingleCardComponent } from '../../components/nft/nft-single-card/nft-single-card.component';
import { NftDualCardComponent } from '../../components/nft/nft-dual-card/nft-dual-card.component';
import { NftHeaderComponent } from '../../components/nft/nft-header/nft-header.component';

@Component({
    selector: 'app-nft',
    templateUrl: './nft.component.html',
    standalone: true,
    imports: [
        NftHeaderComponent,
        NftDualCardComponent,
        NftSingleCardComponent,
        NftChartCardComponent,
        NftAuctionsTableComponent,
    ],
})
export class NftComponent implements OnInit {
  nft: Array<Nft>;

  constructor() {
    this.nft = [
      {
        id: 34356771,
        title: 'Some Good Black Shirts',
        creator: 'Hiro',
        instant_price: 4.2,
        price: 187.47,
        ending_in: '06h 52m 47s',
        last_bid: 0.12,
        image: './assets/images/chemise-noire-legere-pour-homme-unie-en-coton-gwenn-p-image-321827-grande.jpg',
        avatar: './assets/images/developer.png',
      },
      {
        id: 34356772,
        title: `Men's shoes`,
        price: 548.79,
        last_bid: 0.35,
        image: './assets/images/homme-shoes.jpg',
      },
      {
        id: 34356773,
        title: `Women's collection`,
        price: 234.88,
        last_bid: 0.15,
        image: './assets/images/pentalon-femmes.jpeg',
      },
    ];
  }

  ngOnInit(): void {}
}
