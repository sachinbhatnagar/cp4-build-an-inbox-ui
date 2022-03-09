const messages = [
  {
    id: 1,
    from: 'Rob Thrift <rob@thrift.com>',
    to: 'Joe McDoe <joe@mytech.com>',
    date: '2022-03-02T12:59:01.450Z',
    subject: 'Re: Wanted your views on the matter',
    message: `Hey Joe,
  
I discussed your concerns with the board here and I think we can support you in this proposal. Let me know how you want to proceed in the matter.
  
Best,
Rob`,
  },
  {
    id: 2,
    from: 'Richard L <license@cleanos.com>',
    to: 'Joe McDoe <joe@mytech.com>',
    date: '2022-03-01T08:00:00.000Z',
    subject: `It's time to renew!`,
    message: `Hi Joe,
  
We thank you for using CleanOS and would like to remind you that its time to renew your license for another year or you can take advantage of our discount offer 
and renew for 5 years at 35% off on the annual license fee.
    
Thanks,
Best Regards,
Richard Letter,
CEO,
CleanOS`,
  },
  {
    id: 3,
    from: 'Citibank <info@citibank.com>',
    to: 'Joe McDoe <joe@mytech.com>',
    date: '2022-02-23T02:00:00.000Z',
    subject: `Your Citibank Statement - January`,
    message: `Hi Joe,
  
Thank you for using Citibank. Your credit card statement for the month of January, 2022 is attached.
    
Thanks,
Best Regards,
Cards Division,
Citibank US`,
  },
  {
    id: 4,
    from: 'StockWorx <info@stockworx.com>',
    to: 'Joe McDoe <joe@mytech.com>',
    date: '2022-02-21T02:00:00.000Z',
    subject: `Coming up: Your scheduled investment on February 27, 2022`,
    message: `Dear Joe,
    
This is a reminder email for your scheduled investments in the Ultra Wealth Plan.
    
Regards,
The StockWorx Team`,
  },
];

export const getMails = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(messages);
    }, 1500);
  });
};

export const getUser = () =>
  Promise.resolve({
    name: 'John McDoe',
    email: 'joe@mytech.com',
  });
