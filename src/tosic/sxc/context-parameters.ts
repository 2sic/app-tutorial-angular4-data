
// These are the parameters which make up the current context / state of this app
// It's mainly needed to ensure that the Http Service is correctly setup

import { sxcInstanceInterface } from "tosic/sxc/sxcInstanceInterface";

export class contextParameters {
  modulId: number;
  tabId: number;
  contentBlockId: number;
  servicesFramework: any;
  sxc: sxcInstanceInterface;
}
