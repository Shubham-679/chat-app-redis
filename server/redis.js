//Redis connection

import { createClient } from 'redis'

export const redis = createClient();

(async () => {
    await redis.connect();
})();
  
console.log("Connecting to the Redis...");
  
redis.on("ready", () => {
    console.log("Redis Connected!");
});
  
redis.on("error", (err) => {
    console.log("Error in the Connection");
});