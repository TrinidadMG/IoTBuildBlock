## Option B: Bring your own device

To implement this option you require your own IoT device that you want to manage from SAP Leonardo IoT Service. 

## Overview

With this option you have to declare and configure your device in the SAP Leonardo IoT Service. 

### Provided resources 
The following resources will be provided during the hackaton session:

- The credentials of an SAP Leonardo IoT tenant:
    - IOT_INSTANCE_URL
    - User 
    - Password

### Documentation 

We provide here the document [IoT 4.0-SMBIoT SensorTag_v1.0.pdf](https://github.com/TrinidadMG/IoTBuildBlock/blob/master/B.%20Bring%20Your%20Own%20Device/IoT%204.0-SMBIoT%20SensorTag_v1.0.pdf) that guides you through the registration of a SensorTag IoT device into SAP Leonardo IoT service. You can use this document as the reference for registering your own device. The document also shows how to create an application acting as a gateway for your device to send data to the SAP IoT service, if your device can directly send the data to the SAP IoT service this gateway is not required.

### App Samples
The following 2 sample apps showing you how to consume the IoT APIs in order to retrieve your device measures. These applications are the same ones as for the Option A: Preconfigured Device:

1. Client-side: [Sample SAP Fiori app](https://github.com/TrinidadMG/IoTBuildBlock/tree/master/A.%20Preconfigured%20Device/Client-side%20App/IoT-ReadMeasure) - Retrieves sensor values via API and show them in a table

2. Server-side: [Sample NodeJS app to Retrieve Sensor Values](https://github.com/TrinidadMG/IoTBuildBlock/tree/master/A.%20Preconfigured%20Device/Server-side%20App/iot_cf_readmeasures)
- Retrieves sensor measures via API

Check their corresponding README files to get all details how to deploy these applications.

### Additional documentation:

- [Internet of Things Service API Documentation](https://trial.canary.cp.iot.sap/iot/core/api/v1/doc/)

- [REST gateway APIs for sending data to the IoT gateway](https://help.sap.com/viewer/d5f07bf9e1d646959a006f98d4cce321/Cloud/en-US)

- [SAP Cloud Platform Internet of Things](https://help.sap.com/viewer/product/SAP_CP_IOT_CF/Cloud/en-US) main page 

## License
This repository is released under the terms of the MIT license. 
See [LICENSE](https://github.com/B1SA/hackathon/blob/master/LICENSE) for more information or see https://opensource.org/licenses/MIT.
