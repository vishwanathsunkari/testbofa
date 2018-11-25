import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css']
})
export class OnBoardingComponent implements OnInit {
process = [
  'Client Interview will be held on the particular technology which you learnt while during the training.',
  'After that you will get a mail from BOFA manager saying , You are mapped to so and so project.',
  'Now for BGC (Background Check) you need to upload the BGC related documents in the particular site and you will get all the information about the uploading documents',
  'For completion of BGC check , will take atleast 2 months',
  'MeanWhile BGC process going on , you will recieve mails on Field glass registration',
  'Go to particular Field glass site and register yourself and note down the unique id which is generated',
  'After completing the Field glass registration , you will recieve an email with the information of NBK ID and Person Number also cubicle information for the desktop allocation',
  'When you recieve NBK id information,   within 5 days need to change the password for the desktop and NBK id too',
  'for that you need to raise an ARM request for BOFA ODC access and desktop allocation',
  'BOFA ODC access you will get within a day but desktop allocation will take time',
  'Once you get the ODC access contact someone with the help of your manager and get help to complete the domain password change',
  'And also change the NBK ID password calling support for the first time',
  'Complete the trainings and assessments with the help of contact person in the BOFA ODC',
  'Raise request for MailBox and also Colloborative Services (IM)',
  'Till then you will get your desktop allocated , now use your machine to follow up on these tasks.'
];
  constructor() { }

  ngOnInit() {
  }

}
