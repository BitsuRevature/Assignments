# Higher Order Component(HOC)
HOC's are like higher order functions that take a callback funtion, but in the case of HOC's they take in a component and return an enhanced component.
```jsx
function hoc(WrappedComponent){
    return(props){
    // do something
        <WrappedComponent {...props} />
    }
}
```

An example in java is a the decorator pattern
```java
int i = 0;
Integer i = new Integer(0);
```