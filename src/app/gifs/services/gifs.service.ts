import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
    providedIn: 'root'
})
export class GifsService {

    public gifList: Gif[] = [];

    private _tagHistory: string[] = [];
    private apiKey: string = 'GGtoMwo0MovcCBTOvJTxagGyLgL3Rlul';
    private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

    constructor(private http: HttpClient) {
        this.loadLocalStorage()
     }

    get tagHistory() {
        return [...this._tagHistory]
    }

    private organizeHistory(tag: string): void {
        tag = tag.toLowerCase();
        if (this._tagHistory.includes(tag)) {
            this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
        }
        this._tagHistory.unshift(tag);
        this._tagHistory = this.tagHistory.splice(0, 10);
        this.saveLocalState()
    }

    private saveLocalState(): void {
        localStorage.setItem('tagHistory', JSON.stringify(this.tagHistory));
    }

    private loadLocalStorage(): void {
        if(!localStorage.getItem('tagHistory')) return;

        this._tagHistory = JSON.parse(localStorage.getItem('tagHistory')!)
        this.searchTag(this._tagHistory[0])
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return;

        this.organizeHistory(tag)

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
            .subscribe(resp => {
                this.gifList = resp.data;

            })
    }

}
