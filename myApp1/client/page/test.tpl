
<!doctype html>
{% html lang="en" framework="myApp1:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/static/favicon.ico">
        <title>{{ title }}</title>
        <!--
            @require "myApp1:static/css/header.less"
            @require "myApp1:static/css/global.less"
        -->

    {% endhead %}

    {% body %}
<script>

    console.log(document.getElementsByTagName("link"));

</script>
        <div id="wrapper">
            <div id="middle" class="container">
            /////////////////////////////////////////////////////
                <input type="button" id="selMouldBtn" value="下一页">
                <div class="switchOn"><span></span></div>

                {% script %}
                 require("myApp1:static/js/customer/test.js");

                {% endscript%}



            </div>
        </div>

    {% endbody %}

{% endhtml %}