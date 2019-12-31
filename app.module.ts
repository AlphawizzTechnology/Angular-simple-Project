import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ChargersComponent } from './chargers/chargers.component';
import { ChargerlocationmapComponent } from './chargerlocationmap/chargerlocationmap.component';
import { UserComponent, alramdetailmodal1 } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserlocationmapComponent } from './userlocationmap/userlocationmap.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ReportsComponent } from './reports/reports.component';
import { NgxGaugeModule } from 'ngx-gauge';
import { FusionChartsModule } from 'angular-fusioncharts';
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Widgets, FusionTheme);

//import { ChartsModule } from 'ng2-charts';
import { LoginComponent, goToPanel } from './login/login.component';
import { SuperadminreportsComponent } from './superadminreports/superadminreports.component';
import { VendorComponent } from './vendor/vendor.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import {
  MatInputModule,
  MatNativeDateModule,
  MatRippleModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatDialogModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatCheckboxModule,
  MatButtonModule,
  MatRadioModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material';
import { SystemaggregatorLayoutComponent } from './layouts/systemaggregator-layout/systemaggregator-layout.component';
import { SuperadminLayoutComponent } from './layouts/superadmin-layout/superadmin-layout.component';
import { ZonalManagerLayoutComponent } from './layouts/zonal-manager-layout/zonalmanager-layout.component';
import { ChargingOperatorLayoutComponent } from './layouts/charging-operator-layout/chargingoperator-layout.component';
import { BatteryManufacturerLayoutComponent } from './layouts/battery-manufacturer-layout/batterymanufacturer-layout.component';
import { SuperadmindashboardComponent } from './superadmindashboard/superadmindashboard.component';
import { AgmDirectionModule } from 'agm-direction';
import { HubsComponent, hubsVehicleList } from './hubs/hubs.component';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ListVehicleComponent, alramdetailmodal2 } from './list-vehicle/list-vehicle.component';
import { CreateHubComponent } from './create-hub/create-hub.component';
import { HubdetailComponent } from './hubdetail/hubdetail.component';
import { SuperAdminCreatChargersComponent, fleetmanager, chargingOperator, zonalmanager } from './superadmin-creat-chargers/creat-chargers.component';
import { SuperAdminChargersComponent } from './superadminchargers/chargers.component';
import { SuperAdminChargerlocationmapComponent } from './superadminchargerlocationmap/chargerlocationmap.component';
import { SuperadminStationComponent } from './superadmin-station/station.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FaqComponent } from './faq/faq.component';
import { FaqlistComponent } from './faqlist/faqlist.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { SuperadminzoneComponent } from './superadminzone/superadminzone.component';

import { PiechartsdemoComponent } from './piechartsdemo/piechartsdemo.component';
import { NgxDonutChartModule } from 'ngx-doughnut-chart';
import { HighchartsChartModule } from 'highcharts-angular';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import * as highstock from 'highcharts/modules/stock.src';

import { DefaultImageDirective } from './core/directives/default-image.directive';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/token.interceptor';
import { AppgraphComponent } from './appgraph/appgraph.component';
import { MapPolygonComponent } from './demo/map-polygon/map-polygon.component';
import { PiechartsdemosuperadminComponent } from './piechartsdemosuperadmin/piechartsdemosuperadmin.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { SuperadminOrganizationComponent } from './superadmin/superadmin-organization/superadmin-organization.component';
import { UserProfileComponent, ChangePassword } from './user-profile/user-profile.component';
import { ComplaintComponent, ComplaintImages } from './complaint/complaint.component';
import { SystemaggregatorOrganizationComponent } from './system-aggregator/systemaggregator-organization/systemaggregator-organization.component';
import { SystemaggregatorDashboardComponent } from './system-aggregator/systemaggregator-dashboard/systemaggregator-dashboard.component';
import { SystemaggregatorVehicleComponent } from './system-aggregator/systemaggregator-vehicle/systemaggregator-vehicle.component';

import { SystemaggregatorVehicleUpdateComponent } from './system-aggregator/systemaggregator-vehicle/systemaggregator-vehicle-update/systemaggregator-vehicle-update.component';
import { CountryStateCityComponent, CreateCountry, CreateState, CreateCity } from './demo/country-state-city/country-state-city.component';

import { TestbatterydataComponent } from './demo/testbatterydata/testbatterydata.component';
import { TestchargerdataComponent } from './demo/testchargerdata/testchargerdata.component';
import { TestbatterymanufacturerComponent } from './demo/testbatterymanufacturer/testbatterymanufacturer.component';

import { ZonalManagerDashboardComponent } from './zonal-manager/zonal-manager-dashboard/zonal-manager-dashboard.component';
import { ZonalManagerChargerStationComponent } from './zonal-manager/zonal-manager-charger-station/zonal-manager-charger-station.component';

import { ChargingOperatorDashboardComponent } from './charging-operator/charging-operator-dashboard/charging-operator-dashboard.component';
import { ChargingOperatorChargingStationComponent } from './charging-operator/charging-operator-charging-station/charging-operator-charging-station.component';
import { ChargingOperatorChargingStationUpdateComponent } from './charging-operator/charging-operator-charging-station-update/charging-operator-charging-station-update.component';

