import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class BusinessContactService {
    constructor(private _http: HttpClient) {}

    getBusinessContactList(): Observable<any> {
        return this._http.get('http://localhost:4100/businesscontacts');
    }

    editBusinessContact(id: number, data: any): Observable<any> {
        return this._http.put(`http://localhost:4100/businesscontacts/${id}`, data);
    }

    deleteBusinessContact(id: number): Observable<any> {
        return this._http.delete(`http://localhost:4100/businesscontacts/${id}`);
    }
}