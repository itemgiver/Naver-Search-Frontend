# Naver-Search-Frontend

## Introduction

This project is an implementation of the Naver search website. These days, millions of people visit the Naver search website, so the Naver Frontend team is using Server-Side-Rendering and Microservices Architecture to handle many users. Therefore we tried to make our website similar to the Naver Search website using these technologies.

## Demo Link

The demo link below was deployed using AWS EC2. When you access the link and refresh the webpage, search keywords and screens will change randomly. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/

## Software Architecture

1. Users access our website by clicking our demo link URL.
2. They can also specify the keyword at the end of the URL that they want to search. \
   (ex. http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=bulguksa)
4. If there is no keyword, WebServer will randomly select one of the three keywords and display it. Three keywords are (`keys=bulguksa`, `keys=diary`, `keys=sham`)
5. WebServer retrieves JSON file that corresponds to the keyword from internal DB and sends a post request to RenderServer.
6. RenderServer builds HTML code using JSON file that contains rendering form, image address, background colors, dates, blog previews, news information, etc.
7. WebServer receives HTML code from RenderServer and shows it to users.

![image](https://user-images.githubusercontent.com/87184009/145199863-3b15798c-fb44-437e-ac49-37de14f38eb9.png)

## Website Preview

### Bulguksa

Bulguksa is a head temple of the Jogye Order of Korean Buddhism and encompasses six National treasures of South Korea. It is located on the slopes of Mount Toham. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=bulguksa

<img src="https://user-images.githubusercontent.com/87184009/147715465-eeea8299-f0cd-40e2-9399-7b3aba232da6.gif" alt="drawing" width="100%"/>

### Independent Diary

Independent diary is a daily webtoon in South Korea, and it is one of the most popular webtoons in South Korea. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=diary

<img src="https://user-images.githubusercontent.com/87184009/147715493-951c48ae-9cd3-438b-b6f9-2a592b7454db.gif" alt="drawing" width="100%"/>

### Siamese Cat

Siamese cat is one of the first distinctly recognized breeds of Asian cats. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=sham

<img src="https://user-images.githubusercontent.com/87184009/147715486-8696367e-572f-41db-a765-6632bc2de604.gif" alt="drawing" width="100%"/>
