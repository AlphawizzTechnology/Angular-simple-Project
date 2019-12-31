import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SuperadmindashboardComponent } from './superadmindashboard/superadmindashboard.component';
import { ZonalManagerLayoutComponent } from './layouts/zonal-manager-layout/zonalmanager-layout.component';
import { ChargingOperatorLayoutComponent } from './layouts/charging-operator-layout/chargingoperator-layout.component';
import { BatteryManufacturerLayoutComponent } from './layouts/battery-manufacturer-layout/batterymanufacturer-layout.component';
import { SystemaggregatorLayoutComponent } from './layouts/systemaggregator-layout/systemaggregator-layout.component';
import { SuperadminLayoutComponent } from './layouts/superadmin-layout/superadmin-layout.component';
import { ChargersComponent } from './chargers/chargers.component';
import { ChargerlocationmapComponent } from './chargerlocationmap/chargerlocationmap.component';

import { SuperAdminChargersComponent } from './superadminchargers/chargers.component';
import { SuperAdminChargerlocationmapComponent } from './superadminchargerlocationmap/chargerlocationmap.component';

import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserlocationmapComponent } from './userlocationmap/userlocationmap.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component'
import { SuperadminreportsComponent } from './superadminreports/superadminreports.component';
import { VendorComponent } from './vendor/vendor.component'
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component'
import { HubsComponent } from './hubs/hubs.component';
import { HubdetailComponent } from './hubdetail/hubdetail.component';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { CreateHubComponent } from './create-hub/create-hub.component';
import { SuperAdminCreatChargersComponent } from './superadmin-creat-chargers/creat-chargers.component';
import { SuperadminStationComponent } from './superadmin-station/station.component';
import { FaqComponent } from './faq/faq.component';
import { FaqlistComponent } from './faqlist/faqlist.component';
import { SuperadminzoneComponent } from './superadminzone/superadminzone.component';
import { PiechartsdemoComponent } from './piechartsdemo/piechartsdemo.component';
import { PiechartsdemosuperadminComponent } from './piechartsdemosuperadmin/piechartsdemosuperadmin.component';
import { AppgraphComponent } from './appgraph/appgraph.component';
import { VendorProfileComponent } from './vendor/vendor-profile/vendor-profile.component';
import { CountryStateCityComponent } from './demo/country-state-city/country-state-city.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SuperadminOrganizationComponent } from './superadmin/superadmin-organization/superadmin-organization.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FleetmanagerChargingStationComponent } from './fleetmanager-panel/fleetmanager-charging-station/fleetmanager-charging-station.component';
// system integrater
import { SystemaggregatorOrganizationComponent } from './system-aggregator/systemaggregator-organization/systemaggregator-organization.component';
import { SystemaggregatorDashboardComponent } from './system-aggregator/systemaggregator-dashboard/systemaggregator-dashboard.component';
import { SystemaggregatorVehicleComponent } from './system-aggregator/systemaggregator-vehicle/systemaggregator-vehicle.component';
// Zonal Manager 
import { ZonalManagerDashboardComponent } from './zonal-manager/zonal-manager-dashboard/zonal-manager-dashboard.component';
import { ZonalManagerChargerStationComponent } from './zonal-manager/zonal-manager-charger-station/zonal-manager-charger-station.component';
// Charging Operator
import { ChargingOperatorDashboardComponent } from './charging-operator/charging-operator-dashboard/charging-operator-dashboard.component';
import { ChargingOperatorChargingStationComponent } from './charging-operator/charging-operator-charging-station/charging-operator-charging-station.component';
import { ChargingOperatorChargingStationUpdateComponent } from './charging-operator/charging-operator-charging-station-update/charging-operator-charging-station-update.component';

// Battery Manufacturer

