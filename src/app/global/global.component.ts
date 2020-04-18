import { Component, Injectable } from "@angular/core"

@Injectable()
export class GlobalComponent {
    ImgUrls: {} = {
        bannerUrl: 'https://api.priceeagle.in/imgs/priceeagleresources/banner/',
        circleUrl: 'https://api.priceeagle.in/imgs/priceeagleresources/circleImg/',
        storeUrl: 'https://api.priceeagle.in/imgs/priceeagleresources/store/',
        transUrl:'https://api.priceeagle.in/imgs/priceeagleresources/userTransaction/',
        dealsUrl:'https://api.priceeagle.in/imgs/priceeagleresources/Deals_Offers/'
    }


    // ImgUrls: {} = {
    //     bannerUrl: 'http://ec2-52-207-124-185.compute-1.amazonaws.com:8080/priceEagle/imgs/priceeagleresources/banner/',
    //     circleUrl: 'http://ec2-52-207-124-185.compute-1.amazonaws.com:8080/priceEagle/imgs/priceeagleresources/circleImg/',
    //     storeUrl: 'http://ec2-52-207-124-185.compute-1.amazonaws.com:8080/priceEagle/imgs/priceeagleresources/store/',
    //     transUrl:'http://ec2-52-207-124-185.compute-1.amazonaws.com:8080/priceEagle/imgs/priceeagleresources/userTransaction/'
    // }
}
