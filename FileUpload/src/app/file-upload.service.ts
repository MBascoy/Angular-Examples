import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    // Reemplaza 'URL_DEL_SERVIDOR' con la URL real del servidor
    const url = 'http://127.0.0.1:5000/upload';

    return this.http.post(url, formData);
  }
}