import { BatteryManufacturerDashboardComponent } from './battery-manufacturer/battery-manufacturer-dashboard/battery-manufacturer-dashboard.component';
import { BatteryManufacturerBatteryListComponent } from './battery-manufacturer/battery-manufacturer-battery-list/battery-manufacturer-battery-list.component';
import { BatteryManufacturerVehicleListComponent } from './battery-manufacturer/battery-manufacturer-vehicle-list/battery-manufacturer-vehicle-list.component';
import { FleetmanagerChargingStationComponent } from './fleetmanager-panel/fleetmanager-charging-station/fleetmanager-charging-station.component';
import { BatteryManufacturerListComponent,BatteryManufacturerCreate,BatteryManufacturerList } from './battery-manufacturer/battery-manufacturer-list/battery-manufacturer-list.component';
import { BatteryManufacturerCreateComponent } from './battery-manufacturer/battery-manufacturer-create/battery-manufacturer-create.component';

@NgModule({
  imports: [

    HighchartsChartModule, ChartModule, NgxPaginationModule,
    AmChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxGaugeModule,
    MatInputModule,
    MatDatepickerModule,
    FusionChartsModule,
    MatNativeDateModule,
    MatRippleModule,
    MatCheckboxModule,
    NgSlimScrollModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    //ChartsModule,
    HttpClientModule,
    HttpModule,
    AgmDirectionModule,
    ComponentsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    RouterModule,
    AppRoutingModule,
    MatExpansionModule,
    FilterPipeModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    Ng4LoadingSpinnerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiELayFKOU9al5nZn5S9YZw059f167z8Q', //GEO Coding 
      libraries: ['places', 'drawing', 'geometry'],
    }),
    NgxDonutChartModule
  ],
  declarations: [
    DefaultImageDirective,
    AppComponent,
    AdminLayoutComponent,
    ChargersComponent,
    ChargerlocationmapComponent,
    UserComponent,
    DashboardComponent,
    UserlocationmapComponent,
    UserdetailsComponent,
    VehicleComponent,
    ReportsComponent,
    LoginComponent,
    goToPanel,
    SuperadminreportsComponent,
    VendorComponent,
    ForgetpasswordComponent,
    SystemaggregatorLayoutComponent,
    SuperadminLayoutComponent,
    ZonalManagerLayoutComponent,
    ChargingOperatorLayoutComponent,
    BatteryManufacturerLayoutComponent,
    SuperadmindashboardComponent,
    HubsComponent,
    hubsVehicleList,
    alramdetailmodal1,
    VendorCreateComponent,
    CreateVehicleComponent,
    ListVehicleComponent,
    CreateHubComponent,
    HubdetailComponent,
    alramdetailmodal2,
    ChangePassword,
    ComplaintImages,
    SuperAdminCreatChargersComponent,
    fleetmanager,
    chargingOperator,
    zonalmanager,
    SuperAdminChargerlocationmapComponent,
    SuperAdminChargersComponent,
    SuperadminStationComponent,
    FaqComponent,
    FaqlistComponent,
    SuperadminzoneComponent,
    PiechartsdemoComponent,
    AppgraphComponent,
    MapPolygonComponent,
    PiechartsdemosuperadminComponent,
    TestbatterydataComponent,
    VendorProfileComponent,
    TestchargerdataComponent,
    TestchargerdataComponent,
    SuperadminOrganizationComponent,
    UserProfileComponent,
    ComplaintComponent,
    SystemaggregatorOrganizationComponent,
    SystemaggregatorDashboardComponent,
    SystemaggregatorVehicleComponent,
    SystemaggregatorVehicleUpdateComponent,
    CountryStateCityComponent,
    CreateCountry,
    CreateState,
    CreateCity,
    TestbatterymanufacturerComponent,
    ZonalManagerDashboardComponent,
    ZonalManagerChargerStationComponent,
    ChargingOperatorDashboardComponent,
    ChargingOperatorChargingStationComponent,
    ChargingOperatorChargingStationUpdateComponent,
    BatteryManufacturerDashboardComponent,
    BatteryManufacturerBatteryListComponent,
    BatteryManufacturerVehicleListComponent,
    FleetmanagerChargingStationComponent,
    BatteryManufacturerListComponent,BatteryManufacturerCreate,BatteryManufacturerList,
    BatteryManufacturerCreateComponent,
  ],
  exports: [
    DefaultImageDirective
  ],
  entryComponents: [HubsComponent, hubsVehicleList, UserComponent, alramdetailmodal1, ListVehicleComponent, alramdetailmodal2, ChangePassword, ComplaintImages, goToPanel, fleetmanager, chargingOperator, zonalmanager, CreateCountry, CreateState, CreateCity,BatteryManufacturerCreate,BatteryManufacturerList],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [highstock] },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {
    provide: SLIMSCROLL_DEFAULTS,
    useValue: {
      alwaysVisible: false,
      gridOpacity: '0.2', barOpacity: '0.5',
      gridBackground: '#c2c2c2',
      gridWidth: '6',
      gridMargin: '2px 2px',
      barBackground: '#2C3E50',
      barWidth: '6',
      barMargin: '2px 2px'
    }
  },
    // {
    //   provide: MAT_DIALOG_DEFAULT_OPTIONS, 
    //   useValue: {
    //     hasBackdrop: false,
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
