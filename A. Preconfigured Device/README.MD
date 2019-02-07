## Option A: Preconfigured Device

With this option, you will be able to retrieve your device measures from the IoT platform via the IoT API Reference .

### Provided resources 
 
- The credentials of an SAP Leonardo IoT tenant
    - IOT_INSTANCE_URL
    - User 
    - Password

- A Texas Instruments [CC2650STK SensorTag](http://www.ti.com/tool/TIDC-CC2650STK-SENSORTAG) and its corresponding DEVICE_ID (as defined in the IoT tenant).
The device will be already declared within the IoT tenant assigned to you and can be identified by its corresponding DEVICE_ID.

- An SAP Router.
For this sensor to be able to send data to the SAP Leonardo IoT 4.0 Service a gateway is required. Mobile phones will be preconfigured and active during the session and will act as gateways. 

IoT measures will then be available in the IoT tenant assigned to you and you can simply consume them from within your application.

### Documentation 
The document [IoT 4.0-Retrieve Measures.pdf](https://github.com/TrinidadMG/IoTBuildBlock/blob/master/A.%20Preconfigured%20Device/IoT%204.0-Retrieve%20Measures.pdf) shows in detail how to get the measures for your device via 3 different options:
- IoT tenant cockpit
- IoT API Documentation
- Postman ([check our Postman collection samples](https://github.com/TrinidadMG/IoTBuildBlock/blob/master/A.%20Preconfigured%20Device/IoT%204.0%20APIs.postman_collection.json)) 

### App Samples
We provide to you also 2 different sample apps showing you how to consume the IoT APIs:

1. Client-side: Sample SAP Fiori app **SET LINK**
Retrieves sensor values via API and show them in a table

2. Server-side: [Sample NodeJS app to Retrieve Sensor Values](https://github.com/TrinidadMG/IoTBuildBlock/tree/master/A.%20Preconfigured%20Device/Server-side%20App/iot_cf_readmeasures)
Retrieves sensor measures via API

Check their corresponding README files to get all details how to deploy these applications.

### Additional documentation:

- [Internet of Things Service API Documentation](https://trial.canary.cp.iot.sap/iot/core/api/v1/doc/)

- [REST gateway APIs for sending data to the IoT gateway](https://help.sap.com/viewer/d5f07bf9e1d646959a006f98d4cce321/Cloud/en-US)

- [SAP Cloud Platform Internet of Things](https://help.sap.com/viewer/product/SAP_CP_IOT_CF/Cloud/en-US) main page 