import { BatteryManufacturerDashboardComponent } from './battery-manufacturer/battery-manufacturer-dashboard/battery-manufacturer-dashboard.component';
import { BatteryManufacturerBatteryListComponent } from './battery-manufacturer/battery-manufacturer-battery-list/battery-manufacturer-battery-list.component';
import { BatteryManufacturerVehicleListComponent } from './battery-manufacturer/battery-manufacturer-vehicle-list/battery-manufacturer-vehicle-list.component';
import { BatteryManufacturerListComponent } from './battery-manufacturer/battery-manufacturer-list/battery-manufacturer-list.component';
// test data urls
import { TestbatterydataComponent } from './demo/testbatterydata/testbatterydata.component';
import { TestchargerdataComponent } from './demo/testchargerdata/testchargerdata.component';
import { TestbatterymanufacturerComponent } from './demo/testbatterymanufacturer/testbatterymanufacturer.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  { path: 'login', component: LoginComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  // Fleet Manager Routing
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'admin', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule' },
      { path: 'user', component: UserComponent },
      { path: 'dashboard', component: PiechartsdemoComponent },
      { path: 'hubslist', component: HubsComponent },
      { path: 'hubdetail', component: HubdetailComponent },
      { path: 'chargers', component: ChargersComponent },
      { path: 'chargerlocationmap', component: ChargerlocationmapComponent },
      { path: 'createhub', component: CreateHubComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'userlocationmap', component: UserlocationmapComponent },
      { path: 'userdetails', component: UserdetailsComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'createvehicle', component: CreateVehicleComponent },
      { path: 'vehicles', component: ListVehicleComponent },
      { path: 'Piechartsdemo', component: PiechartsdemoComponent },
      { path: 'appgraph', component: AppgraphComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'complaint', component: ComplaintComponent },
      { path: 'charging-station-list', component: FleetmanagerChargingStationComponent },
    ]
  },
  // SuperAdmin Routing
  {
    path: 'superadmin', component: SuperadminLayoutComponent, children: [
      { path: 'superadmin', loadChildren: './layouts/superadmin-layout/superadmin-layout.module#SuperadminLayoutModule' },
      { path: 'admindashboard', component: PiechartsdemosuperadminComponent },
      { path: 'superadminreports', component: SuperadminreportsComponent },
      { path: 'vendor', component: VendorComponent },
      { path: 'createvendor', component: VendorCreateComponent },
      { path: 'chargerlocationmap', component: SuperAdminChargerlocationmapComponent },
      { path: 'createstation', component: SuperAdminCreatChargersComponent },
      { path: 'vehicle', component: VehicleComponent },
      { path: 'login', component: LoginComponent },
      { path: 'station', component: SuperadminStationComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'faqlist', component: FaqlistComponent },
      { path: 'zone', component: SuperadminzoneComponent },
      { path: 'setting', component: VendorProfileComponent },
      { path: 'organization', component: SuperadminOrganizationComponent },

      { path: 'countrystatecity', component: CountryStateCityComponent },
      { path: 'battery-manufacturer-list', component: BatteryManufacturerListComponent },
    ]
  },
  // System Aggregator Routing
  {
    path: 'systemaggregator', component: SystemaggregatorLayoutComponent, children: [
      { path: 'systemaggregator', loadChildren: './layouts/systemaggregator-layout/systemaggregator-layout.module#SystemaggregatorLayoutModule' },
      { path: 'dashboard', component: SystemaggregatorDashboardComponent },
      { path: 'organization', component: SystemaggregatorOrganizationComponent },
      { path: 'chargers', component: SuperAdminChargersComponent },
      { path: 'vehicle', component: SystemaggregatorVehicleComponent },
    ]
  },
  // Charging Operator Routing
  {
    path: 'chargingoperator', component: ChargingOperatorLayoutComponent, children: [
      { path: 'chargingoperator', loadChildren: './layouts/charging-operator-layout/chargingoperator-layout.module#ChargingOperatorLayoutModule' },
      { path: 'dashboard', component: ChargingOperatorDashboardComponent },
      { path: 'chargers', component: ChargingOperatorChargingStationComponent },
    ]
  },
  // Zonal Manager Routing
  {
    path: 'zonalmanager', component: ZonalManagerLayoutComponent, children: [
      { path: 'zonalmanager', loadChildren: './layouts/zonal-manager-layout/zonalmanager-layout.module#ChargingOperatorLayoutModule' },
      { path: 'dashboard', component: ZonalManagerDashboardComponent },
      { path: 'chargers', component: ZonalManagerChargerStationComponent },
    ]
  },

  // Battery Manufacturer Routing
  {
    path: 'battery-manufacturer', component: BatteryManufacturerLayoutComponent, children: [
      { path: 'battery-manufacturer', loadChildren: './layouts/battery-manufacturer-layout/batterymanufacturer-layout.module#BatteryManufacturerLayoutModule' },
      { path: 'dashboard', component: BatteryManufacturerDashboardComponent },
      { path: 'vehicle-list', component: BatteryManufacturerVehicleListComponent },
      { path: 'battery-list', component: BatteryManufacturerBatteryListComponent },
      
    ]
  },

  // test data path  TestbatterymanufacturerComponent
  { path: 'testbatterydata', component: TestbatterydataComponent },
  { path: 'testchargerdata', component: TestchargerdataComponent },
  { path: 'telemetryauthenticationdata', component: TestbatterymanufacturerComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
