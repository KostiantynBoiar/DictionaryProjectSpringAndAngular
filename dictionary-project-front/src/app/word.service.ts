import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Word} from "./word";

@Injectable({
  providedIn: 'root'
})

export class WordService{
  private apiServerUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getWords(): Observable<Word[]>{
    return this.http.get<Word[]>(`${this.apiServerUrl}/word/all`);
  }
  public addWord(word: Word): Observable<Word>{
    return this.http.post<Word>(`${this.apiServerUrl}/word/add`, word);
  }
  public updateWord(word: Word): Observable<Word>{
    return this.http.put<Word>(`${this.apiServerUrl}/word/update`, word);
  }
  public deleteWord(wordId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/word/delete/${wordId}`);
  }
}
