---
author: Jef Meijvis
id : 8
image : /post/008/logo.png
title: ChatGPT for software developers.
date: 11/01/2022
description : Make use of the ChatGPT as a software developer. Automate the creation of boilerplate code, unit tests and documentation. 
tags : openai,chatgpt,dotnet
published : true
---

## ChatGPT

### ChatGPT

ChatGPT is a powerful chatbot developed by [OpenAI](https://openai.com/) that can generate human-like text. It is based upon the [GPT-3 family](https://en.wikipedia.org/wiki/GPT-3) of large language models. As a software developer, you can use ChatGPT to automate repetitive tasks, generate code, and even help with documentation. In this blog post, we'll explore some of the ways ChatGPT can help you as a developer, and how you can get started using it. The practical examples shown here will make use of C# as its programming language. 

![OpenAI logo [small]](/static/post/008/logo.png)

## Accessing ChatGPT
The browser chat interface of ChatGPT can be accessed via [chat.openai.com](https://chat.openai.com/).
Authorization can be done via a Google or Microsoft account. After logging in you can start interacting with the chatbot by asking it a question in the chatbox.

For example, the query *Write a method in C# that calculates the median price out of a list of products.* returns the following result:


![Interacting with the chatbot via its web interface](/static/post/008/web-1.png)


## Generating code
Lets imagine we have a simple *User* class as shown below.
Each user has a name, and a list of friends, which are also Users.

    class User
    {
        public string Name { get; set; }
        public List<User> Friends { get; set; }
    }

If we want to create some kind of utility logging function to log information about a specific user, we can ask ChatGPT to generate this for us after first pasting the class code in the chatbox.
**Query**: 

*Could you create a method that prints out the summary of this user class for an instance?*

ChatGPT came up with the following method:

    public void PrintUserSummary(User user)
    {
        Console.WriteLine($"Name: {user.Name}");
        Console.WriteLine("Friends:");
        if (user.Friends == null || !user.Friends.Any())
        {
            Console.WriteLine("No friends found.");
        }
        else
        {
            foreach (var friend in user.Friends)
            {
                Console.WriteLine($"- {friend.Name}");
            }
        }
    }


## Converting code
Let's continue with our User example, and write a method that double links the friends.

    void LinkFriends(User user)
    {
        for (int i = 0; i < user.Friends.Count; i++)
        {
            User friend = user.Friends[i];
            if (!friend.Friends.Contains(user))
                friend.Friends.Add(user);
        }
    }

Perhaps we would like to see this method written in [Linq](https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/).
Query: Could you convert this code to make use of Linq?

And ChatGPT will convert the method just as we asked:

    void LinkFriends(User user)
    {
        user.Friends.Where(friend => !friend.Friends.Contains(user)).ToList().ForEach(friend => friend.Friends.Add(user));
    }

I won't go into the discussion about whether or not Linq makes is more or les readable, but as you can see it get's properly converted.

## Changing the language

Let's convert the method we initially created to Typescript.
Query:  could you convert this piece of code to typescript?

    function linkFriends(user: User) {
        user.friends.forEach(friend => {
            if (!friend.friends.includes(user)) {
                friend.friends.push(user);
            }
        });
    }



## Helping with Documentation
Lets say we encountered the above code in a wild codebase, and we could not figure out what it exactly does.
Let's ask ChatGPT:

![Explaining a piece of code](/static/post/008/web-2.png)

## Unit tests
Lets imagine the follwing setup.
We have a User class, a mockable IKeyValueStore interface and a Save and Load method.
We want to test these two methods.

    void SaveUser(User user, IKeyValueStore store)
    {
        store.Set(user.Name, user.Age.ToString());
    }

    User LoadUser(string name,IKeyValueStore store)
    {
        int age = int.Parse(store.Get(name));
        User u = new User();
        u.Age = age;
        u.Name = name;
        return u;
    }

    interface IKeyValueStore
    {
        void Set(string key, string value);
        string Get(string key);
    }

    class User
    {
        public string Name { get; set; }    
        public int Age { get; set; }
    }

Let's ask ChatGPT to generate some unit tests for us.

    [Test]
    public void SaveUser_ValidInput_SavesUserInStore()
    {
        // Arrange
        var store = new MemoryKeyValueStore();
        var user = new User { Name = "John", Age = 30 };

        // Act
        SaveUser(user, store);

        // Assert
        Assert.AreEqual(user.Age.ToString(), store.Get(user.Name));
    }

    [Test]
    public void LoadUser_ValidInput_LoadsUserFromStore()
    {
        // Arrange
        var store = new MemoryKeyValueStore();
        var user = new User { Name = "John", Age = 30 };
        store.Set(user.Name, user.Age.ToString());

        // Act
        var loadedUser = LoadUser(user.Name, store);

        // Assert
        Assert.AreEqual(user.Age, loadedUser.Age);
        Assert.AreEqual(user.Name, loadedUser.Name);
    }

    [Test]
    public void LoadUser_InvalidInput_ThrowsArgumentException()
    {
        // Arrange
        var store = new MemoryKeyValueStore();
        var invalidKey = "InvalidKey";

        // Act and Assert
        Assert.Throws<ArgumentException>(() => LoadUser(invalidKey, store));
    }

While these aren't perfect, they give us a good indication and baseline to start improving these testcases.


## Creating a new language!
Let's try to invent a new language called JefSpeak.
First we must declare some rules:

JefSpeak is a new programming language.
It resembles C#, but there are a few changes:
- a method declaration follows the following syntax: 'method' returntype methodname|arguments|
- the 'void' return type doesn't exist anymore, as it is replaced with 'nothing' 
- the int type is replaced with number
- above each method name there is an automatically generated comment block that explains the function of each parameter
- the '=' assignment operator is replaced with the word 'is'
- the '+' addition operator is replaced with the word 'and'
- the Console.Write() method is replaced is with say

Then we can ask it to convert a C# codeblock to this newly invented language.
Could you convert the following piece of code to JefSpeak?

    void Fibonacci(int len)
    {
        int a = 0, b = 1, c = 0;
        Console.Write("{0} {1}", a, b);
        for (int i = 2; i < len; i++)
        {
            c = a + b;
            Console.Write(" {0}", c);
            a = b;
            b = c;
        }
    }

And we get the following result:

    method nothing Fibonacci|number len|
    // This function prints out the first len Fibonacci numbers
    {
        number a is 0, b is 1, c is 0;
        say "{0} {1}", a, b;
        for (number i is 2; i < len; i++)
        {
            c is a and b;
            say " {0}", c;
            a is b;
            b is c;
        }
    }

What's even beter, is that our chat session now has knowledge of the concept of JefSpeak.
This means that from now on we can start asking questions about this new 'language'.
Let's have a look and see how we could calculate the median out of a list of numbers in JefSpeak:

    method number Median|list of number numbers|
    // This function calculates the median of a given list of numbers
    {
        numbers.sort();
        number len is numbers.length;
        if(len % 2 == 0)
        {
            number median is (numbers[len/2 - 1] and numbers[len/2]) / 2;
            return median;
        }
        else
        {
            number median is numbers[(len - 1) / 2];
            return median;
        }
    }

Well that's looks like an aweful and unwieldy language.
But it is a fun experiment to showcase ChatGPT's transformative capabilities nonetheless.


## Conclusion

In conclusion, ChatGPT is an incredibly powerful tool that can help software developers automate repetitive tasks, generate code, and even help with documentation. It can save you a significant amount of time and effort, allowing you to focus on more complex tasks and improve the overall efficiency of your work. With easy integration and access to the model, it is worth giving it a try in your next project. However keep in mind that AI assisted tools can be wrong, while their response might seem really solid and confident.

### Alternatives
A interesting alternative to check out might be [Github Copilot](https://github.com/features/copilot), which can intergrate right in your IDE. It is also developed in part by OpenAI.


## Further reading
- https://learn.microsoft.com/en-us/azure/azure-monitor/app/ilogger
- https://stackoverflow.com/questions/28800320/log4net-with-application-insights
- https://github.com/serilog-contrib/serilog-sinks-applicationinsights
- https://www.nexsoftsys.com/articles/integrating-apps-insights-with-nlog-aspnet-core.html
- https://www.nuget.org/packages/Microsoft.ApplicationInsights.NLogTarget
- https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/





