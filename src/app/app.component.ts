import { Component, OnInit } from "@angular/core";

import * as $ from "jquery";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Priceeagle";
  constructor() {
  }
  ngOnInit(): void {
    this.banner();
  }
  banner(){
    //-------------------------------Auto play banner------------------------------------//
  setInterval(()=>{
    moveRight()
  }, 5000);
  // --------------------------------------------------------------------------------//
    // --------------------------------------Main Promotional banner----------------------------------//

    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var sliderUlWidth = slideCount * slideWidth;

    $("#slider").css({ width: slideWidth, height: slideHeight });
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $("#slider ul li:last-child").prependTo("#slider ul");
    function moveLeft() {
      $("#slider ul").animate(
        {
          left: +slideWidth
        },
        400,
        function() {
          $("#slider ul li:last-child").prependTo("#slider ul");
          $("#slider ul").css("left", "");
        }
      );
    }

    function moveRight() {
      $("#slider ul").animate(
        {
          left: -slideWidth
        },
        400,
        function() {
          $("#slider ul li:first-child").appendTo("#slider ul");
          $("#slider ul").css("left", "");
        }
      );
    }

    $("a.control_prev").click(function() {
      moveLeft();
    });

    $("a.control_next").click(function() {
      moveRight();
    });
  //------------------------------------------------------------------------------------//
  }
}
