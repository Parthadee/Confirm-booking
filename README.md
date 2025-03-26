# 🏡 Partha - Real Estate CMS

A Real Estate CMS for agencies to manage their property listings. Currently in its early stages and not production ready.

 > **📝 NOTE: Incremental migrations will start when v1.0.0 is released. Until then, migration files will be modified.**

| 📸 Screenshots                                                         |
| ------------------------------------------------------------------- |
| <img src="./public/github/creating a property.png" alt="drawing"/> |


## 📌 Table of Contents

🚀 Requirements

⚙️ Installation

🛠️ Running Tests

📅 Roadmap

## 🚀 Requirements

✅ PHP >= 8.1✅ MySQL >= 5.7✅ Composer (Download: getcomposer.org)

## ⚙️ Installation

1️⃣ Clone the repository

> git clone https://github.com/Parthadee/Real-Estate-CMS.git

2️⃣ Navigate into the project directory and install dependencies

> composer install

3️⃣ Configure EnvironmentModify the auto-generated .env file to reflect your environment (http://getcomposer.org/download).

4️⃣ Run database migrations and seeds

***⚠️ WARNING: This will drop all tables from the specified database.**

> php artisan make:migration create_flights_table

## 🛠️ Running Tests

1️⃣ Update phpunit.xml file and set DB_DATABASE to your testing database.

2️⃣ Run tests
> vendor/bin/phpunit

# 📅 Roadmap

**🎯 v1.0.0**

✅ Account Management

✅ Create & modify accounts

✅ Authentication

✅ Manage & assign roles & permissions

✅ Property Management

✅ Create & modify properties

✅ Manage & assign property amenities

✅ Upload images

✅ Geographical locations

✅ UI Translations✅ Live Demo

**📌 Backlog**

✅ Account Management

✅ Manage & assign tasks

✅ Property Management

✅ Manage & use dynamic property types

**⏳ Manage & use dynamic property fields (In Progress)**

✅ Manage & schedule tours

✅ Utilize task system

✅ Add & manage notes

✅ Upload attachments
