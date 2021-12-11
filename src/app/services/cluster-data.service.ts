import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClusterDataService {

  constructor() { }

  public clusters = [
    {
      "CloudZone":"usljv04xp2vcawir1002.fiserv.one / usljv04-w2-dc",
      "Description":"Production Lewisville",
      "Metric CPU Ratio Max":"2.5",
      "Metric Memory Free %":"0",
      "Metric Disk Free %":"30"
    },
    {
      "CloudZone":"uschd01xl2vcawir1001.fiserv.one / uschd01n-wld1-vdc",
      "Description":"Nonproduction Chandler",
      "Metric CPU Ratio Max":"7",
      "Metric Memory Free %":"-20",
      "Metric Disk Free %":"30"
    }
  ]

  getClusters() {
    return this.clusters;
  }


}
