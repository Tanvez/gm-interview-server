## To Run Locally on Mac

### Simple way to run locally 
```bash
npm install
npx mikro-orm migration:create
npm run dev2
```

### If you want more faster loads after you install the node_modules
Terminal1 should run the conversion ts into js into a `/dist` folder via the command below

```base
npm run watch
```

Terminal2 should run the command below to call the `/dist` folder

```
npm run dev
```

To seed the database after the database is created

```bash
bash ./src/seeder/seedScript.sh
```