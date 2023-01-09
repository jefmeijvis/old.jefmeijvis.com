---
author: Jef Meijvis
id : 1
image : /post/001/logo-csharp.png
title: CSharp extension methods
date: 16/10/2021
description : As a programmer, extension methods are a great tool to have in your toolbelt! They allow you to extend the functionality of an existing type without having to modify the type.
tags : Sveltekit,API,endpoints
---

## Extension methods?

As a programmer, extension methods are a great tool to have in your toolbelt! They allow you to extend the functionality of an existing type without having to modify the type. This can be usefull in cases were you don't have access to the type, or when you want to increase modularity by keeping some functionality out of the main class.

The most well known extension methods are those of the Linq library. These methods add aditional functionality to classes that implement the IEnumerable interface!

Lets demonstrate extension methods by expanding the String class For this example we want to see if a string contains the world apple. The regular way of doing this is by creating a method that takes the string as input, and check wether or not it contains the fixed string 'apple'.

    string juice = "Applejuice";
    string smoothie = "Banana smoothie";
    string desert = "Pie with apples and bananas on top";

    bool FoodContainsApple(string food)
    {
        return food.ToLower().Contains("apple");
    }

    Console.WriteLine(FoodContainsApple(juice));    // True
    Console.WriteLine(FoodContainsApple(smoothie)); // False
    Console.WriteLine(FoodContainsApple(desert));   // True

This works, and for such a basic example as this, it might suffice to do it this way. But let's try and get the same results using extension methods this time around. We start out by creating a new class, extensions.cs. Make sure that the class is static. We implement the static method ContainsApple() containing the same logic as before. Note however the 'this' keyword before the input argument. This will allow use to use the method as if it was a method contained inside of the string class.

## A realistic example
For the next example, we want to make an extension method that allows us to select a random element from an array. We try to create this as generic as possible, by extending the IEnumerable interface.


    public static T GetRandom<T>(this IEnumerable<T> inputEnumerable)
    {
        int index = new Random().Next(0, inputEnumerable.Count());
        return inputEnumerable.ElementAt(index);
    }

We implement the folowing generic extension method that selects a random element from the collection. This allows us to hide the random selection logic, and contain it in the Extensions.cs file. We can now use this method by once again including the correct namespace, and invoking the method on, for example, an array of strings:

    using ExtensionMethodsBlogpost;

    string[] fruits = { "Apple", "Banana", "Orange" };

    // Logs one of the elements of the collection
    Console.WriteLine(fruits.GetRandom())

This was a quick look at extension methods, and how they can make life easier when working with classes where you don't have access to the actual implementation!

 
## Further reading
- https://kit.svelte.dev/docs/routing#server
- https://vercel.com/docs/project-configuration
- https://vercel.com/guides/how-to-enable-cors#enabling-cors-using-vercel.json
- https://www.reddit.com/r/sveltejs/comments/u4wepc/solving_cors_problems_when_using_sveltekitvercel/
- https://kit.svelte.dev/docs/hooks
