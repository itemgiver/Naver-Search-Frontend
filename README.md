# Naver-FE-SSR

## Introduction

Naver-FE-SSR은 3가지 검색 키워드에 대한 검색 화면을 보여줍니다. 실제 Naver 서비스와 유사하게 UI를 디자인하고 React를 이용해 화면을 만들었습니다. 불국사, 독립일기, 샴고양이 키워드에 대해 Server Side Rendering된 결과물을 유저에게 보여줍니다. MSA의 장점을 살려 Web Server와 Render Server를 분리하였고 Web Server는 json 데이터를 Render Server한테 보내고 Render Server는 Rendering된 HTML 코드를 돌려줍니다.

## Demo Link

아래의 링크는 AWS를 이용해 배포한 링크입니다. 링크에 접속해 새로고침을 누르게 되면 다양한 화면이 로드됩니다. \
http://ec2-3-17-186-117.us-east-2.compute.amazonaws.com:3000/

## Website Preview

### Bulguksa Temple

<img src="https://user-images.githubusercontent.com/87184009/147715465-eeea8299-f0cd-40e2-9399-7b3aba232da6.gif" alt="drawing" width="100%"/>

### Independence Diary

<img src="https://user-images.githubusercontent.com/87184009/147715486-8696367e-572f-41db-a765-6632bc2de604.gif" alt="drawing" width="100%"/>

### Siamese Cat

<img src="https://user-images.githubusercontent.com/87184009/147715493-951c48ae-9cd3-438b-b6f9-2a592b7454db.gif" alt="drawing" width="100%"/>

## System Design

![image](https://user-images.githubusercontent.com/87184009/145199863-3b15798c-fb44-437e-ac49-37de14f38eb9.png)
