import pet1 from './../assets/img/pet1.png';
import pet2 from './../assets/img/pet2.png';
import pet3 from './../assets/img/pet3.png';
import pet4 from './../assets/img/pet4.png';
import pet5 from './../assets/img/pet5.png';
import pet6 from './../assets/img/pet6.jpg';

import dti from './../assets/img/dti.jpg';

import b1 from './../assets/img/barang1.jpg';
import b2 from './../assets/img/barang2.jpg';
import b3 from './../assets/img/barang3.jpg';
import b4 from './../assets/img/barang4.jpg';

export const projects = [
    {
        project: 'Pet finder app',
        sub: 'Thesis / Final Project',
        items: [
            'A native Android App and a tiny arduino device that helps track your pets when lost',
            'Google Maps Api was used for reading the coordinates and showing the location',
            'A Adafruit GPS with built-in GSM for sending back the coordinates to the application of the lost pets',
            'The tool used for the mobile application: Java (Android studio native android app)',
            'The tool used for the device: C language (Aruduino IDE) and some other basics of wirings',
        ],
        images: [
            pet1, pet2, pet3, pet4, pet5, pet6
        ],
        skills: [
            'C Programming', 'Arduino', 'JAVA', 'Google Maps API'
        ]
    },
    {
        project: 'Document Tracking System (DTI)',
        sub: 'Internship (2016)',
        items: [
            'A Simple Docment Tracking System for windows forms, under the Department of Trade in Industries, that help the bureau (FTSC Foreign Trade Service Corps) to track, add, edit documents. ',
            'A LAN Based system (capable of handling many users locally) ',
        ],
        images: [
            dti
        ],
        skills: [
            'C#', 'MS Access'
        ]
    },
    {
        project: 'Barangay Management System',
        sub: 'Software Engineering Subject',
        items: [
            'A simple management system for managing records such as peoples, report and etc for Brangay Office Ermita Manila. ',
            'A requirement for our subject Software Engineering, the objective is to automate all tasks that are manual ',
            'Create, edit, update of records, logs or history, user roles ',
            'Generating of reports or barangay clearances automately ',
        ],
        images: [
            b1, b2, b3, b4
        ],
        skills: [
            'Visual Basic', 'Local Xampp Server'
        ]
   }
]