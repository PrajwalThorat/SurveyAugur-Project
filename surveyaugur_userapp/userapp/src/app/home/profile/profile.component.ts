import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // selectionOptions = ['CURRENT PLAN', 'FAQ & Help', 'LINKED ACCOUNT', 'ABOUT US'];

  profileImagePath: ArrayBuffer | string | null = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HrjlxizejA_sfkfPhIaAdv5Cxy6A-HGFzA&usqp=CAU";
  isEditing = false;

  profileForm = this.fb.group({
    username: [''],
    email: [''],
    role: [''],
    accessLevel: [''],
    organization: [''],
  });



  constructor(private fb: FormBuilder, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    this.profileForm.get('organization')!.disable();

    this.profileService.getProfile().subscribe(profileData => {
      this.profileForm.setValue(profileData);
    });
  }

  onEdit() {
    this.profileForm.get('organization')!.enable();
    this.isEditing = true;
  }

  onSave() {
    const data = this.profileForm.getRawValue();
    this.isEditing = false;
    this.profileForm.get('organization')!.disable();

    this.profileService.saveProfile(data).subscribe(profileData => {

    });

    console.log(data);
  }

  readURL(event: any) {
    console.log("Image uploaded");
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();

    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.profileImagePath = reader.result;
    };
  }

}
