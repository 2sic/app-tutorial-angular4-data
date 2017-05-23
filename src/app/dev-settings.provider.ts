
import { Provider } from "@angular/core";
import { DnnDevSettings } from "tosic/sxc/dnn-dev-settings";

export let DevSettingsProvider : Provider = {
    provide: DnnDevSettings,
    useValue: <DnnDevSettings> {
        ignoreMissing$2sxc: true,
        ignoreMissingServicesFramework: true,
        forceUse: false,
        moduleId: 17,
        tabId: 36,
        path: "/"
    },
}

interface test {
    tabId: number;
}