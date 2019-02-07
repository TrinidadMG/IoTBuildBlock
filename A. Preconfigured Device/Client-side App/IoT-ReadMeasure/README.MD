How to get it work?
1. Open global.js
2. Modify parameters accordingly
3. Push to Cloud Foundry

### Installation in the Cloud
Clone this repository
```sh
$ git clone https://github.com/TrinidadMG/IoTBuildBlock.git
```
Go to your local folder of this application /A. Preconfigured Device/Client-side App/IoT-ReadMeasure/

Edit the [manifest.yml](manifest.yml) file in your local cloned copy and give a name to your app.

From the root directory, using the [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) push your app to the SAP CP Cloud Foundry
```sh
$ cf push
or
$ cf push --random-route
–random-route will avoid name collisions with others that deploy this same app on SCP. You can also choose your own app name by changing the manifest.yml file.
