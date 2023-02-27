import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databindingdemo';
  public name="Demo";
  public topic="Data Binding";
  public image="/assets/nu-logo.png";
  public image2="/assets/youtubelogo.png";
  public stylevalues="text-align: center;background-color:yellow;";
  public random="";
  onClick(){

        alert(this.topic)
    
      }
}
