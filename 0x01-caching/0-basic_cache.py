#!/usr/bin/python3
"""a class BasicCache that inherits from BaseCaching and is a caching system:"""


from base_caching import BaseCaching



class BasicCache(BaseCaching):
    """__summary__"""

    def __init__(self):
        """__summary__"""
        super().__init__()

    def put(self, key, item):
        """Check if key or item is None, and don't do anything in that case"""
        if key is not None and item is not None:
            """ Assign the item value to the key in the cache_data dictionary"""
            self.cache_data[key] = item

    def get(self, key):
        """Check if key is None or if the key doesn't exist in the cache_data"""
        if key is not None and key in self.cache_data:
            """ Return the value linked to the key """
            return self.cache_data[key]
        else:
            return None
