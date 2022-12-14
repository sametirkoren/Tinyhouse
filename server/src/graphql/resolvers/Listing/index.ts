/* eslint-disable @typescript-eslint/ban-types */
import { IResolvers } from "apollo-server-express";
import { ObjectID } from "bson";
import { Database, Listing } from "../../../lib/types";

export const listingResolvers: IResolvers = {
    Query: {
        listings: async (_root: undefined, _args: {}, {db}: {db: Database}) : Promise<Listing[]> => {
            return await db.listings.find({}).toArray();
        }
    },
    Mutation: {
        deleteListing: async (_root: undefined, {id}: {id: string}, {db}: {db: Database}) : Promise<Listing> => {
          const deleteRes = await db.listings.findOneAndDelete({
            _id: new ObjectID(id)
          });

          if(!deleteRes.value){
            throw new Error("failed to delete listing")
          }

          return deleteRes.value;
        }
    },
    Listing: {
        id: (listing: Listing): string => listing._id.toString()
    }
}