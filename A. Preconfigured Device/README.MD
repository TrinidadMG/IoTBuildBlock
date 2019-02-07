## Option A: Preconfigured Device

With this option, you will be able to retrieve your device measures from the IoT platform via the IoT API Reference .

### During the session you will get:
 
 - The credentials of an SAP Leonardo IoT tenant
    - IOT_INSTANCE_URL
    - User 
    - Password

 - A Texas Instruments CC2650STK sensor (http://www.ti.com/tool/TIDC-CC2650STK-SENSORTAG) and its corresponding DEVICE_ID (as defined in the IoT tenant).


The device will be already declared within the IoT tenant assigned to you.

For this sensor to be able to send data to the SAP Leonardo IoT 4.0 Service a gateway is required. Mobile phones will be preconfigured and active during the session and will act as gateways. 

IoT measures will then be available in the IoT tenant assigned to you and you can simply consume them from within your application.

### The attached document shows in detail how to get the measures for your device by 3 different ways:
    - IoT tenant cockpit
    - IoT API Documentation
    - Postman ([check our Postman collection samples](www.github.com)) **SET LINK**

### We provide to you also 2 different sample apps showing you how to consume the IoT APIs:
    1. Client-side: Sample SAP Fiori app **SET LINK**
        Retrieves sensor values via API and show them in a table
    2. Server-side: Sample NodeJS app to Retrieve Sensor Values
        Retrieves sensor measures via API

### Additional documentation on the IoT APIs:

- [Internet of Things Service API Documentation](https://trial.canary.cp.iot.sap/iot/core/api/v1/doc/)

- [REST gateway APIs for sending data to the IoT gateway](https://help.sap.com/viewer/d5f07bf9e1d646959a006f98d4cce321/Cloud/en-US)


