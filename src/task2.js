/*

The first thing i would change about the code of these two functions is the name of variables and function arguments.
I would not use _ to separate words but instead use capitol letters for the first letter of each word beyond the first.
Another change i would definetely make is to use ForEach instead of a for in loop, especially when trying to loop over an array.
For in can be used on objects, but is not appropriate to use on arrays 

For example instead of: (probably will not even work)

----------------------------------------->
 for(var level in hierarchyLookupTable){
     processedObject[hierarchyLookupTable[level]] = [];
 }
 ----------------------------------------->

 we can write:

 ----------------------------------------->
 hierarchyLookUpTable.forEach(level => processedObject[level] = [])
 ----------------------------------------->

Another thing that i would change in the code is to make it more understandable to other developers: there are too many loops 
and conditionals nested between weach other. An idea should be creating smaller functions where to nest 1 or 2 loops or conditionals,
and those functions should be named to easilly undertand what they are doing

the following code:

----------------------------------------->
for(var entry in data_object){
    for (var media_value in media_array){
        if (data_object[entry].medium[0] === lookup_table.media[media_value]){
            for(level in hierarchyLookupTable){
                var current_level = hierarchyLookupTable[level]; processedObject[current_level].push(lookup_table
                [current_level][media_value]);
        };
        processedObject.media.push(lookup_table.media[media_value]);
        processedObject.data.push(data_object[entry].data);
    };
    };
};
----------------------------------------->

can be rewritten for example:

----------------------------------------->
function doSomethingElse(mediaValue){
    hierarchyLookUpTable.forEach(level => {
        processedObject[level].push(lookUpTable[level][mediaValue]);
    })
}

function doSomething(entry){
    mediaArray.forEach(mediaValue => {
        if (entry.medium[0] === lookUpTable.media[mediaValue]){
                doSomethingElse(mediaValue);
            };
        processedObject.media.push(lookUpTable.media[mediaValue]);
        processedObject.data.push(entry.data);
    })
}

dataObject.forEach( entry => {
    doSomething(entry);
})
----------------------------------------->

The same advice applies to the second function, where the nesting level is even higher.
In my opinion is better to write small understandable fucntions that execute a small workload at a time than 
writing big functions that execute a large amount of operations but are extremelly difficult to understand.
Also, when writing long functions with large amount of loops/conditionals nesting, there is a high risk of mistakes that are 
not easy to debugg, while working with multiple small functions is easy to correct mistakes.

As for the testing is very difficult for me to understand what these two functions are doing, but i would try make tests around
the object.keys of the first function and the length of the second one.

I also extremelly difficult to comment the code from the pdf, i have to manually type the code from the pdf
*/