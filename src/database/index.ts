import "reflect-metadata";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: 'localhost',
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: [],
  migrations: ["./migrations/*.ts"],
});

export function createConnection(host = "database"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

createConnection().then(() => {
  console.log('Conexão com banco realizada');
})

export default dataSource;
