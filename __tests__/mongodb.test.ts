import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { getMongoConfig, connectToDatabase } from '@/lib/mongodb';

const mockDb = {
  collection: vi.fn(() => ({
    insertOne: vi.fn(),
  })),
};
const mockClient = {
  connect: vi.fn().mockResolvedValue(true),
  db: vi.fn(() => mockDb),
};

vi.mock('mongodb', () => {
  return {
    MongoClient: vi.fn().mockImplementation(function () {
      return mockClient;
    }),
  };
});

describe('MongoDB Configuration & Connector', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('throws an error if required environment variables are missing', () => {
    delete process.env.MONGODB_URI;
    delete process.env.DB_NAME;
    delete process.env.COLLECTION_NAME;

    expect(() => getMongoConfig()).toThrow(/Missing required environment variables/);
  });

  it('returns valid config when environment variables are set', () => {
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
    process.env.DB_NAME = 'portfolio';
    process.env.COLLECTION_NAME = 'contacts';

    const config = getMongoConfig();
    expect(config.MONGODB_URI).toBe('mongodb://localhost:27017');
    expect(config.DB_NAME).toBe('portfolio');
    expect(config.COLLECTION_NAME).toBe('contacts');
  });

  it('connects to database and returns cached connection on subsequent calls', async () => {
    process.env.MONGODB_URI = 'mongodb://localhost:27017';
    process.env.DB_NAME = 'portfolio';
    process.env.COLLECTION_NAME = 'contacts';

    const conn1 = await connectToDatabase();
    const conn2 = await connectToDatabase();

    expect(conn1.client).toBe(conn2.client);
    expect(conn1.db).toBe(conn2.db);
  });
});
