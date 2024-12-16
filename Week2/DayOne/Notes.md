# Difference Betwee <Link> <a> and <link>
## <Link>
This is a react component that is imported from react router. It is used to create single page applications(SPA). Meaning that when ever we interacte with this component it doesn't reload the whole page rather it redirects us to another component.

We use the to and element attribute to specifiy with path goes to which componentt
```jsx
<Link to="/home" element={<Home />} />
```

## <a>
Also know as the anchor tag. This is a HTML tag that allows us to link differnt webpages together. Unlik Link component this tag reload the whole page when clicked, so we can not use it in SPA.
```html
<a href="google.com">Google</a>
```

## <link>
Same as the <a> tag this is an html tag that is used in the head of HTML document to link to different resources. Such as css style sheets;
```html
<head>
    <link rel="stylesheet" href="style.css">
</head>
```