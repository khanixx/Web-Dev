"""
Run this script to populate the database with sample data from Lab 5.
Usage: python seed.py
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'shop_back.settings')
django.setup()

from api.models import Category, Product

# Clear existing data
Product.objects.all().delete()
Category.objects.all().delete()

# Create categories (matching Lab 5 IDs)
categories = [
    Category(id=1, name='Smartphones'),
    Category(id=2, name='Headphones'),
    Category(id=3, name='Memas'),
    Category(id=4, name='Chancery'),
    Category(id=5, name='Game Consoles'),
    Category(id=6, name='Laptops'),
]
Category.objects.bulk_create(categories)
print(f"Created {len(categories)} categories.")

# Create products (using Lab 5 data; count/is_active added for Django model)
products_data = [
    # Smartphones
    dict(id=1,  category_id=1, name='Apple iPhone 17 Pro 256Gb orange',              price=793269,  description='The Apple iPhone 17 Pro 256GB embodies innovation and style',                                                                                                    count=10,  is_active=True),
    dict(id=3,  category_id=1, name='Samsung Galaxy S25 Ultra 5G 12 GB/256 GB',      price=566873,  description='Introducing the Samsung Galaxy S25 Ultra 5G—a smartphone that combines high performance',                                                                        count=5,   is_active=True),
    dict(id=11, category_id=1, name='Vivo X200',                                     price=493570,  description='The Vivo X200 is a powerful and stylish smartphone with advanced technologies and impressive specifications for those who value performance and convenience.',      count=8,   is_active=True),
    # Headphones
    dict(id=2,  category_id=2, name='Sony WH-1000XM5',                              price=134999,  description='Industry-leading noise canceling headphones with Auto NC Optimizer.',                                                                                            count=15,  is_active=True),
    dict(id=12, category_id=2, name='Apple AirPods Pro 2',                           price=125000,  description='Active Noise Cancellation and adaptive audio.',                                                                                                                   count=20,  is_active=True),
    dict(id=13, category_id=2, name='Marshall Major IV',                              price=65000,   description='80+ hours of wireless playtime.',                                                                                                                                 count=12,  is_active=True),
    # Memas
    dict(id=7,  category_id=3, name='Nurlan Saburov',                                price=200,     description='The National Security Committee of Kazakhstan has begun investigations into Nurlan Saburov.',                                                                       count=1,   is_active=True),
    dict(id=8,  category_id=3, name='Shneine pepe',                                  price=777000,  description='shneine pepe watafaa',                                                                                                                                            count=0,   is_active=True),
    dict(id=9,  category_id=3, name='wehehe',                                         price=15,      description='',                                                                                                                                                                count=99,  is_active=True),
    dict(id=15, category_id=3, name='Kaspi banka',                                   price=570,     description='bankbanakabkbaksnkncsk',                                                                                                                                          count=1000,is_active=True),
    dict(id=16, category_id=3, name='Sabak',                                          price=1,       description='...',                                                                                                                                                             count=1,   is_active=False),
    # Chancery
    dict(id=10, category_id=4, name='Karandash',                                     price=10,      description='HB graphite pencils are an indispensable tool for study, creativity, and office work, providing clear lines and ease of use.',                                     count=500, is_active=True),
    dict(id=17, category_id=4, name='SvetoCopy A4 Paper',                            price=2500,    description='Standard white printer paper, 500 sheets.',                                                                                                                       count=200, is_active=True),
    dict(id=18, category_id=4, name='Obama',                                          price=10,      description='Reliable everyday ballpoint pen.',                                                                                                                                count=300, is_active=True),
    dict(id=19, category_id=4, name='Maped',                                          price=10,      description='High-quality synthetic rubber eraser.',                                                                                                                           count=150, is_active=True),
    dict(id=20, category_id=4, name='Notebook',                                       price=32,      description='Standard squared notebook.',                                                                                                                                      count=100, is_active=True),
    # Game Consoles
    dict(id=5,  category_id=5, name='PlayStation 5 Slim',                            price=265000,  description='Unleash new gaming possibilities with the slim PS5 console design.',                                                                                              count=3,   is_active=True),
    # Laptops
    dict(id=6,  category_id=6, name='MacBook Air 13 M1',                             price=499990,  description="Apple's thinnest, lightest notebook, completely transformed by the Apple M1 chip.",                                                                              count=7,   is_active=True),
]

products = [Product(**p) for p in products_data]
Product.objects.bulk_create(products)
print(f"Created {len(products)} products.")
print("Done! Database seeded successfully.")
