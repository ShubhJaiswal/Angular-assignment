import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/postList/postList.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { rootReducer } from './stateStore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchPipe } from './pipe/search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostDetailsComponent } from './components/post-details/post-details.component';

import { MatModule } from './mat.module';


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
    StoreDevtoolsModule.instrument(),
    BrowserAnimationsModule,
    NgxPaginationModule,    
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
