# AUTOMATED WATER QUALITY MONITORING SYSTEM-PURAQ


## Third Year Project
### University of Peradeniya-Faculty of Engineering

Project Collaborators:

- [Ishani Maduwanthi](https://github.com/ishaniMadhuwanthi)
+ [Kshithija Wanniarachchi](https://github.com/kshithi)
- [Wathsari Premathilake](https://github.com/wathsariPremathilaka)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## About Project

We have developed a web application embedded with a hardware system to make automate measuring water quality parameters in water treatment plants. There are so many water quality monitoring parameters used in water treatment plants.They are **pH, turbidity, electrical conductivity, TDS, Residual chlorine, UV intensity, ALUM and LIME , Appearance/ color**. And there are mainly four stages of water treatment process. They are,

1. Raw Water
2. Pulsator output
3. Filtered Water
4. Treated Water

Nowadays normally these parameters in each stage are measured by the technician manually. And updates those data in log books. So, every 30 minutes they have to go to tanks and take water samples, then again come to tha lab and have to measure values. So it makes many difficulties, specially in rainy days. 

### Solution

In our system, we have targeted pH value and Turbidity value of tanks in water plants. And pH sensors and turbisity sensors are installed in each tank. Then system waiting time is defined to 30 minites. Therefore, every 30 minites system will display parameter values in each tank. And also they are realtimely updated to the database automatically. So there is no need to maintain hand written log books further. (You can change the waiting period of the measuring time and add any parameter)

If there are deviations of measuring values when comparing with standard vlaues of each tank in particular treatment stage, an alarm is ringing and then technician can get suitable action in purifying cycle.

* **Frontend** : ReactJs 
* **Database** : Firebase
* **Hardware Components** : pH Sensor, Turbidity Sensor, Node MCU, LCD Display, Power Supply
                     

## Documents

Sensor data that is measured from sensors are send to the server through node mcu. The they are updated in the database. Following documents you can get clear idea on how to establish the system. 

* [Design Manual](https://github.com/ishaniMadhuwanthi/puraq-system/blob/master/Design%20Manual-PURAQ.pdf)
     * Implementation
          * System Design
          * Database Handling
     * Methodology
          * Hardware Architecture
          * Software Architecture
     * Testing
          * Integration Testing
          * Unit Testing
          * Load Tesing
          
* [User Manual](https://github.com/ishaniMadhuwanthi/puraq-system/blob/master/User%20Manual-PURAQ.pdf)
     * Product Identification
     * System Overview
     * Specifications (About hardware components)
     

## Instructions

1. Clone the repository

2. Open folder using Visual Studio in windows

       npm install
       npm start
       
       Then open http://localhost:3000/ to see your application.
    
    To get package.json file
    
       npm init

3. Download dependencies 

4. Setting up firebase console (Procedure is included in the **design manual**)

5. Setting up authentication in firebase

6. Set all hardware parts together as in the design.


## Dependencies

    "chart.js": "2.7.3",
    "classnames": "2.2.6",
    "firebase": "^6.6.2",
    "firebase-json": "^0.4.0",
    "mdbreact": "^4.23.0",
    "moment": "2.24.0",
    "node-sass": "^4.13.0",
    "nouislider": "13.1.1",
    "react": "16.8.4",
    "react-body-backgroundcolor": "^1.2.1",
    "react-chartjs-2": "2.7.4",
    "react-color": "^2.17.3",
    "react-copy-to-clipboard": "5.0.1",
    "react-datetime": "2.16.3",
    "react-dom": "16.8.4",
    "react-drawer": "^1.3.4",
    "react-google-maps": "9.4.5",
    "react-notifications-component": "^2.2.3",
    "react-router-dom": "4.3.1",
    "react-scripts": "^2.1.8",
    "reactjs-popup": "^1.5.0",
    "reactstrap": "7.1.0




