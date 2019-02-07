[![SAP](https://i.imgur.com/HBBBde7.png)](https://cloudplatform.sap.com)
# iot_cf-readmeasures

This application is a sample implementation of SAP Leonardo IoT APIs for getting your IoT device measures via the SAP Leonardo IoT APIs. 

### Overview
- It is coded in [NodeJS](https://nodejs.org/en/)
- Can be deployed anywhere, we suggest to deploy it in the  [SAP Cloud Platform](https://cloudplatform.sap.com). 
- It makes use of the [Internet of Things Service API Documentation](https://trial.canary.cp.iot.sap/iot/core/api/v1/doc/)

### Prerequisites
* A free trial account on [SAP Cloud Platform](https://cloudplatform.sap.com) with Cloud Foundry Trial initialized.
* The [Cloud Foundry Command Line Interface (CLI)](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) installed on your machine;

### Deployment on the Cloud
Clone this repository
```sh
$ git clone https://github.com/TrinidadMG/IoTBuildBlock.git
```
Give a name to your app on the [manifest.yml](manifest.yml).

From the root directory, using the Cloud Foundry CLI (see prerequisites) push your app to the SAP CP Cloud Foundry:
```
$ cf push --random-route
```
>*--random-route avoids name colisions with others that deploy this same app on SCP. You can choose your own app name by changing the application names in the [manifest](manifest.yml)*

*It's ok if you get an error at this point*

The application requires some parameters to be configured either in the manifest.yaml or with the cf cli as follows
```sh
$ cf set-env <yourAppName> IOT_TENANT_URL <YOUR IOT_TENANT_URL>
```
$ cf set-env <yourAppName> IOT_DEVICE_ID <YOUR IOT_DEVICE_ID>
```
$ cf set-env <yourAppName> IOT_AUTH <YOUR IOT_AUTH> (Base64 encoding of your IoT tenant user:pwd)
```
Restart your application (so it can read the new environment variables)
```sh
$ cf restart <your app name set on the manifest.yml>
```

Access the app from the URL route shown in the terminal after the cf push command or check it in your SAP Cloud Foundry applications from the Cockpit

### Usage
There is only a GET measures service implemented that retrieves the measures for the configured IoT tenant and specific device.

# License
leoimg is released under the terms of the MIT license. See [LICENSE](LICENSE) for more information or see https://opensource.org/licenses/MIT.
