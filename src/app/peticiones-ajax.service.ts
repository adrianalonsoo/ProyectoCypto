import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from '@angular/fire/auth';
import { signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PeticionesAJAXService {
  datosAPI:any[]=[];
  firestore = inject(Firestore);
  datosFB:any[]=[];
  logueado:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }

  peticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((datos:any)=>
    {
      console.log(datos.coins);
      this.datosAPI=datos.coins;
    });
  }

  buscarMoneda(moneda:string){
    return this.http.get(`https://api.coingecko.com/api/v3/search?query=`+moneda)
  }

  getCoinDetalle(id:any){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  }

  obtenerDatosFirestore(){
    getDocs(collection(this.firestore,"prueba")).then((response)=>
    {
      this.datosFB=response.docs.map(doc=>doc.data());
      console.log(this.datosFB);
    });
  }

  
  iniciarSesion(){
    const auth=getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    this.router.navigate(['/monedas']);
    console.log("inicio sesion");
    this.logueado=true;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }

   GitHubInicio(){
    const auth=getAuth();
    const provider = new GithubAuthProvider();
    
    signInWithPopup(auth, provider)
    
  .then((result) => {
    this.logueado=true;
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
}
}
