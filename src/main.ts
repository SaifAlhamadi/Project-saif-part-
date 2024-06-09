// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { platformBrowser } from '@angular/platform-browser';
import { Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKdj1iFT1cpu-MNQ6VPIJ3VhSGkUJ5b4Q",
  authDomain: "delivery-app-8914a.firebaseapp.com",
  projectId: "delivery-app-8914a",
  storageBucket: "delivery-app-8914a.appspot.com",
  messagingSenderId: "743983252189",
  appId: "1:743983252189:web:0c18d4b5429fa908145134",
  measurementId: "G-89861RK76X" // Optional for Firebase JS SDK v7.20.0 and later
};

// Manually define a module
@NgModule({
  imports: [BrowserModule],
  // declarations, providers, etc.
})
class AppModule {}

// Define your custom bootstrap function
async function customBootstrap(compilerFactory: CompilerFactory) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const compiler: Compiler = compilerFactory.createCompiler();

  // Compile the manually defined AppModule
  const moduleFactory = await compiler.compileModuleAsync(AppModule);

  // Bootstrap the AppModule
  platformBrowser().bootstrapModuleFactory(moduleFactory)
    .catch(err => console.error(err));
}

// Create a CompilerFactoryProvider
const compilerFactory: CompilerFactory = platformBrowser().injector.get(CompilerFactory);

// Call your custom bootstrap function
customBootstrap(compilerFactory);






