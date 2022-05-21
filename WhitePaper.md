#### The concept/design/business-model behind your website

<u>**Summary**</u>: The site is a simple skateboarding community, we will update some skateboarding tips from time to time, as well as some beautiful pictures, so that all skateboarders can feel the fun of skateboarding.

- Page1: A countdown animation tells you to come to my site.
- Page2: This is the home page of my website, which contains some history of skateboarding as well as pictures of skateboarders.
- Page3: A list that provides answers to common questions asked by visitors to a Web site. 
- Page4: This is the user feedback page, which is used to collect the information entered by the user





#### 5 Salient Points

<u>Challenge1</u>: Not familiar with the @keyframes and its usage.

```css
@keyframes goIn {
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
```

<u>Solution1</u>: I watched the video of the Udemy project repeatedly and combined it with the information on MDN Web Docs, I realized that for keyframes, the most important thing is the time node and the best way to do that is to roughly draw a timeline and map the events to the timeline sequentially in order.





------

<u>Challenge2</u>: The size problem of images. In the Image Carousel section of my Page2, I added the images to the html as instructed in the Udemy video, and modified their css properties. However, this caused some of my images to display with poor quality or two images sharing a place that belonged to one image.

<u>Solution2</u>: Therefore, I took the easiest way to avoid the problems above by finding images on the unsplash site that were as identical in size as possible, and at the same time I didn't need to do specific css settings for each image.





------

<u>Challenge3</u>: To store the user's input information into a file. In this part, I can successfully get the user's input but I can't save this information to a file.

<u>Solution3</u>: After reviewing a lot of information, I realized that I needed to use something called a BLOB. By using the Blob() constructor, I can convert the string containing all user input into a Blob object. The BLOB object is then assigned as a URL to the newly created Link tag, which is used to download the user input to a local file.



------

<u>Challenge4</u>: Improve user experience by making web pages more interconnected

<u>Solution4</u>: After much consideration, I decided to make the Sticky Navbar project in Udemy a part of all pages (except the first one). I placed the corresponding html, css, and js sections on each page and made specific changes to them so that the user would not feel abrupt when making a page hopping.





------

<u>Challenge5</u>: Use NODE to set up an HTTP connection

<u>Solution5</u>: Even though I tried many ways to set up HTTP connections to all four of my pages using Node.js, it failed in the end. However, I still attached the "aborted product".