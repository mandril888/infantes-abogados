#CATCH A VARIABLE WRITTEN IN A INPUT

~~~
<input type="text" ng-model="somethingWritten">
~~~

In the controller you can use it with ```$scope.beerToSearch```

#LOOPS IN HTML

~~~
<div ng-repeat="something in somethingSearched">
    <p> {{ something.name }} : {{ something.description }} </p>
</div>
~~~

Then you have to use it in the corresponding controller ```$scope.something Searched```

#FILTER

~~~~
<input type="text" ng-model="enteredSubject">

<ul>
    <li ng-repeat="subject in student.subjects | filter : {name : enteredSubject, books : { language : english } }">
    result: <strong>{{subject.name}}</strong> = <em>{{subject.marks}}</em>
    </li>
</ul>
~~~~

Here I'm filtering by two propertyes, ones entered by the user.

Also you can have an static filter with:
~~~
<ul>
    <li ng-repeat="subject in student.subjects" ng-show="{{ subject.marks < 70 }}">
    result: <strong>{{subject.name}}</strong> = <em>{{subject.marks}}</em>
    </li>
</ul>
~~~

#ORDERBY

~~~~
<select ng-model="orderInfo">
              <option value="name">name</option>
              <option value="marks">marks</option>
</select>

<ul>
    <li ng-repeat="subject in student.subjects | orderBy : orderInfo">
    result: <strong>{{subject.name}}</strong> = <em>{{subject.marks}}</em>
    </li>
</ul>
~~~~

This is used to order alphabetically a list of items in the wanted order.

*[X] You can mix filter and orderBy!!*

#SHOW & HIDE

~~~
<button ng-click='showResults()'>{{ results ? 'Hide' : 'Show' }} Results</button>

<div ng-show="results">
    <div> . . . </div>
<div>
~~~

Here we show and hide the info on the div with ```ng-show``` by clicking the button. Also the text of the button changes.

In the controller you have to make a function:
~~~
$scope.results = true;
    $scope.showResults = function() {
      return ( $scope.results = $scope.results ? false : true )
    }
~~~