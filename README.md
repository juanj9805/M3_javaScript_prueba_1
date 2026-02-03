### The proccess to run the app 
- Install Json-server
- Cd db
- On terminal run npx-json-server db.json --port 4000 (this port is used to avoid problems with live server)

### DB
- I try to normalize the data base to avoid double data
- I decide gather as much data as possible to have a better reports

#### Users
- userFullName 
- userEmail 
- department 
- userPassword 
- userRol (based on this rol we determine what view I gonna show on tue ui)
- userJoinDate 
- id 

### Tasks
- id
- taskName
- taskCategory
- taskPriority
- taskStatus
- taskDueDate
- taskDescription
- userId (this is a foreign key to create a link between tasks and user )

### Controllers
- Pendent

### Models
- Pendent

### Pages
All html pages are stored here

### Services
Here I create the functionalities that I had been using through all the app such as
- api
- session
- auth
- guard

### Views
Each page has its own view to add protection to the variables and to have a better scalability


