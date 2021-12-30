# Naver-FE-SSR

## Introduction

Naver-FE-SSR은 3가지 검색 키워드에 대한 검색 화면을 보여줍니다. 실제 Naver 서비스와 유사하게 UI를 디자인하고 React를 이용해 화면을 만들었습니다. 불국사, 독립일기, 샴고양이 키워드에 대해 Server Side Rendering된 결과물을 유저에게 보여줍니다. MSA의 장점을 살려 Web Server와 Render Server를 분리하였고 Web Server는 json 데이터를 Render Server한테 보내고 Render Server는 Rendering된 HTML 코드를 돌려줍니다.

## Demo Link

The demo link below is deployed using AWS EC2. When you access the link and refresh(`F5`) the webpage, search keywords and screens change randomly. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/

## Software Architecture

1. Users access our website by clicking our demo link url.
2. They can also specify the keyword at the end of the url that they want to search. \
   (ex. http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/?keys=bulguksa)
4. If there is no keyword, WebServer will randomly select one of the three keywords and display it. Three keywords are (`keys=bulguksa`, `keys=diary`, `keys=sham`)
5. WebServer retrieves JSON file that corresponds to the keyword from internal DB and sends a post request to RenderServer.
6. RenderServer builds HTML code using JSON file that contains rendering form, image address, background colors, dates, blog previews, and news information, etc.
7. WebServer receives HTML code from RenderServer and shows it to users.

![image](https://user-images.githubusercontent.com/87184009/145199863-3b15798c-fb44-437e-ac49-37de14f38eb9.png)

## Website Preview



### Bulguksa Temple

<img src="https://user-images.githubusercontent.com/87184009/147715465-eeea8299-f0cd-40e2-9399-7b3aba232da6.gif" alt="drawing" width="100%"/>

### Independence Diary

<img src="https://user-images.githubusercontent.com/87184009/147715493-951c48ae-9cd3-438b-b6f9-2a592b7454db.gif" alt="drawing" width="100%"/>

### Siamese Cat

<img src="https://user-images.githubusercontent.com/87184009/147715486-8696367e-572f-41db-a765-6632bc2de604.gif" alt="drawing" width="100%"/>
