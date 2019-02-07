# SMB Innovation Summit 2019 Hackathon - Internet of Things
This build block takes a quick dive into the topic of Internet of Things (IoT). IoT is transforming the competitive landscape. As the world becomes increasingly connected, digitalization is a key differentiator that will enable companies to remain competitive. Using IoT data from billions of intelligent devices generating massive volumes of data, digitalization promises lower costs, improved production quality, flexibility, efficiency, shorter response time to market demands, and also opens up new business opportunities.

In an typical IoT scenario, you would need to setup & achieve the following components:
```mermaid
graph TB
A[Define your IoT Use Case Scenario] --> B[Understanding your Hardware Peripherals e.g. Sensors & Devices]
B --> C[Learning how to work with your Hardware Communication Standard e.g. WiFi, Bluetooth, etc.]
C --> D[Choosing the right IoT Cloud Platform]
D --> E[Setting up your Gateway / Router to Platform]
E --> F[Communicating between your Device and the Gateway]
```

Before you start, make sure you're provided with a Test & Development tenant of SAP Leonardo IoT 4.0 Service Cockpit and a Sensor Device.

In this build block, you will learn & understand the following:

1. SAP Leonardo IoT 4.0 Service.

2. SAP Leonardo IoT 4.0 Service APIs.
A ready-to-consume APIs set that allows you to consume Sensor Device data in real time.

3. The Texas Instruments CC2650STK sensor. 
This sensor is a Bluetooth Low Energy (BLE) Enabled Sensor Device which has 10 sensors including support for light, digital microphone, magnetic sensor, humidity, pressure, accelerometer, gyroscope, magnetometer, object temperature, and ambient temperature.

Due to the limited time we have during the hackathon, we STRONGLY recommend you to go with the **Preconfigured Device Option A**.

## Overview
For this hackathon if you follow the **Option A - Preconfigured Device**, most of the components above have already been preconfigured and set up for you.

Your main task is then to understand **how to operate with the Device (Send / Receive Sensor Data) & Pull data from the IoT Platform**.

For more details on each one of the options please check their corresponding README files and folders content provided:

### [Option A: Preconfigured Device](https://github.com/TrinidadMG/IoTBuildBlock/tree/master/A.%20Preconfigured%20Device)
1. API Reference document explaining how to GET Sensor Data from SAP Leonardo IoT Platform 
2. Postman Samples on Reference to SAP Leonardo IoT API
2. Client-side: Sample SAP Fiori app to Retrieve Sensor Values deployed in Cloud Foundry
3. Server-side: Sample NodeJS app to Retrieve Sensor Values deployed in Cloud Foundry

### Option B: Bring Your Own Device 
1. API Reference to create your device in the SAP Leonardo IoT Platform
2. Sample JavaScript language script processing the API Reference
3. Sample SAP Fiori App to Execute Sample Script

### Prerequisites
- [Personal] SAP Cloud Platform Trial Account
- [Instructor] SAP Leonardo IoT 4.0 Service Cockpit Account
- [Instructor] Texas Instruments SensorTag CC2650STK
- [Instructor] SAP Router App

## Usage
Follow document  provided in the option folder. 

## License
This repository is released under the terms of the MIT license. 
See [LICENSE](https://github.com/B1SA/hackathon/blob/master/LICENSE) for more information or see https://opensource.org/licenses/MIT.
