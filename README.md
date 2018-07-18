# PlainJavaScript

#### Boolean Operators

| AND (&&) | TRUE | FALSE |
| --- | --- | --- |
|TRUE| <p style='color:green'>TRUE</p> | <p style='color:red'>FALSE</p> |
| FALSE | <p style='color:red'>FALSE</p> | <p style='color:red'>FALSE</p> |

***
- And (&&) => true if ALL are true
- OR ( || ) => true if ONE is true
- NOT ( ! ) => inverts true/false value
***

| OR (&&) | TRUE | FALSE |
| --- | --- | --- |
|TRUE| <p style='color:green'>TRUE</p> | <p style='color:green'>TRUE</p> |
| FALSE | <p style='color:green'>TRUE</p> | <p style='color:red'>FALSE</p> |

```
*****example*****

var age = 16;

age >= 20;    //false
age < 30;     //true
!(age < 30)   //false

age >= 20 && age < 30;  //false
age >= 20 || age < 30;  //true
```







