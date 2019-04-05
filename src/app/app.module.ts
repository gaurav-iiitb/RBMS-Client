
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarCmpComponent } from './navbar-cmp/navbar-cmp.component';
import { LoginPortalComponent } from './login-portal/login-portal.component';
import { HttpClientModule} from '@angular/common/http';
import { MatTabsModule, MatTooltipModule, MatSlideToggle, MatButton, MatButtonToggleModule, MatIconModule, MatFormFieldModule, MatInputModule, MatOption, MatOptionModule, MatSelectModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RuleDesignComponent } from './rule-design/rule-design.component';
import { RuleDesignService } from './services/ruledesign.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AdminViewComponent } from './admin-view/admin-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarCmpComponent,
    LoginPortalComponent,
    RuleDesignComponent,
    CreateUserComponent,
    AccountDetailsComponent,
    AdminViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatRadioModule,
    RouterModule.forRoot([
      {
        path: 'login-portal',
        component: LoginPortalComponent
      },
      {
        path: 'login-portal/rule-design',
        component: RuleDesignComponent
      }, {
        path: 'login-portal/admin-view',
        component: AdminViewComponent 
      },
      {
        path: 'login-portal/admin-view/create-user',
        component: CreateUserComponent
      },
      {
        path: 'login-portal/account-details',
        component: AccountDetailsComponent
      },
      {
        path: 'login-portal/admin-view/account-details',
        component: AccountDetailsComponent
      }
    ])
  ],
  providers: [RuleDesignService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
