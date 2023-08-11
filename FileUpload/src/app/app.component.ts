import { Component } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formData = {
    name: '' as string,
    file: null
  };

  name = new FormControl('');

  constructor(private fileUploadService: FileUploadService){}

  handleFileInput(event: any) {
    this.formData.file = event.target.files[0];
  }

  submitForm() {
    if (!this.formData.file) {
      alert('Selecciona un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.name.value!);
    formData.append('file', this.formData.file);

    this.fileUploadService.uploadFile(formData).subscribe({
      next: (data) => (
        console.log('Archivo subido exitosamente', data)
        // Realiza cualquier lógica adicional necesaria después de subir el archivo
      ),
      error: (error) => (
        console.error('Error al subir el archivo', error)
        // Maneja el error de manera apropiada
      )
    }
    );

    // Limpia el formulario después del envío
    this.formData = {
      name: '',
      file: null
    };
  }
}
