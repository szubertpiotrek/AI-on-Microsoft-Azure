import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Keys} from '../../../keys';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit{

  @Output() response = new EventEmitter<any>();
  public loading = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

  }

  files: any = [];

  uploadFile(event) {
    this.loading = true;
    if (this.loading) {
      const element = event[0];

      const url = Keys.endpoint;
      const header = Keys.headerKey;
      const contentType = 'application/octet-stream';

      const headers = new HttpHeaders({'Content-Type': contentType, 'Prediction-Key': header});

      const reader = new FileReader();
      reader.readAsArrayBuffer(element);
      reader.onload = () => {
        this.http.post(url, reader.result, { headers } ).subscribe((res) => {
          this.files.push(element.name);
          this.response.emit(res);
          this.loading = false;
        });
      };
      // this.http.post()
    }
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
  }
}
