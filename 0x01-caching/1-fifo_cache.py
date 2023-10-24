#!/usr/bin/python3
"""a class FIFOCache that inherits from BaseCaching
   and is a caching system:
"""

from base_caching import BaseCaching
from collections import deque


class FIFOCache(BaseCaching):
    def __init__(self):
        super().__init__()
        self.queue = deque()

    def put(self, key, item):
        if key is not None and item is not None:
            """ Check if the number of items in
            the cache is higher than the maximum
            """
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                # Get the first item added to the cache (oldest item)
                first_item_key = self.queue.pop(0)
                print(f"DISCARD: {first_item_key}")
                # Remove the oldest item from the cache
                del self.cache_data[first_item_key]

            # Add the new item to the cache and the FIFO queue
            self.cache_data[key] = item
            self.queue.append(key)

    def get(self, key):
        if key is not None:
            return self.cache_data.get(key, None)
        return None
