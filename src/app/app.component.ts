import { Component } from '@angular/core';
import { MusicApiService } from './services/music-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMusic';

  constructor(private musicAPI: MusicApiService) {
    this.musicAPI.searchArtistsByGenre('rock', 1).subscribe(json => console.log(json));
    this.musicAPI.searchArtistsByName('iron', 1).subscribe(json => console.log(json));

    this.musicAPI.getArtistInfo('3798b104-01cb-484c-a3b0-56adc6399b80').subscribe(json => console.log(json));
    this.musicAPI.getAlbumsByArtist('3798b104-01cb-484c-a3b0-56adc6399b80').subscribe(json => console.log(json));
    this.musicAPI.getAlbumByArtist('fa737b11-03c9-4f18-bcf9-a3ed4101c7fb').subscribe(json => console.log(json));
  }
}
