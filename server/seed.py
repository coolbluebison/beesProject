#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db
import json



from models import db, User, Seller, Product

def seed_users():

    # Creating some sample users

    user_data = [
        {"username":'byildiran', "email":"b.yildiran@bees.com", "_password_hash":"pasword","address":"Denver at Denver St."},
        {"username":"tritheuiguy", "email":"tri@bees.com","_password_hash":"pasword", "address":"Downtown Denver Tower"}
    ]

    for user in user_data:
        new_user = User(username=user["username"], email=user["email"], _password_hash=user["_password_hash"], address=user["address"])
        db.session.add(new_user)


def seed_sellers():

    seller_data = [
        {"name":"Big Sky Ranch", "address": "300 River Rd. Colorado", "description_assets":"Organic and Fresh Farm Produce", "email":"contact@bigskyranch.com", "phone_number":"720-111-2222"},
        {"name":"Bakers Baker", "address": "South Bakery Road. Denver", "description_assets":"Best Baked Goods Daily for Denver", "email":"contact@bakersbakery.com", "phone_number":"720-111-3333"},
    ]

    for seller in seller_data:
        new_seller = Seller(name=seller['name'], address=seller['address'], description_assets=seller['description_assets'], email=seller['email'], phone_number=seller['phone_number'])
        db.session.add(new_seller)


def seed_products():


    img_files_1 = json.dumps({"0":"https://img.thrivemarket.com/store/full/8/6/861555000125-1_1_1.jpg?w=1260&jpg_quality=90", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_2 = json.dumps({"0":"https://img.thrivemarket.com/store/full/1/9/191011000872_front_1_1.jpg?w=256&jpg_quality=80", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})

    img_files_3 = json.dumps({"0": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTojlMJuFn7lMWsnOzesRkJ-8t-HuXwPYOarbA3WOUgQi3Gd9zK8QqU7YhzxwmeClmbmwk&usqp=CAU"})
    img_files_4 = json.dumps({"0":"https://sallysbakingaddiction.com/wp-content/uploads/2021/01/multigrain-bread-loaf-2.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_5 = json.dumps({"0":"https://admin.marketwagon.com/uploads/16531248386536b3e1-6a55-446e-97de-b32b8ccb7864.png.webp", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_6 = json.dumps({"0":"https://publish-p24753-e82007.adobeaemcloud.com/content/dam/trjo/products/m20903/69975.png/jcr:content/renditions/cq5dam.web.1280.1280", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_7 = json.dumps({"0":"https://m.media-amazon.com/images/I/61Op1W2cXNL.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_8 = json.dumps({"0":"https://www.allrecipes.com/thmb/mG3tpzT8HHjiYp3Ho9-YbGqa0No=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/176957-baked-kale-chips-DDMFS-4x3-40fcece9965d47278e7f590304d6861c.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_9 = json.dumps({"0":"https://i.mctimg.com/cdn-cgi/image/w=400,h=400,fit=pad/https://i.mctimg.com/file/e5ba9ef94684ba94168bfaaf6ca245c184c6a677/150dc568ed2ead46055ecdbd7ce7fe24f5b11093e03a7cf75bbcdbd545045fd2", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_10 = json.dumps({"0":"https://i5.peapod.com/c/SH/SH6C9.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})




    qualities_1 = json.dumps( {"0":"Organic", "1":"GMO-Free"})
    qualities_2 = json.dumps( {"0":"Pasture Raised"} )

    product_data = [
        {"name": "Grass Fed Himalayan Salted Ghee", "price": 12.49, "quantity_desc": "9.5 oz jar", "product_cat": "Pantry", "image_files": img_files_1, "qualities": qualities_1, "seller_id": 1},
        {"name": "Free-Range Eggs", "price": 2.99, "quantity_desc": "12 count", "product_cat": "Dairy", "image_files": img_files_2 , "qualities": qualities_2 , "seller_id": 2},
        {"name": "Organic Raw Honey", "price": 10.99, "quantity_desc": "16 oz bottle", "product_cat": "Sweeteners", "image_files": img_files_3, "qualities": qualities_1, "seller_id": 2},
        {"name": "Whole Grain Bread", "price": 3.49, "quantity_desc": "1 loaf", "product_cat": "Bakery", "image_files": img_files_4, "qualities": qualities_1, "seller_id": 2},
        {"name": "Fresh Blueberries", "price": 5.99, "quantity_desc": "1 pint", "product_cat": "Produce", "image_files": img_files_5, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Almond Butter", "price": 7.99, "quantity_desc": "12 oz jar", "product_cat": "Pantry", "image_files": img_files_6, "qualities": qualities_1, "seller_id": 2},
        {"name": "Quinoa", "price": 4.99, "quantity_desc": "2 lbs bag", "product_cat": "Grains", "image_files": img_files_7, "qualities": qualities_1, "seller_id": 1},
        {"name": "Kale Chips", "price": 3.99, "quantity_desc": "5 oz bag", "product_cat": "Snacks", "image_files": img_files_8, "qualities": qualities_1, "seller_id": 2},
        {"name": "Cold Pressed Olive Oil", "price": 11.99, "quantity_desc": "500 ml bottle", "product_cat": "Oils & Vinegars", "image_files": img_files_9, "qualities": qualities_1, "seller_id": 1},
        {"name": "Spicy Salsa Sauce", "price": 5.49, "quantity_desc": "16 oz jar", "product_cat": "Condiments", "image_files": img_files_10, "qualities": qualities_1, "seller_id": 1}

    ]

    for product in product_data:
        new_product = Product(name=product['name'], price=product['price'], quantity_desc=product['quantity_desc'], product_cat=product['product_cat'], image_files=product['image_files'], qualities=product['qualities'], seller_id = product["seller_id"])

        db.session.add(new_product)



if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        User.query.delete()
        Seller.query.delete()
        Product.query.delete()

        seed_users()
        seed_sellers()
        seed_products()

        db.session.commit()


