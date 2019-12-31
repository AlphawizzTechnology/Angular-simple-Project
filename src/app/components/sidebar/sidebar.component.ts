import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { SharedService } from 'app/shared-services/sharedServices.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/admin/user', title: 'User', icon: 'person', class: '' },
    { path: '/admin/chargers', title: 'Chargers', icon: 'power', class: '' },
    { path: '/admin/chargers', title: 'Add New charger', icon: 'power', class: '' },
    { path: '/admin/reports', title: 'Reports', icon: 'report', class: '' },
    { path: '/admin/setting', title: 'Setting', icon: 'settings', class: '' },
    { path: '/admin/faq', title: 'faq', icon: 'faq', class: '' },
    // { path: '/chargerlocationmap', title: 'ChargerMapLocation',  icon:'bubble_chart', class: '' },
    // { path: '/station', title: 'Station',  icon:'content_paste', class: '' },

    // { path: '/userlocationmap', title: 'UserlocationMap',  icon:'bubble_chart', class: '' },
    // { path: '/userdetails', title: 'UserDetails',  icon:'person', class: '' },
    // { path: '/vehicle', title: 'Vehicle',  icon:'content_paste', class: '' },

    //{ path: '/user-profile', title: 'user-profile to PRO',  icon:'unarchive', class: 'active-pro' },

    /*{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    Token: string = '';
    public VendorName: any;
    constructor(private router: Router, private service: SharedService) { }
    ngOnInit() {
        this.VendorName = localStorage.getItem("VendorName");
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        // old parth
        //this.Token = localStorage.getItem("TOKEN");

        // 18-06-2019 Durgesh
        this.Token = localStorage.getItem("SAuthKey");
        this.roleManage();

    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    GoToSuperAdminPanel() {
        // old parth
        //localStorage.clear();
        // 18-06-2019 Durgesh
        localStorage.setItem('AuthKey', localStorage.getItem('SAuthKey'));
        localStorage.removeItem('SAuthKey');
        localStorage.removeItem('VendorName');

        this.router.navigateByUrl('/superadmin/organization')
    }
    LogOut() {
        localStorage.clear();
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to Logout.",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.value) {
                localStorage.clear();
                this.service.applicationUrlToken('', '');
                this.router.navigate(['/login']);
            }
        })
    }
    public FleetManager: boolean = false;
    public ChargingOperator: boolean = false;
    public Utility: boolean = false;
    public SystemIntegrater: boolean = false;
    public BatteryManufaturer: boolean = false;
    public RoleType: any = [];
    roleManage() {
        this.RoleType = JSON.parse(localStorage.getItem('Role'));
        this.RoleType.forEach(element => {
            if (element.roleid.rolename == "FleetManager") {
                this.FleetManager = true;
            } else if (element.roleid.rolename == "ChargingOperator") {
                this.ChargingOperator = true;
            } else if (element.roleid.rolename == "Utility") {
                this.Utility = true;
            } else if (element.roleid.rolename == "SystemIntegrater") {
                this.SystemIntegrater = true;
            } else if (element.roleid.rolename == "BatteryManufaturer") {
                this.BatteryManufaturer = true;
            }
        });
    }
}
