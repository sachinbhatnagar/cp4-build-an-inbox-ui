# KnowledgeHut | Fullstack Development Bootcamp

## Class Project - Build an Inbox UI with React

 **Instructions**

1. Clone the repo locally
2. Open the terminal and go into the end folder
3. Run `npm install` to install all dependencies
4. Run `npm start` to bring up the development server

 **Important Notes**
 The /start folder represents an empty project created using the create-react-app utility. No change has been done except the addition of the `/src/services/index.js` file which exports two functions that simulate a backend provider for data fetching, as described below:

 - `getMails()` - This function returns a Promise which fulfils after a momentary delay to simulate loading data. Once the promise is resolved, you get an array of mail objects such as the one shown below:

 ```js
{
      id: 1,
      from: 'Rob Thrift <rob@thrift.com>',
      to: 'Joe McDoe <joe@mytech.com>',
      date: '2022-03-02T12:59:01.450Z',
      subject: 'Re: Wanted your views on the matter',
      message: `Hey Joe,
  
I discussed your concerns with the board here and I
 think we can support you in this proposal. 
 Let me know how you want to proceed in the matter.
  
Best,
Rob`,
}
  ```
  
- `getUser()` - This function returns a Promise which resolves instantly with a user object containing the name and e-mail ID of the user as shown below:


```js
{
    name: 'John McDoe',
    email: 'joe@mytech.com',
}
```

<https://www.knowledgehut.com/web-development/fullstack-development-bootcamp-training>

<sachin@knowledgehut.co>
