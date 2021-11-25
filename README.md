# ZenDesk Coding Challenge

## Requirements

- Node.js
- Git

## How to run 

### Step1: Clone repo & Install dependencies

1. Clone repo to your local machine

```
git clone https://github.com/code-panda-x/zendesk-coding-challenge.git
```

2. Install packages for express server

```
cd /server
npm install
```

3. Install packages for react client

```
cd /client
npm install
```

### Step2: Run server

```
cd /server
npm start
```

Server should be running on localhost:7000

### Step3: Run client

```
cd /client
npm start
```

React app should be running on localhost:3000

### Step4: View the app

Open a browser and navigate to http://localhost:3000/

---

### Test the app

```
cd /client
npm test
```



## Design Overview

#### Backend (Express)

I used express to run a local server as my backend. The server sends GET request to the ZenDesk API and gets all the tickets data. The local server will later be called by react client and forwards packages to the front-end. I used API token for API authorization.



#### Frontend (React)

I built frontend components with React. React client calls local express API when the applicaiton starts. It will render ticket information as a page of 25 tickets. If API is not configured correctly, it will display error messages. I used Enzyme to test my app as required.



