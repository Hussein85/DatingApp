import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    @Output() cancelRegister = new EventEmitter();
    model: any = {};
    registerForm: FormGroup;
    bsConfig: Partial<BsDatepickerConfig>;  // For chaning the theme of datePicker. User 'Partial' to make all fields optional

    constructor(private authService: AuthService, private alertify: AlertifyService,
        private fb: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.createRegisterForm();

    }

    createRegisterForm() {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', Validators.required],
            knownAs: ['', Validators.required],
            dateOfBirth: [null, Validators.required],
            city: ['', Validators.required],
            country: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(14)]],
            confirmPassword: ['', Validators.required]
        }, { validator: this.passwordMatchValidator });
    }

    passwordMatchValidator(g: FormGroup) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
    }

    hasSpecificError(ctrlName: string, validationType: string) {
        return this.registerForm.get(ctrlName).hasError(validationType)
            && this.registerForm.get(ctrlName).touched;
    }

    hasGeneralErrors(ctrlName: string) {
        return this.registerForm.get(ctrlName).errors && this.registerForm.get(ctrlName).touched;
    }

    passwordMissmatch() {
        return this.registerForm.hasError('mismatch')
            && this.registerForm.get('confirmPassword').touched;
    }



    register() {
        /*

        this.authService.register(this.model).subscribe(() => {
            this.alertify.success('Registration successfull');
        }, error => {
            // console.log(error);
            this.alertify.error(error);
        });*/
        console.log(this.registerForm.value);
    }

    cancel() {
        this.cancelRegister.emit(false);
        console.log('Cancelled');
    }

}


