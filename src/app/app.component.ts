import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'test-app';

  profileData = {
    name: '',
    email: '',
    dob: '',
    permanent_address: '',
    postal_code: '',
    username: '',
    password: '',
    present_address: '',
    city: '',
    state: '', 
    picture: ''

  };

  ngOnInit(): void {
    // Load saved profile data if exists
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profileData = JSON.parse(savedProfile);
    }
  }

  saveProfile(): void {
    // Save profile data to local storage
    localStorage.setItem('userProfile', JSON.stringify(this.profileData));
    alert('Profile saved successfully!');
    console.log(this.profileData)
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.profileData.picture = e.target?.result as string);
      reader.readAsDataURL(input.files[0]);
    }
  }
}


