# OpenUI5 Custom Controls for charting
This sample OpenUI5 web app demonstrated custom UI controls that act as wrapper for charting libraries.
It shows you how to integrate simple charts into OpenUI5 apps.

## Installation
Clone this repository locally, open up the command line/terminal in the root folder and execute the following command to download required dependencies:
```
npm install
```
*Note:* You need to have NodeJS installed

Next, execute the following command to run a local server with the sample application:
```
grunt
```

Finally, access ```http://localhost:8080/index.html``` from your browser.

## C3.js
Custom UI control wrapping [C3.js](http://c3js.org/), a D3-based reusable chart library.

### Usage
Here's how to use the C3.js custom control:

```xml
<agraebe.custom.control:ChartJSControl width="400" height="200" responsive="true" chartType="Line" data="{some>/path}"/>
```

*Notes:*
-Width & height only used for ratio of the chart. However, it is ignored in case ```responsive="true"```
- All chart types listed in the [documentation](http://www.chartjs.org/docs/) can be used

## Chart.js
Custom UI control wrapping [Chart.js](http://www.chartjs.org/), a simple, clean and engaging chart library for designers and developers.

### Usage
Here's how to use the Chart.js custom control:

```xml
<agraebe.custom.control:C3JSControl data="{some>/path}"/>
```

## Todos
- [ ] Advance C3.js control to use data-binding for labels
- [ ] Advance C3.js control to include further chart types
