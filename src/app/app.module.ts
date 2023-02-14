import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/postList/postList.component';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
// import { PostEffects } from './store/post.effect';

import { rootReducer } from './stateStore/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from './pipe/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    SearchPipe,
    PostDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    NgxPaginationModule,
    MatToolbarModule
    
    // EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
