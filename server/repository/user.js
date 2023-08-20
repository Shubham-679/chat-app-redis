import { Schema, Repository } from "redis-om";
import { redis } from "../redis.js";

const userSchema = new Schema("user", {
  first_name: { type: "string" },
  last_name: { type: "string" },
  email: { type: "string" },
  age: { type: "number" },
},{
  dataStructure: "JSON",
});

export const userRepository = new Repository(userSchema, redis);

await userRepository.createIndex();
