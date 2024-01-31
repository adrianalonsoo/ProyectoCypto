import { ApplicationConfig } from '@angular/core';
import { provideRouter,withComponentInputBinding} from '@angular/router';

import { routes } from './app.routes';
import { importProvidersFrom } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding()),
    
  importProvidersFrom(HttpClientModule), 
  importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"tiendavue-f02e3","appId":"1:429397424570:web:1f30758f48b916fdd34583","storageBucket":"tiendavue-f02e3.appspot.com","apiKey":"AIzaSyBMKXj5XUgCpZO80bR2WV0JTKUJ7tKgONQ","authDomain":"tiendavue-f02e3.firebaseapp.com","messagingSenderId":"429397424570","measurementId":"G-4YEWZ8J7V9"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};


