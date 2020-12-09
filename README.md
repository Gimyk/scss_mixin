# SCSS Mixin Library

You can transpile to CSS to make it work
You can install tools to transpile sass to css here [**Install Sass**](https://sass-lang.com/install)

## What is it about

This contains common SCSS template code for you to include in your project.
With the use of mixins as functions which can be called into your scss file, or you can use if as it is.
Just import the tools into your code and you can make use of the **@mixins**
_The whole point of this is to promote code reuse in CSS and make your code more readable and simpler to write_

Or if you are using VS code, you can download the extension Live Sass Compiler [here](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)

## File structure:

**tools** Folder. This contains:

- animations.scss: (I'll be adding common animations like loaders, that you can use in your project)
- common.scss: contains commonly used templates. for now it is tables, forms and dialogue(overlay)
- mixin.scss: contains all the mixin functions that you can call in your project.
- variables.scss: contains variable declarations which you can make use of through out the project. The most important one being the \$colors array, which contains all the colors that are used in the project, and when a color is changed here, it can make a huge difference through out the project (which is a good thing 😇 )

_I'll be adding more common components later_

# How to Use

- To add **flex box** properties:

```scss
// Specify direction as the first parameter, either column or row
// And second optional parameter for position, either center, flex-end etc. default is center e.g:
.yourclassname {
  @include flexi(); 
  //has optional parameters for (flex-direction, justify-content) 
}

// CSS out put will be
.yourclassname {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
```

- For default buttons that have a material design feel to them:

```scss
//I'd suggest putting this in the root so it affects every button
button {
  @include button_def();
}

// css output will be:
button {
  padding: 0.5em;
  text-transform: uppercase;
  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin: 0.5em;
  cursor: pointer;
  background: white;
  border: none;
  color: #005dff;
}
```

For a bit more customized buttons you can pass in a parameter in the button_def() mixin like so: (more customizations coming soon)

```scss
.btn_primary {
  @include button_def("primary");
} // This will set the button to have the primary background color that is set in the variables file in my case it is `btn_primary: #005DFF`

.btn_second {
  @include button_def("second");
  // This will set the button to have the secondary background color that is set in the variables file in my case it is `btn_second: white`
}
```

Below a list of more mixins you can use:

- For the none optional parameters, you can just enter `null` as the value and it will be ignored

```scss
@include grid($min, $gap); //$min is minimum width for card(box\single grid),
//$gap is gap between grid items
```

```scss
@include nav($bg: null, $txt_color: null, $shadow: null) //to create a nav bar

// by default, all the parameters are optional and will take the default setting of the colors in the variables file. 
// but you can pass in the bg color, text color and if or not you'd like a shadow on the nav 
```

```scss
@include position($type, $top, $right, $bottom, $left) // setting position
  //$type can either be fixed, absolute, relative and so on
  // for example if you call the function like so:

.classname {
  @include position(fixed, 0, 0, null, null);
}

// css output will be
.classname {
  position: fixed;
  top: 0;
  right: 0;
}
```

```scss
@include size($w, $h); //for with and height
```

```scss
@include column($count, $mobile_count); 
// $count is number of columns
// $mobile_count is the number of columns you want in mobile view 
```

```scss
@include center_item($margin_top, $text_direction: null); // this will center an item using margins, relative to 100% of the parent element
// $margin_top: margin at the top
// $text_direction with buttons, this does not work, so you can set the text direction to push the buttons in that direction, e.g. right, center, left. 
```
