import {Component, ViewChild} from '@angular/core';
import {IonContent, ToastController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  toEmail = 'kaanpersonal@icloud.com';
  // Form data model
  solicitatieFormData = {
    fullName: '',
    email: '',
    phone: '',
    motivation: '',
  };

  contactFomData = {
    fullName: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(
    private http: HttpClient,
    private toastController: ToastController
  ) {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async onSolicitatieSubmit(form: any) {
    if (form.valid) {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('fullName', this.solicitatieFormData.fullName);
      formData.append('email', this.solicitatieFormData.email);
      formData.append('phone', this.solicitatieFormData.phone);
      formData.append('motivation', this.solicitatieFormData.motivation);

      try {
        const emailData = {
          service_id: 'service_4tcmuai',
          template_id: 'template_zi0msgi',
          user_id: 'itwEKfuzboweQv_cg',
          template_params: {
            fullName: this.solicitatieFormData.fullName,
            email: this.solicitatieFormData.email,
            phone: this.solicitatieFormData.phone,
            motivation: this.solicitatieFormData.motivation,
            toEmail: this.toEmail
          }
        };

        const response = await this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
          responseType: 'text'
        }).toPromise();

        if (response === 'OK') { // EmailJS returns "OK" on success
          const toast = await this.toastController.create({
            message: 'Sollicitatie succesvol verzonden!',
            duration: 2000,
            color: 'success'
          });
          toast.present();

          // Reset form
          form.resetForm();
          this.solicitatieFormData = {
            fullName: '',
            email: '',
            phone: '',
            motivation: '',
          };
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        // Show error message
        const toast = await this.toastController.create({
          message: 'Er is iets misgegaan. Probeer het later opnieuw.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    }
  }

  async onContactSubmit(form: any) {
    if (form.valid) {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('fullName', this.contactFomData.fullName);
      formData.append('email', this.contactFomData.email);
      formData.append('subject', this.contactFomData.subject);
      formData.append('message', this.contactFomData.message);

      try {
        const emailData = {
          service_id: 'service_4tcmuai',
          template_id: 'template_978t9sq',
          user_id: 'itwEKfuzboweQv_cg',
          template_params: {
            fullName: this.contactFomData.fullName,
            email: this.contactFomData.email,
            subject: this.contactFomData.subject,
            message: this.contactFomData.message,
            toEmail: this.toEmail,
          }
        };

        const response = await this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, {
          responseType: 'text'
        }).toPromise();

        if (response === 'OK') { // EmailJS returns "OK" on success
          const toast = await this.toastController.create({
            message: 'Sollicitatie succesvol verzonden!',
            duration: 2000,
            color: 'success'
          });
          toast.present();

          // Reset form
          form.resetForm();
          this.contactFomData = {
            fullName: '',
            email: '',
            subject: '',
            message: ''
          };
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        // Show error message
        const toast = await this.toastController.create({
          message: 'Er is iets misgegaan. Probeer het later opnieuw.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    }
  }

  protected readonly scroll = scroll;
}
