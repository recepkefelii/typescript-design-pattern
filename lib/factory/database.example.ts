interface Database {
    connect(): void
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("MYSQLDatabase is connected");

    }
}

class PostgreSQL implements Database {
    connect(): void {
        console.log('PostgreSQL is connected');

    }
}

class MongoDB implements Database {
    connect(): void {
        console.log('MongoDB is connected');

    }
}

class DatabaseFactory {
    createDatabase(type: string): Database {
      switch (type) {
        case 'mysql':
          return new MySQLDatabase();
        case 'mongodb':
          return new MongoDB();
        default:
          throw new Error('Invalid database type');
      }
    }
  }


const dbFactory = new DatabaseFactory();
const mysqlDb = dbFactory.createDatabase('mysql');
mysqlDb.connect();

