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
        {"name":"Baker's Baker", "address": "South Bakery Road. Denver", "description_assets":"Best Baked Goods Daily for Denver", "email":"contact@bakersbakery.com", "phone_number":"720-111-3333"},
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
    img_files_9 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQ1y6WNGt72hDWxiDVVp1fp8DMSnp84CIZg&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_10 = json.dumps({"0":"https://i5.peapod.com/c/SH/SH6C9.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})

    img_files_11 = json.dumps({"0":"https://m.media-amazon.com/images/I/715AnUUxmVL._AC_UF1000,1000_QL80_.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_12 = json.dumps({"0":"https://cdn11.bigcommerce.com/s-e132r1196t/images/stencil/1280x1280/products/2798/3701/1621613968.1280.1280__03685.1702264506.jpg?c=2", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_13 = json.dumps({"0":"https://m.media-amazon.com/images/I/61XfHsrlrLL.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_14 = json.dumps({"0":"https://theloopywhisk.com/wp-content/uploads/2018/02/Gluten-Free-Pasta_663px-featured-NEW1.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_15 = json.dumps({"0":"https://images.heb.com/is/image/HEBGrocery/001700228-1", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_16 = json.dumps({"0":"https://www.onehappydish.com/wp-content/uploads/2021/08/homemade-dark-chocolate-recipe.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_17 = json.dumps({"0":"https://www.eatwell101.com/wp-content/uploads/2022/03/How-to-Roast-Almonds-with-sugar-800x533.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_18 = json.dumps({"0":"https://dessertswithbenefits.com/wp-content/uploads/2017/08/Healthy-Homemade-Maple-Syrup3.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_19 = json.dumps({"0":"https://mainegrains.com/wp-content/uploads/2020/06/00000PORTRAIT_00000_BURST20200508133333572.jpeg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_20 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblFfAU3HTPmJqW-z0xasInJA3dYIJUAL2Hg&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})

    img_files_21 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSESLZuB68MhcNIxj1aQYcCx9PjrNCg19aJcQ&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_22 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfBRZFfYfsSuSAZefXpPXTzu5xJPzd1xXwA&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_23 = json.dumps({"0":"https://media.sandiegoreader.com/img/photos/2016/03/13/2016-03-13_12.09.27_t670.jpg?b3f6a5d7692ccc373d56e40cf708e3fa67d9af9d", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_24 = json.dumps({"0":"https://storage.googleapis.com/images-kkg-prd-dbdfdde.kkg.prd.v8.commerce.mi9cloud.com/product-images/detail/15e427d6-9da4-445e-9306-4a5998e57cc4.jpeg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_25 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5e5AuZ3RGEI_aNgDnZCPeOhDiWjAV76DQs-Q7nKMRuL6yY04YI5ndQ34a80SDFM58Rc8&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_26 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJlOu6eR3TT8AVQbMplT3On0Go1T3yqGUmw&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_27 = json.dumps({"0":"https://goodeggs4.imgix.net/a8b37fdb-cfe4-4d25-8b60-71e6937d1392.jpg?w=840&h=525&fm=jpg&q=80&fit=crop", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_28 = json.dumps({"0":"https://goodeggs4.imgix.net/a5b47416-b656-4b63-8385-6aea478c3406.jpg?w=840&h=525&fm=jpg&q=80&fit=crop", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_29 = json.dumps({"0":"https://shop.sprouts.com/cdn-cgi/image/f=auto,q=80,dpr=2,h=324,w=324/https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ddc9d7bb-506d-4541-8116-351240018a87.png", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_30 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsI7qNWktN985emIOhhoFRXQnplIs0WWBrUA&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})

    img_files_31 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2_fvv-AjBabZdtRcUs_A1Sukaz9BPf63Aw&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_32 = json.dumps({"0":"https://i5.walmartimages.com/seo/Plant-Junkie-Organic-Avocado-Oil-8-5-fl-oz-250-ml-Glass-Bottle_be369e0d-9e91-4a3d-aba6-9e171b32f2ff.1d3a765483ee9a30f8b2f0c27b9a99c2.jpeg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_33 = json.dumps({"0":"https://caputos.com/wp-content/uploads/Cuyagua-Venezuela-Dark-Chocolate-Bar-Amano-Chocolate-570x855.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_34 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrCZtl1DHbrXpHzYSrbL9xTN2QEqT8MNv4IgCn1Tetz-002N0RfOYX7EaiuoFJcDzL-U&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_35 = json.dumps({"0":"https://m.media-amazon.com/images/I/61WBtUekmGL.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_36 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhW9Kpic8ZPAEKpaxivdbx_yEiAYC-u3nvKw&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_37 = json.dumps({"0":"https://www.oliveyouwhole.com/wp-content/uploads/2016/12/New-Barn-Almond-Milk-1.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_38 = json.dumps({"0":"https://www.celebratelocalohio.com/cdn/shop/products/b47662f3328d81a9cdd1f33b77f1ab61697f1cc6_480x480.jpg?v=1579879405", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_39 = json.dumps({"0":"https://marvel-b1-cdn.bc0a.com/f00000000205501/www.fruitfulyield.com/media/catalog/product/cache/dfaabb7738d33c83488d2ae38b563b44/m/u/mustard-whole-grain.png", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_40 = json.dumps({"0":"https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5f64c549d5a6e3e810d6b575_855942002182-glamor-frontpackageglamor-2020-09-17t11-54-30-iphone-7-quality-90-1-21-1-user-5c4f16e4fc9c91accd101ce4-fvfe-889678._FMwebp__SR600,600_.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})

    img_files_41 = json.dumps({"0":"https://www.rastellis.com/cdn/shop/products/DTC_Organic_Grass-Fed_Ribeye_Steak_-105.jpg?v=1678219553", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_42 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG3iscX9IgeUPlqB2rXC2XDmxcSRapDdpHEA&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_43 = json.dumps({"0":"https://bambinosbabyfood.com/cdn/shop/products/image_ea39f6e4-993a-4b41-ab8a-ecaa1ca36349_grande.jpg?v=1517320634", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_44 = json.dumps({"0":"https://fivemarysmeats.com/cdn/shop/products/porkchops_1800x1800.jpg?v=1590815513", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_45 = json.dumps({"0":"https://assets.wakefern.com/is/image/wakefern/20823500000-317?$Mi9Product_detail$", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_46 = json.dumps({"0":"https://target.scene7.com/is/image/Target/GUEST_6636736f-be19-4a52-b78f-9ff69bdf1d65?wid=488&hei=488&fmt=pjpeg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_47 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHT2lkffsAfuzamB96ntVYW2LU6d_IzZEDBA&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_48 = json.dumps({"0":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcj56327VNumRg7QRivWWIHSUG1R7IzgWmYg&usqp=CAU", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_49 = json.dumps({"0":"https://www.rimonthly.com/content/uploads/2020/04/93281464_10222020589926474_3536927768941953024_n.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})
    img_files_50 = json.dumps({"0":"https://vincentsmeatmarket.com/wp-content/uploads/2023/01/VincentsMeatMarket-214509-Buying-Organic-Duck-blogbanner1.jpg", "1":"https://img.thrivemarket.com/store/full/0/2/025317605564_2_1_1.jpg?w=1260&jpg_quality=90"})



    qualities_1 = json.dumps( {"0":"Organic", "1":"GMO-Free"})
    qualities_2 = json.dumps( {"0":"Pasture Raised"} )

    product_data = [
        
        # batch 1
        {"name": "Grass Fed Himalayan Salted Ghee", "price": 12.49, "quantity_desc": "9.5 oz jar", "product_cat": "Dairy & Eggs", "sub_cat": "Butter & Ghee", "image_files": img_files_1, "qualities": qualities_1, "seller_id": 1},
        {"name": "Free-Range Eggs", "price": 2.99, "quantity_desc": "12 count", "product_cat": "Dairy & Eggs", "sub_cat": "Eggs", "image_files": img_files_2 , "qualities": qualities_2 , "seller_id": 2},
        {"name": "Organic Raw Honey", "price": 10.99, "quantity_desc": "16 oz bottle", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_3, "qualities": qualities_1, "seller_id": 2},
        {"name": "Whole Grain Bread", "price": 3.49, "quantity_desc": "1 loaf", "product_cat": "Baked Goods", "sub_cat": "Bread", "image_files": img_files_4, "qualities": qualities_1, "seller_id": 2},
        {"name": "Fresh Blueberries", "price": 5.99, "quantity_desc": "1 pint", "product_cat": "Fresh Produce", "sub_cat": "Fruits", "image_files": img_files_5, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Almond Butter", "price": 7.99, "quantity_desc": "12 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_6, "qualities": qualities_1, "seller_id": 2},
        {"name": "Quinoa", "price": 4.99, "quantity_desc": "2 lbs bag", "product_cat": "Pantry & Staples", "sub_cat": "Grains", "image_files": img_files_7, "qualities": qualities_1, "seller_id": 1},
        {"name": "Kale Chips", "price": 3.99, "quantity_desc": "5 oz bag", "product_cat": "Snacks & Bars", "sub_cat": "Snacks", "image_files": img_files_8, "qualities": qualities_1, "seller_id": 2},
        {"name": "Cold Pressed Olive Oil", "price": 11.99, "quantity_desc": "500 ml bottle", "product_cat": "Pantry & Staples", "sub_cat": "Oils and Vinegars", "image_files": img_files_9, "qualities": qualities_1, "seller_id": 1},
        {"name": "Spicy Salsa Sauce", "price": 5.49, "quantity_desc": "16 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_10, "qualities": qualities_1, "seller_id": 1},

        # batch 2
        {"name": "Chia Seeds", "price": 6.49, "quantity_desc": "1 lbs bag", "product_cat": "Pantry & Staples", "sub_cat": "Packaged Goods", "image_files": img_files_11, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Spinach", "price": 3.99, "quantity_desc": "10 oz bag", "product_cat": "Fresh Produce", "sub_cat": "Vegetables", "image_files": img_files_12, "qualities": qualities_1, "seller_id": 2},
        {"name": "Avocado Oil Mayo", "price": 7.99, "quantity_desc": "12 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_13, "qualities": qualities_2, "seller_id": 1},
        {"name": "Gluten-Free Pasta", "price": 4.49, "quantity_desc": "16 oz package", "product_cat": "Pantry & Staples", "sub_cat": "Pasta", "image_files": img_files_14, "qualities": qualities_2, "seller_id": 2},
        {"name": "Organic Coconut Water", "price": 2.49, "quantity_desc": "16.9 fl oz bottle", "product_cat": "Beverages", "sub_cat": "Coconut Water", "image_files": img_files_15, "qualities": qualities_2, "seller_id": 2},
        {"name": "Dark Chocolate Bar", "price": 3.99, "quantity_desc": "3 oz bar", "product_cat": "Snacks & Bars", "sub_cat": "Chocolate", "image_files": img_files_16, "qualities": qualities_1, "seller_id": 1},
        {"name": "Roasted Almonds", "price": 5.99, "quantity_desc": "10 oz bag", "product_cat": "Pantry & Staples", "sub_cat": "Snacks", "image_files": img_files_17, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Maple Syrup", "price": 9.99, "quantity_desc": "12 fl oz bottle", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_18, "qualities": qualities_2, "seller_id": 2},
        {"name": "Multigrain Crackers", "price": 4.99, "quantity_desc": "8 oz box", "product_cat": "Snacks & Bars", "sub_cat": "Snacks", "image_files": img_files_19, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Green Tea", "price": 4.49, "quantity_desc": "20 tea bags", "product_cat": "Beverages","sub_cat": "Tea", "image_files": img_files_20, "qualities": qualities_2, "seller_id": 2},

        #batch 3 
        {"name": "Organic Peanut Butter", "price": 6.99, "quantity_desc": "16 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_21, "qualities": qualities_2, "seller_id": 1},
        {"name": "Fresh Strawberries", "price": 4.99, "quantity_desc": "1 lb container", "product_cat": "Fresh Produce", "sub_cat": "Fruits", "image_files": img_files_22, "qualities": qualities_2, "seller_id": 2},
        {"name": "Gluten-Free Oats", "price": 5.49, "quantity_desc": "2 lbs bag", "product_cat": "Pantry & Staples", "sub_cat": "Grains", "image_files": img_files_23, "qualities": qualities_1, "seller_id": 2},
        {"name": "Organic Tomato Sauce", "price": 3.49, "quantity_desc": "24 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_24, "qualities": qualities_1, "seller_id": 2},
        {"name": "Cashew Nuts", "price": 6.99, "quantity_desc": "8 oz bag", "product_cat": "Snacks & Bars", "sub_cat": "Snacks",  "image_files": img_files_25, "qualities": qualities_2, "seller_id": 2},
        {"name": "Plant-Based Protein Powder", "price": 29.99, "quantity_desc": "1 lb package", "product_cat": "Personal Care", "sub_cat": "Supplements", "image_files": img_files_26, "qualities": qualities_1, "seller_id": 2},
        {"name": "Whole Wheat Pasta", "price": 2.99, "quantity_desc": "16 oz package", "product_cat": "Pantry & Staples", "sub_cat": "Pasta", "image_files": img_files_27, "qualities": qualities_2, "seller_id": 2},
        {"name": "Organic Dried Apricots", "price": 7.49, "quantity_desc": "12 oz bag", "product_cat": "Snacks & Bars", "sub_cat": "Snacks", "image_files": img_files_28, "qualities": qualities_1, "seller_id": 2},
        {"name": "Extra Virgin Coconut Oil", "price": 10.99, "quantity_desc": "16 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Oils and Vinegars", "image_files": img_files_29, "qualities": qualities_2, "seller_id": 2},
        {"name": "Kombucha Tea", "price": 3.99, "quantity_desc": "16 fl oz bottle", "product_cat": "Beverages", "sub_cat": "Tea", "image_files": img_files_30, "qualities": qualities_2, "seller_id": 2},

        #batch 4
        {"name": "Artisan Sourdough Bread", "price": 4.99, "quantity_desc": "1 loaf", "product_cat": "Baked Goods", "sub_cat": "Bread", "image_files": img_files_31, "qualities": qualities_1, "seller_id": 31},
        {"name": "Organic Avocado Oil", "price": 12.99, "quantity_desc": "500 ml bottle", "product_cat": "Pantry & Staples", "sub_cat": "Oils and Vinegars", "image_files": img_files_32, "qualities": qualities_1, "seller_id": 32},
        {"name": "Dark Chocolate Bars", "price": 3.49, "quantity_desc": "100g bar", "product_cat": "Snacks & Bars", "sub_cat": "Chocolate", "image_files": img_files_33, "qualities": qualities_2, "seller_id": 33},
        {"name": "Organic Red Quinoa", "price": 6.99, "quantity_desc": "2 lbs bag", "product_cat": "Pantry & Staples", "sub_cat": "Grains", "image_files": img_files_34, "qualities": qualities_1, "seller_id": 34},
        {"name": "Fresh Asparagus", "price": 4.49, "quantity_desc": "1 lb bundle", "product_cat": "Fresh Produce", "sub_cat": "Vegetables", "image_files": img_files_35, "qualities": qualities_1, "seller_id": 35},
        {"name": "Vegan Protein Bars", "price": 2.50, "quantity_desc": "per bar", "product_cat": "Snack & Bars", "sub_cat": "Snacks", "image_files": img_files_36, "qualities": qualities_1, "seller_id": 36},
        {"name": "Almond Milk", "price": 3.99, "quantity_desc": "1 liter carton", "product_cat": "Dairy & Eggs", "sub_cat": "Milk", "image_files": img_files_37, "qualities": qualities_1, "seller_id": 37},
        {"name": "Organic Sachet Green Tea", "price": 5.99, "quantity_desc": "20 bags box", "product_cat": "Beverages", "sub_cat": "Tea", "image_files": img_files_38, "qualities": qualities_2, "seller_id": 38},
        {"name": "Whole Grain Mustard", "price": 3.99, "quantity_desc": "10 oz jar", "product_cat": "Pantry & Staples", "sub_cat": "Condiments", "image_files": img_files_39, "qualities": qualities_2, "seller_id": 39},
        {"name": "Spelt Flour", "price": 4.99, "quantity_desc": "2 lbs bag", "product_cat": "Pantry & Staples", "sub_cat": "Grains", "image_files": img_files_40, "qualities": qualities_2, "seller_id": 40},

        #batch 5
        {"name": "Grass-Fed Beef Ribeye Steak", "price": 14.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Beef", "image_files": img_files_41, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Chicken Breasts", "price": 9.99, "quantity_desc": "2 lbs", "product_cat": "Meat & Seafood", "sub_cat": "Poultry", "image_files": img_files_42, "qualities": qualities_1, "seller_id": 1},
        {"name": "Wild-Caught Salmon Fillets", "price": 16.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Seafood", "image_files": img_files_43, "qualities": qualities_1, "seller_id": 1},
        {"name": "Natural Pork Chops", "price": 8.49, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Pork", "image_files": img_files_44, "qualities": qualities_1, "seller_id": 1},
        {"name": "Jumbo Shrimp", "price": 18.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Seafood","image_files": img_files_45, "qualities": qualities_1, "seller_id": 1},
        {"name": "Organic Ground Turkey", "price": 7.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Poultry", "image_files": img_files_46, "qualities": qualities_1, "seller_id": 1},
        {"name": "Fresh Tilapia Fillets", "price": 14.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Seafood", "image_files": img_files_47, "qualities": qualities_1, "seller_id": 1},
        {"name": "Grass-Fed Lamb Chops", "price": 21.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Lamb", "image_files": img_files_48, "qualities": qualities_1, "seller_id": 1},
        {"name": "Live Lobsters", "price": 55.99, "quantity_desc": "per lobster", "product_cat": "Meat & Seafood", "sub_cat": "Seafood","image_files": img_files_49, "qualities": qualities_1, "seller_id": 1},
        {"name": "Duck Breast", "price": 15.99, "quantity_desc": "1 lb", "product_cat": "Meat & Seafood", "sub_cat": "Poultry", "image_files": img_files_50, "qualities": qualities_1, "seller_id": 1}

    ]

    for product in product_data:
        new_product = Product(name=product['name'], price=product['price'], quantity_desc=product['quantity_desc'], product_cat=product['product_cat'], sub_cat=product['sub_cat'], image_files=product['image_files'], qualities=product['qualities'], seller_id = product["seller_id"])

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


