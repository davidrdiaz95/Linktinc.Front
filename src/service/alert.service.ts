import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showAlert(text: string) {
    let cont = document.getElementById('alertContainer');
    if (cont != null)
    {
      while (cont.firstChild) {
          cont.removeChild(cont.firstChild);
      }
      cont.appendChild(document.createElement('br'));
      const aDiv = document.createElement('div');
      aDiv.classList.
          add('alert', 'alert-' + 
              "success", 'alert-dismissible', 
              'fade', 'show');
      aDiv.setAttribute('role', 'alert');
      aDiv.innerHTML = 
      '<strong>' + 
        text
      '!</strong> ' + text +
      `<button type="button"
          class="btn-close" data-bs-dismiss="alert"
          aria-label="Close">
      </button>`;
      cont.appendChild(aDiv);
      setTimeout(function () {
          aDiv.classList.remove('show');
      }, 3000);
    }
  }

  showAlertDanger(text: string) {
    let cont = document.getElementById('alertContainer');
    if (cont != null)
    {
      while (cont.firstChild) {
          cont.removeChild(cont.firstChild);
      }
      cont.appendChild(document.createElement('br'));
      const aDiv = document.createElement('div');
      aDiv.classList.
          add('alert', 'alert-' + 
              "danger", 'alert-dismissible', 
              'fade', 'show');
      aDiv.setAttribute('role', 'alert');
      aDiv.innerHTML = 
      '<strong>' + 
        text
      '!</strong> ' + text +
      `<button type="button"
          class="btn-close" data-bs-dismiss="alert"
          aria-label="Close">
      </button>`;
      cont.appendChild(aDiv);
      setTimeout(function () {
          aDiv.classList.remove('show');
      }, 3000);
    }
  }

  showAlertAlert(text: string) {
    let cont = document.getElementById('alertContainer');
    if (cont != null)
    {
      while (cont.firstChild) {
          cont.removeChild(cont.firstChild);
      }
      cont.appendChild(document.createElement('br'));
      const aDiv = document.createElement('div');
      aDiv.classList.
          add('alert', 'alert-' + 
              "warning", 'alert-dismissible', 
              'fade', 'show');
      aDiv.setAttribute('role', 'alert');
      aDiv.innerHTML = 
      '<strong>' + 
        text
      '!</strong> ' + text +
      `<button type="button"
          class="btn-close" data-bs-dismiss="alert"
          aria-label="Close">
      </button>`;
      cont.appendChild(aDiv);
      setTimeout(function () {
          aDiv.classList.remove('show');
      }, 3000);
    }
  }
}
