## Create database
Make sure you have psql(postgres) installed

```bash
bash ./src/seeder/seedScript.sh
```
## To Run Locally on Mac

### Create .env file
### Simple way to run locally 
```bash
npm install
npm run dev2
```

### Another way to run locally while using watch and nodemon on the dist folder
Terminal1 should run the conversion ts into js into a `/dist` folder via the command below

```bash
npm run watch
```

Terminal2 should run the command below to call the `/dist` folder

```bash
npm run dev
```

### Docker/Droplet/Dokku deployment
TODO ci/cd?
- local terminal - 
  - docker build : `docker build -t <accountname>:<version>` ex: `docker build -t tanvez/gm-interview:1.1 .`
  - docker push : `docker push <accountname>:<version>` `docker push  tanvez/gm-interview:1.1`
  - 
- ssh into droplet via ip `ssh root@<ip>`    
  - pull docker image: `docker pull tanvez/gm-interview:1.1`
  - tag docker image: `docker tag tanvez/gm-interview:1.1 dokku/server:1.1`
  - deplot using dokku: ` dokku deploy server 1.1`