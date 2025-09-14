import { mutation, query } from "./_generated/server.js";

export const getMany = query({
  args: {},
  handler: async (ctx:any) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx:any) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (!identity) {
      throw new Error("Must be signed in to add a user");
    }
    const orgId = identity.orgId as string;
    if (!orgId) {
      throw new Error("Must be in an organization to add a user");
    }

    throw new Error("tracking test")
    const userId = await ctx.db.insert("users", {
      name: "Khaman",
    });
  },
});
