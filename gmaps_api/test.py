import pymongo

client = pymongo.MongoClient("mongodb://dsall:sallibou1994@18.216.146.0/gmaps_database") # defaults to port 
27017

db = client.gmpas_database

# print the number of documents in a collection
print db.cool_collection.count()
