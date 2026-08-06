import { MongoClient, Db } from 'mongodb';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export function getMongoConfig() {
  const MONGODB_URI = process.env.MONGODB_URI;
  const DB_NAME = process.env.DB_NAME;
  const COLLECTION_NAME = process.env.COLLECTION_NAME;

  if (!MONGODB_URI || !DB_NAME || !COLLECTION_NAME) {
    throw new Error('Missing required environment variables. Check .env.local file.');
  }

  return { MONGODB_URI, DB_NAME, COLLECTION_NAME };
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const { MONGODB_URI, DB_NAME } = getMongoConfig();

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(DB_NAME);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
